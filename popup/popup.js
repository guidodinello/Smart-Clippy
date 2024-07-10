console.debug("popup.js loaded");

document.getElementById("copyButton").addEventListener("click", async () => {
    console.debug("copy button event listener triggered");

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
        const _ = await browser.tabs.executeScript({
            code: "copyPageInfo();",
        });
    } catch (error) {
        console.error("Failed to execute copyPageInfo: ", error);
    }
});

document.getElementById("openOptions").addEventListener("click", async () => {
    console.debug("open options event listener triggered");

    if (browser.runtime.openOptionsPage) {
        browser.runtime.openOptionsPage();
    } else {
        window.open(browser.runtime.getURL("options.html"));
    }
});
