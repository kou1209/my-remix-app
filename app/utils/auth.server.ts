const VALID_USERNAME = "12345"
const VALID_PASSWORD = "password"

export async function authenticateUser(request: Request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) {
    throw new Response("Unauthorized", {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  const [scheme, credentials] = authHeader.split(" ");

  if (scheme !== "Basic") {
    throw new Response("Invalid authentication scheme", {
      status: 400,
      statusText: "Bad Request",
    });
  }


  const [username, password] = Buffer.from(credentials, "base64")
    .toString()
    .split(":");

  if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
    throw new Response("Invalid credentials", {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }


  return true;
}