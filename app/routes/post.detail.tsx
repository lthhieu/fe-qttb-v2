import type { Route } from "./+types/post.detail";
import { fetchPost } from "~/api/posts";
import { PostDetail } from "~/components/client/post.detail";
import SidebarComponent from "~/components/client/sidebar";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Tin tức" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    // @ts-ignore
    let response = await fetchPost(params.postId as string)
    if (response.success) {
        return response.data
    } else return null
}

export default function Post({ loaderData }: Route.ComponentProps) {

    return (
<div className="px-[5%] md:px-[10%] grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-full md:col-span-4 ">
            <PostDetail post={loaderData} />
          </div>
          <div className="col-span-full md:col-span-2">
            <SidebarComponent />
          </div>
          </div>
    )
    
}
