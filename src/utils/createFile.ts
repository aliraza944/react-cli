import * as fs from "fs";

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
    }
  });
};
export { createFile };
