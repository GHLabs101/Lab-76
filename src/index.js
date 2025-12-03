const core = require('@actions/core');

(async () => {
  const message = core.getInput('message');
  const uppercase = core.getInput('uppercase') === 'true';

  const finalOutput = uppercase ? message.toUpperCase() : message;

  core.setOutput('result', finalOutput);
})();
