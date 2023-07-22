import * as Path from "path";
import * as fs from "fs";
import { upperCaseName } from "../utils/upperCaseName.js";
import { ComponentTemplate, IndexTemplate } from "../templates/component.js";
import { isTypeScriptProject } from "../utils/typeScriptSelection.js";
export const createComponent = (name: string) => {
  const componentName = upperCaseName(name);
  createComponentsFile(componentName);
};

const lookForComponentsFolder = (componentsDir: string) => {
  const isComponentDirExits = fs.existsSync(componentsDir);

  // if not create a new directory
  if (!isComponentDirExits) {
    try {
      fs.mkdirSync(componentsDir, { recursive: true });
    } catch (error) {
      console.error("Error creating the directory:", error);
    }
    return;
  }
  console.error("The component already exists");
  process.exit(1);
};

const createComponentsFile = (name: string) => {
  const fileContent = ComponentTemplate(name);
  const indexFileContent = IndexTemplate(name);
  const componentsDir = Path.resolve(
    process.cwd(),
    `src`,
    "components",
    `${name}`
  );

  const fileExtension = isTypeScriptProject ? ".tsx" : ".jsx";

  // check if the components directory exists
  lookForComponentsFolder(componentsDir);
  const filePath = Path.join(componentsDir, name + `${fileExtension}`);
  const indexFilePath = Path.join(componentsDir, "index" + `${fileExtension}`);

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error("Error creating the file:", err);
    } else {
      fs.writeFile(indexFilePath, indexFileContent, (err) => {
        if (err) {
          console.error("Error creating the file:", err);
        } else {
          console.log(`Component ${name}${fileExtension} created successfully`);
        }
      });
    }
  });
};
