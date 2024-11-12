// Main function to handle copying page info
async function copyPageInfo() {
    console.debug("Copying page info to clipboard");
    try {
        const title = document.title;
        const url = window.location.href;
        const selectedText = window.getSelection().toString().trim();

        const formattedLink = await getFormattedLink(title, url, selectedText);
        await navigator.clipboard.writeText(formattedLink);

        showNotification("LINK_COPY_SUCCESS");
    } catch (error) {
        console.error("Error copying link:", error);
        showNotification("LINK_COPY_ERROR");
    }
}

// Event listener for keyboard shortcut
document.addEventListener("keydown", (event) => {
    console.debug("Keydown event received");
    if (
        (event.ctrlKey || event.metaKey) &&
        event.shiftKey &&
        event.key === "V"
    ) {
        console.debug("Shortcut triggered");
        copyPageInfo();
    }
});
