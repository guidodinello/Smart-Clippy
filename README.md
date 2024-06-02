https://chatgpt.com/c/edc66017-dda5-493d-aed4-84c5d23b0dfe

Step 7: Add Icons (Optional)

Create an icons directory inside your extension directory and add icons of sizes 16x16, 48x48, and 128x128 pixels named icon16.png, icon48.png, and icon128.png respectively.
Step 8: Test Your Extension

    Open Firefox and go to about:debugging.
    Click on "This Firefox" in the sidebar.
    Click on "Load Temporary Add-on" and select your manifest.json file.

Now, when you open a YouTube video, you should see your extension icon. Click it, and then click the "Copy Video Link" button to copy the title and URL to your clipboard.

This extension will display an alert confirming the copy action. You can customize and expand this extension further based on your needs.

# Future Improvements

-   [] Add icons.
-   [] Add a keyboard shortcut.
-   [] Allow to personalize the format of the copied text.
-   [] Add more functionalities like copying the video description, comments, etc.
