import * as fs from "fs";
import { openFileInEditor } from "./openFileInEditor.js";
const createFile = (
  filePath: string,
  fileContent: string,
  successMessage: string = ""
) => {
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error("Error creating the file:", err);
    } else {
      console.log(successMessage);
      if (filePath.includes("index")) return;
      openFileInEditor(filePath);
    }
  });
};
export { createFile };
