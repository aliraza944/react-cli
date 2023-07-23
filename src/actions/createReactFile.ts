import * as Path from "path";
import { upperCaseName } from "../utils/upperCaseName.js";
import { ComponentTemplate, IndexTemplate } from "../templates/component.js";
import { isTypeScriptProject } from "../utils/typeScriptSelection.js";
import { createFile } from "../utils/createFile.js";
import { customHook } from "../templates/customHook.js";
import { lookForFolder } from "../utils/lookForFolder.js";
export const createReactFile = (name: string, folder: string) => {
  const componentName = upperCaseName(name);
  createComponentsFile(componentName, folder);
};

const createComponentsFile = (name: string, folder: string) => {
  const fileContent = ComponentTemplate(name);
  const indexFileContent = IndexTemplate(name);
  const componentsDir = Path.resolve(process.cwd(), `src`, folder, `${name}`);
  const fileExtension = isTypeScriptProject ? ".ts" : ".js";

  // check if the components directory exists
  lookForFolder(componentsDir, true);

  const filePath = Path.join(componentsDir, name + `${fileExtension}x`);
  const indexFilePath = Path.join(componentsDir, "index" + `${fileExtension}x`);

  const successMessage = `Component ${name}${fileExtension}x created successfully`;
  //  component main file
  createFile(filePath, fileContent);
  // index file
  createFile(indexFilePath, indexFileContent, successMessage);
};
