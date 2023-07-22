import { Command } from "commander";
import { createComponent } from "../actions/createComponent.js";
const program = new Command();
//TODO: add version
program.name("react cli").description("CLI to quickly create react components");

program
  .command("component <name>")
  .option(
    "-h, --hook [specified-folder-name]",
    "create the components custom hook"
  )
  .action((name, option) => {
    createComponent(name, option.hook);
  });
export default program;
