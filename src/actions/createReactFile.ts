import * as Path from "path";
import { upperCaseName } from "../utils/upperCaseName.js";
import { ComponentTemplate, IndexTemplate } from "../templates/component.js";
import { isTypeScriptProject } from "../utils/typeScriptSelection.js";
import { createFile } from "../utils/createFile.js";
import { lookForFolder } from "../utils/lookForFolder.js";
export const createReactFile = (name: string, folder: string) => {
  const componentName = upperCaseName(name);
  reactFile(componentName, folder);
};

const reactFile = (name: string, folder: string) => {
  const fileContent = ComponentTemplate(name);
  const indexFileContent = IndexTemplate(name);
  const fileDir = Path.resolve(process.cwd(), `src`, folder, `${name}`);
  const fileExtension = isTypeScriptProject ? ".ts" : ".js";

  // check if the components directory exists
  lookForFolder(fileDir, true);

  const filePath = Path.join(fileDir, name + `${fileExtension}x`);
  const indexFilePath = Path.join(fileDir, "index" + `${fileExtension}x`);

  const successMessage = `Component ${name}${fileExtension}x created successfully`;
  //  component main file
  createFile(filePath, fileContent);
  // index file
  createFile(indexFilePath, indexFileContent, successMessage);
};
