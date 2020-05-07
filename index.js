const core = require("@actions/core");
const exec = require("@actions/exec");

async function run() {
  const requirementsPath = core.getInput("path");

  // ====================
  // Install dependencies
  // ====================
  try {
    // update pip
    console.log("Updating pip...");
    await exec.exec("python -m pip install --upgrade pip");
    // install Python dependencies on user-defined requirements.txt file path

    console.log("Updating Python dependencies...");
    await exec.exec(`python -m pip install -r ${requirementsPath}`);
    console.log("");
    console.log("The environment contains the following Python packages:");
    await exec.exec("python -m pip list");
  } catch (error) {
    core.setFailed(
      `Action failed during dependency installation attempt with error: ${error.message}`
    );
  }
}

run();
