// content.js

// "commands": {
//     "copy-video-link": {
//         "suggested_key": {
//             "default": "Ctrl+Shift+V"
//         },
//         "description": "Copy YouTube video title and URL to clipboard. [title](url)"
//     },
//     "copy-video-link-desription": {
//         "suggested_key": {
//             "default": "Ctrl+Shift+Z"
//         },
//         "description": "Copy [title](url)\nDescription to clipboard"
//     }
// }

// import { FORMATS } from "./defaults.js";
// import { showNotification } from "./ui/notification.js";

console.debug("content.js loaded");

function showNotification(key) {
    return "placeholder";
}

function getFormattedLink(title, url, selectedText) {
    console.debug("Getting formatted link");
    return browser.storage.sync
        .get(["copyFormat", "customFormat"])
        .then((result) => {
            const format = result.copyFormat || FORMATS.MARKDOWN;
            const customFormat = result.customFormat || "";

            let formattedLink = "";
            switch (format) {
                case FORMATS.MARKDOWN:
                    formattedLink = `[${title}](${url})`;
                    break;
                case FORMATS.HTML:
                    formattedLink = `<a href="${url}">${title}</a>`;
                    break;
                case FORMATS.PLAINTEXT:
                    formattedLink = `${title} - ${url}`;
                    break;
                case FORMATS.CUSTOM:
                    formattedLink = customFormat
                        .replace("{title}", title)
                        .replace("{url}", url);
                    break;
            }

            if (selectedText) {
                formattedLink += `\n\n> ${selectedText}`;
            }

            return formattedLink;
        });
}

function copyPageInfo() {
    console.debug("Copying page info to clipboard");
    const title = document.title;
    const url = window.location.href;
    const selectedText = window.getSelection().toString().trim();

    getFormattedLink(title, url, selectedText)
        .then((formattedLink) => {
            navigator.clipboard.writeText(formattedLink);
            showNotification("LINK_COPY_SUCCESS");
        })
        .catch((error) => {
            console.error("Error copying link: ", error);
            showNotification("LINK_COPY_ERROR");
        });
}

document.addEventListener("keydown", (event) => {
    console.debug("Keydown event received");
    if (event.ctrlKey && event.shiftKey && event.key === "V") {
        console.debug("Keydown event received");
        navigator.clipboard.writeText(copyPageInfo());
    }
});
