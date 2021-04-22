import debug from 'debug';
import http from 'http';
import app from '../app';

// Port must be normalized to a string/number or false
const normalizePort = (portToNormalize) => {
  const port = parseInt(portToNormalize, 10);
  if (Number.isNaN(port)) {
    return portToNormalize;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

// Get port from environment, store in Express, then create server
const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);

// Listen for an HTTP error event
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  // respond to specific errors with messages
  switch (error.code) {
  case 'EACCES':
    alert(`${bind} requires elevated privileges`);
    process.exit(1);
    break;
  case 'EADDRINUSE':
    alert(`${bind} is already in use`);
    process.exit(1);
    break;
  default:
    throw error;
  }
};

// Listen for an HTTP listening event
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
};

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
