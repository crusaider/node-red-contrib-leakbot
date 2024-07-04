const { connect } = require("@crusaider/leakbot-api");
const {
  makeLeakbotAPIRequestNode,
} = require("../shared/makeLeakbotAPIRequestNode");

module.exports = makeLeakbotAPIRequestNode(
  "leakbot-water-usage",
  async (credentials, config) => {
    const client = await connect(credentials);
    const deviceStatus = await client.getDeviceWaterUsage(config.deviceId);
    const { ts, ms, ...rest } = deviceStatus;
    return rest;
  },
);
