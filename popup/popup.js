console.debug("popup.js loaded");

async function copyPageInfo() {
    console.debug("Copying page info to clipboard");
    try {
        const [activeTab] = await browser.tabs.query({
            active: true,
            currentWindow: true,
        });

        const formattedLink = await getFormattedLink(
            activeTab.title,
            activeTab.url,
            ""
        );
        await navigator.clipboard.writeText(formattedLink);

        showNotification("LINK_COPY_SUCCESS");
    } catch (error) {
        console.error("Error copying link:", error);
        showNotification("LINK_COPY_ERROR");
    }
}

document.getElementById("copyButton").addEventListener("click", copyPageInfo);

document.getElementById("openOptions").addEventListener("click", async () => {
    if (browser.runtime.openOptionsPage) {
        browser.runtime.openOptionsPage();
    } else {
        window.open(browser.runtime.getURL("options.html"));
    }
});
