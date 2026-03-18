/**
 * Launch Cloud Function: GET/POST /hello
 * Runs only when Cloud Functions are enabled (disabled when using SSR server command).
 * @see https://www.contentstack.com/docs/developers/launch/cloud-functions
 */
export default function handler(request, response) {
  response.status(200).json({
    message: 'Hello from Launch Cloud Function',
    method: request.method,
    query: request.query,
    body: request.body,
    timestamp: new Date().toISOString(),
  });
}
