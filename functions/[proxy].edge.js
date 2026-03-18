/**
 * Launch Edge Function – runs at the edge before the request hits your origin.
 * File must be named [proxy].edge.js and live in /functions.
 * @see https://www.contentstack.com/docs/developers/launch/edge-functions
 */
export default function handler(request, context) {
  const parsedUrl = new URL(request.url);
  const pathname = parsedUrl.pathname;
  const method = request.method;
  const clientIp = request.headers.get('x-forwarded-for') || 'unknown';

  console.log('[Edge Function] Request:', {
    method,
    pathname,
    url: request.url,
    clientIp,
    timestamp: new Date().toISOString(),
  });

  // Proxy the request to the Launch origin (your app / static assets)
  return fetch(request);
}
