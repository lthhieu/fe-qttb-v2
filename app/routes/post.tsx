import PostComponent from "~/components/client/post";
import type { Route } from "./+types/post";
import SidebarComponent from "~/components/client/sidebar";
import { fetchPosts } from "~/api/posts";

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
    if (response.success) {
        return { meta: response.meta, posts: response.data }
    } else return { meta: null, posts: [] }
}

export default function Post({ loaderData }: Route.ComponentProps) {
const { meta, posts } = loaderData
  return (
    <div className="px-[10%] grid grid-cols-1 md:grid-cols-6">
      <div className="col-span-full md:col-span-4 ">
        <PostComponent posts={posts} meta={meta}/>
      </div>
      <div className="col-span-full md:col-span-2">
        <SidebarComponent />
      </div>
      </div>
  );
}
