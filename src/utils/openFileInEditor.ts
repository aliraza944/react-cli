import { exec } from "child_process";

export function openFileInEditor(filePath: string) {
  exec(`code ${filePath}`);
}
