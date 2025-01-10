import {type LoaderFunction, LoaderFunctionArgs} from "@remix-run/node";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload
} from "@remix-run/react";
import {authenticateUser} from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  await authenticateUser(request);
};

export default function App() {

  return (
    <html lang="en">
    <head>
      <Meta />
      <Links />
    </head>
    <body>
    <Outlet />
    <ScrollRestoration />
    <Scripts />
    <LiveReload />
    </body>
    </html>
  )
}