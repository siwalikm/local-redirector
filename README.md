# local-redirector
![NPM Version](https://img.shields.io/npm/v/local-redirector)

**local-redirector** is a Node.js package that provides a simple command-line interface (CLI) to run a local HTTP proxy server. This tool streamlines development and testing workflows by allowing you to redirect local URLs to different target URLs.


## Installation
Install globally using npm:

```bash
npm install -g local-redirector
```

## Usage
To start the local proxy server, run:

```bash
local-redirector --target [TARGET_URL] --port [PORT_NUMBER]
```

Replace
[TARGET_URL]: The URL you want to redirect requests to.
[PORT_NUMBER]: The desired port number for the proxy server (defaults to 8888 if not specified).

Example:

```bash
local-redirector --target https://your-custom-api.com --port 3000
```
This command creates a local proxy server on port 3000 that redirects requests to your custom API endpoint https://your-custom-api.com. You can then access this API locally at http://{your_local_ip}:3000 from any device connected to your network.

## Use Cases
- **Development**: Test with different backend services locally.
- **Testing**: Simulate various environments.
- **Debugging**: Switch between target URLs easily.


## Contributing

Feel free to contribute! Open an issue or submit a pull request on GitHub.

## License

MIT License.
