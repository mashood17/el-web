const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "public/assets/images");
const outputDir = path.join(__dirname, "public/assets/images-optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

async function optimize() {
  for (const file of files) {
    if (!file.endsWith(".jpg")) continue;

    const input = path.join(inputDir, file);

    const output = path.join(
      outputDir,
      file.replace(".jpg", ".webp")
    );

    await sharp(input)
      .resize({
        width: 1600,
        withoutEnlargement: true,
      })
      .webp({
        quality: 82,
      })
      .toFile(output);

    console.log(`✓ ${file}`);
  }

  console.log("Done");
}

optimize();