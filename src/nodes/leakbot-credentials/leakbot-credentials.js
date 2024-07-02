module.exports = function (RED) {
  function LeakbotCredentials(config) {
    RED.nodes.createNode(this, config);
  }
  RED.nodes.registerType('leakbot-credentials', LeakbotCredentials, {
    credentials: {
      email: { type: 'text' },
      password: { type: 'text' },
    },
  });
};
