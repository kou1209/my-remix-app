const VALID_USERNAME = "aaaaa"
const VALID_PASSWORD = "aaaaa"

const createErrorResponse = (message: string, status: number, statusText: string) => {
  return new Response(message, {
    status,
    statusText,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
};

export const authenticateUser = async (request: Request) => {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) {
    throw createErrorResponse("Unauthorized", 401, "Unauthorized");
  }

  const [scheme, credentials] = authHeader.split(" ");

  if (scheme !== "Basic") {
    throw createErrorResponse("Invalid authentication scheme", 400, "Bad Request");
  }

  const [username, password] = Buffer.from(credentials, "base64")
    .toString()
    .split(":");

  if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
    throw createErrorResponse("Invalid credentials", 401, "Unauthorized");
  }

  return true;
};
