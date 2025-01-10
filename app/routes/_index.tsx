import {
  type MetaFunction,
} from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Protected page example" },
    { name: "description", content: "Protected page example" },
  ];
};

export default function Index() {
  return <div>index</div>;
}
