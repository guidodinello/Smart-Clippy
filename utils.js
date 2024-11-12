// Utility function to format links based on selected format
async function getFormattedLink(title, url, selectedText) {
    console.debug("Getting formatted link");
    try {
        const result = await browser.storage.sync.get([
            "copyFormat",
            "customFormat",
        ]);
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
    } catch (error) {
        console.error("Error getting formatted link:", error);
        throw error;
    }
}
