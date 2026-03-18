/**
 * Launch Cloud Function: GET /user/:name
 * Dynamic path segment – e.g. /user/Jake returns "Hello Jake!"
 */
export default function handler(request, response) {
  const name = request.params?.name || 'Guest';
  response.status(200).json({
    message: `Hello ${name}!`,
    params: request.params,
  });
}
