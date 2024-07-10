// run: node icons/icons.js

const { program } = require("commander");
const sharp = require("sharp");
const path = require("path");

program
    .option("-i, --input <path>", "Input image path")
    .option("-o, --output <path>", "Output directory path")
    .option("-s, --sizes <sizes>", "Comma-separated list of sizes", "32,64,128")
    .parse(process.argv);

const options = program.opts();

const defaults = {
    input: "./icons/paperclip.png",
    output: "./icons",
    sizes: "32,64,128",
};

const inputPath = options.input || defaults.input;
const outputPath = options.output || defaults.output;
const sizes = (options.sizes || defaults.sizes).split(",").map(Number);

async function resizeImage(size) {
    const outputFilename = path.join(outputPath, `icon${size}.png`);
    await sharp(inputPath).resize(size, size).toFile(outputFilename);
    console.log(`Created ${outputFilename}`);
}

Promise.all(sizes.map(resizeImage))
    .then(() => console.log("All icons created successfully"))
    .catch((error) => console.error("Error resizing images:", error));
