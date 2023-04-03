import { Command } from "commander";
import { createComponent } from "../actions/createComponent.js";
const program = new Command();

program.name("react cli").description("CLI to quickly create react components");

program.command("component <name>").action((name) => {
  createComponent(name);
});
export default program;
