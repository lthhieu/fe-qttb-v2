import FormComponent from "~/components/client/form";
import type { Route } from "./+types/form";
import SidebarComponent from "~/components/client/sidebar";
import { fetchForms } from "~/api/forms";
import { fetchFormCategories } from "~/api/formCategories";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QTTB - Biểu mẫu" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs) {
  const url = new URL(request.url)
    const page = url.searchParams.get("page")
    const name = url.searchParams.get("name")
    const categoryFormId = url.searchParams.get("categoryFormId")
    let response = await fetchForms(page ? +page : 1, 10, name, categoryFormId)
    let response1 = await fetchFormCategories()
    if (response.success && response1.success) {
        return { meta: response.meta, forms: response.data, formCategories: response1.data }
    }
    return { meta: null, forms: [], formCategories: [] }
}

export default function Form({
  loaderData,
}: Route.ComponentProps) {
const { formCategories,forms,meta } = loaderData;

  return (
    <div className="px-[10%] grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-full md:col-span-4">
            <FormComponent forms={forms} meta={meta} formCategories={formCategories}/>
          </div>
          <div className="col-span-full md:col-span-2">
            <SidebarComponent/>
          </div>
          </div>
  );
}
