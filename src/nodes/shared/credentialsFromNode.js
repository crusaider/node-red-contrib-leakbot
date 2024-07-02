function credentialsFromNode(RED, credentialsNodeId) {
  const { email, password } = RED.nodes.getNode(credentialsNodeId).credentials;
  return { username: email, password };
}

module.exports = { credentialsFromNode };
