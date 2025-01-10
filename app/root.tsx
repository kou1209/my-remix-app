import {type LoaderFunction} from "@remix-run/node";
import {Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData} from "@remix-run/react";
import {authenticateUser} from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticateUser(request)
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
    </body>
    </html>
  )
}