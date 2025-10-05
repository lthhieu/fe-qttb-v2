import ProcessComponent from "~/components/client/process";
import type { Route } from "./+types/process";
import SidebarComponent from "~/components/client/sidebar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QTTB - Quy trình" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Process() {

  return (
    <div className="px-[10%] grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-full md:col-span-4 ">
            <ProcessComponent/>
          </div>
          <div className="col-span-full md:col-span-2">
            <SidebarComponent />
          </div>
          </div>
  );
}
