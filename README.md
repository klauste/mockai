# MockAI

MockAI is a mock server for OpenAI's API. It allows you to simulate API responses for development and testing purposes.

## Features

- Supports the following endpoint.

  - `/v1/completions`
  - `/v1/chat/completions`
  - `/v1/images/generations`

- Allows you to specify the type of mock response: echo, random, or fixed.
- Supports both single responses and streaming responses.
- Reads random responses from a text file.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set env

Open .env file and set your environment.

```bash
SERVER_PORT=5002
MOCK_TYPE=random
```

3. Start server:

```bash
npm start
```

## Environment Variables

- **SERVER_PORT**: The port the server listens on.
- **DEFAULT_MOCK_TYPE**: The default type of mock response.

## Contributing

Contributions are welcome! Please submit a pull request or create an issue to get started.
