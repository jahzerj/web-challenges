import { createServer } from 'node:http';

export const server = createServer((request, response) => {
  if (request.url === '/api/fish/1') {
    response.statusCode = 200;
    response.end('Shrimp');
  } else if (request.url === '/api/fish/2') {
    response.statusCode = 200;
    response.end('Anemone');
  } else {
    response.statusCode = 400;
    response.end('Not Found');
  }
});
