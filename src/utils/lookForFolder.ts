import * as fs from "fs";
const lookForFolder = (componentsDir: string, isComponent = false) => {
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
  if (!isComponent) return;
  console.error("The component already exists");
  process.exit(1);
};
export { lookForFolder };
