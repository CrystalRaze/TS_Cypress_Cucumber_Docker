const fs = require("fs");
const folder = "./docker_reports";
if (fs.existsSync(folder)) {
  fs.rmSync(folder, { recursive: true });
}
