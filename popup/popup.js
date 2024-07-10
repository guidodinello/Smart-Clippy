console.debug("popup.js loaded");

document.getElementById("copy-button").addEventListener("click", async () => {
    console.debug("copy button event listener triggered");

    try {
        const _ = await browser.tabs.executeScript({
            file: "/defaults.js",
        });
    } catch (error) {
        console.error("Failed to execute defaults.js: ", error);
    }

    try {
        console.debug("Executing content script");
        const _ = await browser.tabs.executeScript({
            file: "/content.js", // relative to project root directory
        });
    } catch (error) {
        console.error("Failed to execute content script: ", error);
    }

    try {
        console.debug("Executing copyPageInfo");
        const [videoDetails] = await browser.tabs.executeScript({
            code: "copyPageInfo();",
        });

        console.debug("Content script executed: ", videoDetails);
        const span = document.createElement("span");
        span.textContent = videoDetails;
        document.body.appendChild(span);
        navigator.clipboard.writeText(videoDetails);
    } catch (error) {
        console.error("Failed to execute copyPageInfo: ", error);
    }
});
