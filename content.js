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

import { FORMATS } from "./defaults.js";
import { showNotification } from "./notification.js";

function getFormattedLink(title, url, selectedText) {
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
    const title = document.title;
    const url = window.location.href;
    const selectedText = window.getSelection().toString().trim();

    getFormattedLink(title, url, selectedText).then((formattedLink) => {
        navigator.clipboard.writeText(formattedLink);
        showNotification("Link copied!");
    });
}

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === "V") {
        console.log("Keydown event received");
        copyPageInfo();
    }
});
