import {LoaderFunctionArgs} from "@remix-run/node";

const isAuthorized = (request: Request) => {
  const header = request.headers.get('Authorization')
  if (!header) return false
  const base64 = header.replace('Basic ', '')
  const [username, password] = Buffer.from(base64, 'base64')
    .toString()
    .split(':')
  return username === 'admin' && password === 'password'
}

export const loader = ({ request }: LoaderFunctionArgs) => {
  if (isAuthorized(request)) {
    return { authorized: true }
  } else {
    return { authorized: false }
  }
}