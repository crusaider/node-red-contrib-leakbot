// Convenience functions for setting the node status

function makeStatusHelpers(node) {
  const warnStatus = (text) =>
    node.status({
      fill: 'yellow',
      shape: 'ring',
      text,
    });

  const errorStatus = (text) =>
    node.status({
      fill: 'red',
      shape: 'dot',
      text,
    });

  const infoStatus = (text) =>
    node.status({
      fill: 'green',
      shape: 'ring',
      text,
    });

  const clearStatus = () => node.status({});

  return { warnStatus, errorStatus, infoStatus, clearStatus };
}

module.exports = { makeStatusHelpers };
