import * as path from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";

const __filename = fileURLToPath(import.meta.url);
let currentDir = path.dirname(__filename);

while (true) {
  const packageJsonPath = path.join(currentDir, "package.json");

  if (fs.existsSync(packageJsonPath)) {
    break; // Found the package.json file
  }

  const parentDir = path.dirname(currentDir);

  // Check if we reached the root directory
  if (currentDir === parentDir) {
    throw new Error("package.json not found in the directory tree.");
  }

  currentDir = parentDir;
}

const __dirname = currentDir;
export { __dirname };
