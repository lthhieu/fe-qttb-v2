import WordComponent from "~/components/client/word";
import type { Route } from "./+types/word";
import SidebarComponent from "~/components/client/sidebar";
import { fetchRules } from "~/api/rule";
import { fetchRuleCategories } from "~/api/ruleCategories";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QTTB - Văn bản quy định" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request, }: Route.LoaderArgs) {
    const url = new URL(request.url)
    const page = url.searchParams.get("page")
    const bio = url.searchParams.get("bio")
    const sort = url.searchParams.get("sort")
    const categoryRuleId = url.searchParams.get("categoryRuleId")
    let response = await fetchRules(page ? +page : 1, 10, bio, categoryRuleId, sort)
    let response1 = await fetchRuleCategories()
    if (response.success && response1.success) {
        return { meta: response.meta, rules: response.data, ruleCategories: response1.data }
    }
    return { meta: null, rules: [], ruleCategories: [] }
}

export default function Word({ loaderData }: Route.ComponentProps) {
const { ruleCategories, rules, meta } = loaderData
  return (
    <div className="px-[10%] grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-full md:col-span-4 ">
            <WordComponent ruleCategories={ruleCategories} rules={rules} meta={meta} />
          </div>
          <div className="col-span-full md:col-span-2">
            <SidebarComponent />
          </div>
          </div>
  );
}
