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

function getYouTubeVideoDetails() {
    const videoTitle = document.head.querySelector("title").innerText;
    const videoUrl = window.location.href;
    return `[${videoTitle}](${videoUrl})`;
}

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === "V") {
        navigator.clipboard.writeText(getYouTubeVideoDetails());
    }
});
