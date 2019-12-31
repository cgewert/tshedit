import { app } from "electron";
import { Editor } from "./src/tshedit";

app.on("ready", () => {
  const tshedit = new Editor();
  tshedit.createWindow(720, 1280);
});
