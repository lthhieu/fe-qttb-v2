import PostComponent from "~/components/client/post";
import type { Route } from "./+types/post";
import SidebarComponent from "~/components/client/sidebar";
import { fetchPosts } from "~/api/posts";
import { fetchForms } from "~/api/forms";
import { fetchRules } from "~/api/rule";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QTTB - Tin tức" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request, }: Route.LoaderArgs) {
    const url = new URL(request.url)
    const page = url.searchParams.get("page")
    const title = url.searchParams.get("title")
    const sort = url.searchParams.get("sort")
    let response = await fetchPosts(page ? +page : 1, 6, title, sort)
        let response1= await fetchForms(1, 5)
            let response2 = await fetchRules(1, 4)


    if (response.success && response1.success && response2.success) {
        return { meta: response.meta, posts: response.data, forms:response1.data, words: response2.data }
    } else return { meta: null, posts: [], forms:[],words:[] }
}

export default function Post({ loaderData }: Route.ComponentProps) {
const { meta, posts,forms,words } = loaderData
  return (
    <div className="px-[5%] md:px-[10%] grid grid-cols-1 md:grid-cols-6">
      <div className="col-span-full md:col-span-4 ">
        <PostComponent posts={posts} meta={meta}/>
      </div>
      <div className="col-span-full md:col-span-2">
        <SidebarComponent forms={forms} words={words} />
      </div>
      </div>
  );
}
