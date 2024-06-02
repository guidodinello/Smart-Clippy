// popup.js
document.getElementById("copy-button").addEventListener("click", async () => {
    let [tab] = await browser.tabs.query({ active: true, currentWindow: true });

    browser.tabs.executeScript(tab.id, { file: "content.js" }).then(() => {
        browser.tabs
            .executeScript(tab.id, {
                code: "getYouTubeVideoDetails();",
            })
            .then((results) => {
                const videoDetails = results[0];
                const textarea = document.createElement("textarea");
                textarea.value = videoDetails;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
                alert("Copied to clipboard!");
            });
    });
});
