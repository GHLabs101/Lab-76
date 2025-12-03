const core = require('@actions/core');

async function run() {
  try {
    const message = core.getInput('message');
    const uppercase = core.getInput('uppercase') === 'true';

    const result = uppercase ? message.toUpperCase() : message;

    core.setOutput('result', result);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
