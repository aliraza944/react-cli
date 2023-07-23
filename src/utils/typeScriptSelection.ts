import * as Path from "path";
import * as fs from "fs";

const tsconfigPath = Path.join(process.cwd(), "tsconfig.json");
export const isTypeScriptProject = fs.existsSync(tsconfigPath);
