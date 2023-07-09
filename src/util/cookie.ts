/**
 * Parses an HTTP request header containing cookies and returns an object representing the parsed cookies.
 *
 * @param {string} cookieHeader - The value of the 'cookie' header in an HTTP request.
 * @returns {object} An object representing the parsed cookies, with cookie names as keys and cookie values as values.
 *
 * @example
 * // Parse the cookies from an HTTP request
 * const cookieHeader = 'sessionId=abc123; username=john.doe';
 * const cookies = parseCookie(cookieHeader);
 *
 * // Access individual cookie values by name
 * const sessionId = cookies.sessionId; // 'abc123'
 * const username = cookies.username; // 'john.doe'
 */
export function parseCookie(cookieHeader = ''): { [key: string]: string } {
  const cookies: { [key: string]: string } = {};

  if (!cookieHeader) {
    return cookies;
  }

  const cookieString = cookieHeader.split(';');

  cookieString.forEach((cookie) => {
    const parts = cookie.split('=');

    const cookieName = parts.shift()?.trim() || '';
    cookies[cookieName] = decodeURIComponent(parts.join('='));
  });

  return cookies;
}
