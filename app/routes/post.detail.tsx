import { fetchForms } from "~/api/forms";
import type { Route } from "./+types/post.detail";
import { fetchPost } from "~/api/posts";
import { PostDetail } from "~/components/client/post.detail";
import SidebarComponent from "~/components/client/sidebar";
import { fetchRules } from "~/api/rule";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Tin tức" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    // @ts-ignore
    let response = await fetchPost(params.postId as string)
         let response1= await fetchForms(1, 5)
            let response2 = await fetchRules(1, 4)


    if (response.success && response1.success && response2.success) {
        return {  post: response.data, forms:response1.data, words: response2.data }
    } else return { post: [], forms:[],words:[] }
}

export default function Post({ loaderData }: Route.ComponentProps) {
const {post, forms,words} = loaderData
    return (
<div className="px-[5%] md:px-[10%] grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-full md:col-span-4 ">
            <PostDetail post={post} />
          </div>
          <div className="col-span-full md:col-span-2 ml-2">
            <SidebarComponent forms={forms} words={words} />
          </div>
          </div>
    )
    
}
