document.getElementById("copy-button").addEventListener("click", async () => {
    let [tab] = await browser.tabs.query({ active: true, currentWindow: true });

    browser.tabs.executeScript(tab.id, { file: "content.js" }).then(() => {
        browser.tabs
            .executeScript(tab.id, {
                code: "getYouTubeVideoDetails();",
            })
            .then((results) => {
                const videoDetails = results[0];
                const span = document.createElement("span");
                span.textContent = videoDetails;
                document.body.appendChild(span);
                navigator.clipboard.writeText(videoDetails);
            });
    });
});
