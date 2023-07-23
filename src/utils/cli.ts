import { Command } from "commander";
import { createComponent } from "../actions/createComponent.js";
import { createReactFile } from "../actions/createReactFile.js";
import { createCustomHook } from "../actions/createCustomHook.js";
const program = new Command();
//TODO: add version
program.name("react cli").description("CLI to quickly create react components");

//  create react file
program.command("file <name> <folder>").action((name, folder) => {
  createReactFile(name, folder);
});
//  create component
program
  .command("component <name>")
  .option(
    "-h, --hook [specified-folder-name]",
    "create the components custom hook"
  )
  .action((name, option) => {
    createComponent(name, option.hook);
  });

// create custom hook
program.command("hook <name> [folder]").action((name, folder) => {
  createCustomHook(name, folder);
});
export default program;
