import * as Path from "path";
import { upperCaseName } from "../utils/upperCaseName.js";
import { ComponentTemplate, IndexTemplate } from "../templates/component.js";
import { isTypeScriptProject } from "../utils/typeScriptSelection.js";
import { createFile } from "../utils/createFile.js";
import { customHook } from "../templates/customHook.js";
import { lookForFolder } from "../utils/lookForFolder.js";
export const createComponent = (
  name: string,
  hook: undefined | boolean | string
) => {
  const componentName = upperCaseName(name);
  createComponentsFile(componentName, hook);
};

const createComponentsFile = (
  name: string,
  hook: undefined | boolean | string
) => {
  const isCustomHookFolderSpecified = typeof hook === "string";
  const fileContent = ComponentTemplate(name, hook);
  const indexFileContent = IndexTemplate(name);
  const customHookFileContent = customHook(name);
  const componentsDir = Path.resolve(
    process.cwd(),
    `src`,
    "components",
    `${name}`
  );
  const customHooksDir = Path.resolve(process.cwd(), `src`, `${hook}`);
  const fileExtension = isTypeScriptProject ? ".ts" : ".js";

  // check if the components directory exists
  lookForFolder(componentsDir, true);
  // check if the custom hooks directory exists
  if (isCustomHookFolderSpecified) {
    lookForFolder(customHooksDir);
  }
  const filePath = Path.join(componentsDir, name + `${fileExtension}x`);

  const indexFilePath = Path.join(componentsDir, "index" + `${fileExtension}x`);

  const customHookFilePath = Path.join(
    isCustomHookFolderSpecified ? customHooksDir : componentsDir,
    `use${name}` + `${fileExtension}`
  );
  const successMessage = `Component ${name}${fileExtension}x created successfully`;
  //  component main file
  createFile(filePath, fileContent);
  // custom hook file

  hook !== undefined && createFile(customHookFilePath, customHookFileContent);
  // index file
  createFile(indexFilePath, indexFileContent, successMessage);
};
