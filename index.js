"use strict";

const isPort = (value) =>
  typeof value === "number" &&
  value >= 0 &&
  value <= 65534 &&
  Math.floor(value) === value;

// splitHost('localhost:80') => { host: 'localhost', hostname: 'localhost', port: 80 }
// splitHost('localhost') => { host: 'localhost', hostname: 'localhost' }
// splitHost('80') => { port: 80 }
// splitHost(undefined) => undefined
module.exports = function splitHost(host) {
  if (host === undefined) {
    return;
  }

  host = String(host);
  const i = host.lastIndexOf(":");

  if (i === -1) {
    const port = +host;
    return isPort(port) ? { port } : { host, hostname: host };
  }

  const isIpv6 = host[0] === "[";

  const port = +host.slice(i + 1);
  if (isPort(port)) {
    const hostname = isIpv6 ? host.slice(1, i - 1) : host.slice(0, i);
    return { host: hostname, hostname, port };
  }

  if (isIpv6) {
    host = host.slice(1, -1);
  }

  return { host, hostname: host };
};
