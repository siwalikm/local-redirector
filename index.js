#!/usr/bin/env node
import http from "http";
import httpProxy from "http-proxy";
import ip from "ip";
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv))
  .option('t', {
    alias: 'target',
    description: 'The target URL where the HTTP proxy will redirect the requests',
    type: 'string',
  })
  .option('p', {
    alias: 'port',
    description: 'The port number on which the HTTP proxy server will listen',
    type: 'number',
  })
  .help()
  .alias('help', 'h')
  .argv;

const target = argv.target || "http://localhost:3000";
const PORT = argv.port || 8888;

const proxy = httpProxy.createProxyServer({ target, changeOrigin: true });

proxy.on("error", (err, req, res) => {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  res.end('Something went wrong. And we are reporting a custom error message.');
});

const startServer = (proxy) => {
  http
    .createServer((req, res) => proxy.web(req, res))
    .listen(PORT, () => {
      const url = `http://${ip.address()}:${PORT}`;
      console.log("Visit local-redirected server at:", url);
    });
}

startServer(proxy);