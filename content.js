// content.js
function getYouTubeVideoDetails() {
    const videoTitle = document.head.querySelector("title").innerText;
    const videoUrl = window.location.href;
    return `[${videoTitle}](${videoUrl})`;
}
