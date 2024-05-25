# local-redirector
![NPM Version](https://img.shields.io/npm/v/local-redirector)

**local-redirector** is a simple CLI based HTTP proxy server for Node.js. It helps you manage local URL redirections during development and testing. By specifying a target URL, you can create a local proxy server that redirects to your chosen target.


## Installation
Install globally using npm:

```bash
npm install -g local-redirector
```

## Usage
To start the local proxy server, run:

```bash
local-redirector --target http://google.com --port 9009
```

Access the target URL locally at `{your_local_ip}:9009` from any device connected to the same network.


## Use Cases
- **Development**: Test with different backend services locally.
- **Testing**: Simulate various environments.
- **Debugging**: Switch between target URLs easily.


## Contributing

Feel free to contribute! Open an issue or submit a pull request on GitHub.

## License

MIT License.
