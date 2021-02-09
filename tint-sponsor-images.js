#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const tintColor = "#269999";

const walkAndTint = async (rootImageDir) => {
  const normalDir = await fs.promises.opendir(
    path.resolve(rootImageDir, "./normal/")
  );
  const tintDir = await fs.promises.opendir(
    path.resolve(rootImageDir, "./tint/")
  );

  for await (const dirent of normalDir) {
    if (dirent.isFile()) {
      const untintedPath = path.resolve(normalDir.path, dirent.name);
      const tintedPath = path.resolve(tintDir.path, dirent.name);
      // await fs.rm(tintedPath); // only in Node.js v14.14.0 and later
      // await fs.unlink(tintedPath);

      // TODO: dark logos maintain their darkness; instead,
      // all logos should have similar brightness.
      await sharp(untintedPath)
        // .greyscale()
        .tint(tintColor)
        .gamma(1, 2)
        .toFile(tintedPath, { quality: 100, lossless: true });
      // TODO: same output format as Prettier
      console.log(`tinted ${dirent.name}`);
    }
  }
};
walkAndTint("./src/images/sponsors/").catch(console.error);
