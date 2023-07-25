import { exec } from "child_process";

export function openFileInEditor(filePath: string) {
  const formattedPath = filePath.replace(/\\/g, "\\\\");
  exec(`code "${formattedPath}"`);
}
