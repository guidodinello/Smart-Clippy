import { FORMATS } from "../defaults.js";

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
document.getElementById("save").addEventListener("click", saveOptions);
document
    .getElementById("copyFormat")
    .addEventListener("change", toggleCustomFormat);
