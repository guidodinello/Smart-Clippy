console.debug("options.js loaded");

// ver como eliminar esta duplicacion de codigo.
// no puedo usar export en defaults.js e importarlo aca porque por el content.js me salta export should be at top level.
const FORMATS = Object.freeze({
    MARKDOWN: "markdown",
    HTML: "html",
    PLAINTEXT: "plaintext",
    CUSTOM: "custom",
});
//pasa lo mismo para showNotification
// capaz esto se pueda arreglar usando un bundler

function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        copyFormat: document.getElementById("copyFormat").value,
        customFormat: document.getElementById("customFormat").value,
    });
}

function restoreOptions() {
    function setCurrentChoice(result) {
        document.getElementById("copyFormat").value =
            result.copyFormat || FORMATS.MARKDOWN;
        document.getElementById("customFormat").value =
            result.customFormat || "";
        toggleCustomFormat();
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.sync.get(["copyFormat", "customFormat"]);
    getting.then(setCurrentChoice, onError);
}

function toggleCustomFormat() {
    const customFormatDiv = document.getElementById("customFormatDiv");
    customFormatDiv.style.display =
        document.getElementById("copyFormat").value === FORMATS.CUSTOM
            ? "block"
            : "none";
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", (e) => {
    saveOptions(e);
    //showNotification("optionsSaved");
});
document
    .getElementById("copyFormat")
    .addEventListener("change", toggleCustomFormat);
