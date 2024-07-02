const { makeStatusHelpers } = require('./makeStatusHelpers');
const { credentialsFromNode } = require('./credentialsFromNode');

function makeLeakbotAPIRequestNode(deviceType, apiAction) {
  return (RED) => {
    function DeviceNode(config) {
      RED.nodes.createNode(this, config);
      const node = this;

      const { errorStatus, clearStatus } = makeStatusHelpers(node);

      const credentials = credentialsFromNode(RED, config.credsNode);

      node.on('input', async (msg, send, done) => {
        try {
          msg.payload = await apiAction(credentials, config);
          node.send(msg);
          clearStatus();
          done();
        } catch (error) {
          errorStatus(error.message);
          node.error(error);
          done(error);
        }
      });
    }
    RED.nodes.registerType(deviceType, DeviceNode);
  };
}

module.exports = { makeLeakbotAPIRequestNode };
