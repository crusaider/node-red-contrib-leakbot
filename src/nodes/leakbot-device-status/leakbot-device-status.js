const { connect } = require('@crusaider/leakbot-api');
const {
  makeLeakbotAPIRequestNode,
} = require('../shared/makeLeakbotAPIRequestNode');

module.exports = makeLeakbotAPIRequestNode(
  'leakbot-device-status',
  async (credentials, config) => {
    const client = await connect(credentials);
    const deviceStatus = await client.getDeviceStatus(config.deviceId);
    const { ts, ms, ...rest } = deviceStatus;
    return rest;
  }
);
