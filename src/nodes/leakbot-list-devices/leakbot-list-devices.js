const { connect } = require('@crusaider/leakbot-api');
const {
  makeLeakbotAPIRequestNode,
} = require('../shared/makeLeakbotAPIRequestNode');

module.exports = makeLeakbotAPIRequestNode(
  'leakbot-list-devices',
  async (credentials, config) => {
    const client = await connect(credentials);
    const devices = await client.listUserDevices();
    return devices.IDs;
  }
);
