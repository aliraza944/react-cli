import * as Path from "path";
import { upperCaseName } from "../utils/upperCaseName.js";
import { ComponentTemplate, IndexTemplate } from "../templates/component.js";
import { isTypeScriptProject } from "../utils/typeScriptSelection.js";
import { createFile } from "../utils/createFile.js";
import { customHook } from "../templates/customHook.js";
import { lookForFolder } from "../utils/lookForFolder.js";
export const createCustomHook = (name: string, folder: string | undefined) => {
  const componentName = upperCaseName(name);
  customHookFile(componentName, folder);
};

const customHookFile = (name: string, folder: string | undefined) => {
  const fileContent = customHook(name);
  const customHooksDir = folder
    ? Path.resolve(process.cwd(), `src`, `${folder}`)
    : Path.resolve(process.cwd(), `src`, `hooks`);

  const fileExtension = isTypeScriptProject ? ".ts" : ".js";

  lookForFolder(customHooksDir);

  const filePath = Path.join(
    customHooksDir,
    "use" + name + `${fileExtension}x`
  );

  const successMessage = `Custom Hook  use${name}${fileExtension}x created successfully`;
  createFile(filePath, fileContent, successMessage);
};
