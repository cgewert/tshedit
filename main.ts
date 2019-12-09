import { app } from "electron";
import fs from "fs";
import { Editor } from "./src/tshedit";

app.on("ready", () => {
  const tshedit = new Editor();
  const root = fs.readFileSync("./index.html");
  console.log(root);
  tshedit.createWindow(720, 1280);
});
