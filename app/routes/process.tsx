import ProcessComponent from "~/components/client/process";
import type { Route } from "./+types/process";
import SidebarComponent from "~/components/client/sidebar";
import { fetchForms } from "~/api/forms";
import { fetchRules } from "~/api/rule";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QTTB - Quy trình" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request, }: Route.LoaderArgs) {
    const url = new URL(request.url)
    const page = url.searchParams.get("page")
    const title = url.searchParams.get("title")
    const sort = url.searchParams.get("sort")
        let response1= await fetchForms(1, 5)
            let response2 = await fetchRules(1, 4)


    if (response1.success && response2.success) {
        return { forms:response1.data, words: response2.data }
    } else return { forms:[],words:[] }
}

export default function Process({ loaderData }: Route.ComponentProps) {
const { forms,words } = loaderData

  return (
    <div className="px-[5%] md:px-[10%] grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-full md:col-span-4 ">
            <ProcessComponent/>
          </div>
          <div className="col-span-full md:col-span-2">
            <SidebarComponent forms={forms} words={words} />
          </div>
          </div>
  );
}
