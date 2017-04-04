const isPort = value => (
  typeof value === 'number' &&
  value >= 0 && value <= 65534 &&
  Math.floor(value) === value
)

// splitHost('localhost:80') => { hostname: 'localhost', port: 80 }
// splitHost('localhost') => { hostname: 'localhost' }
// splitHost('80') => { port: 80 }
const splitHost = host => {
  host = String(host)
  const i = host.lastIndexOf(':')

  if (i === -1) {
    const port = +host
    return isPort(port)
      ? { port }
      : { hostname: host }
  }

  const port = +host.slice(i + 1)
  return isPort(port)
    ? {
      hostname: host.slice(0, i),
      port
    }
    : { hostname: host }
}

export { splitHost as default }
