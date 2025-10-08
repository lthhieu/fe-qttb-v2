import { List, ListItem } from "flowbite-react";
import type { Route } from "./+types/home";
import { fetchPosts } from "~/api/posts";
import { fetchForms } from "~/api/forms";
import { fetchRules } from "~/api/rule";
import SidebarComponent from "~/components/client/sidebar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QTTB - Giới thiệu" },
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
        return {  forms:response1.data, words: response2.data }
    } else return {forms:[],words:[] }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { forms,words } = loaderData
  return (

      <div className="px-[5%] md:px-[10%] grid grid-cols-1 md:grid-cols-6">
            <div className="col-span-full md:col-span-4 leading-9">
              <List className="text-black">
      <ListItem>Tên phòng: Quản trị - Thiết bị</ListItem>
      <ListItem>Tên tiếng Anh: Office of Equipment and Facilities Management</ListItem>
      <ListItem>Văn phòng: B0106 (Nhà B, tầng 1)</ListItem>
      <ListItem>Trưởng phòng phụ trách: ThS. Nguyễn Văn Tám; Email: <span className="cursor-pointer underline text-[#1b4d85]">tamnv@vlute.edu.vn</span></ListItem>
          <ListItem>Phó trưởng phòng:
            <List className="text-black" nested>
              <ListItem>ThS. Nguyễn Thanh Hoàng; Email: <span className="cursor-pointer underline text-[#1b4d85]">hoangnt@vlute.edu.vn</span></ListItem>
              <ListItem>ThS. Nguyễn Đức Hải; Email: <span className="cursor-pointer underline text-[#1b4d85]">haind@vlute.edu.vn</span></ListItem>
            </List>
          </ListItem>
          <ListItem>Email: qttb@vlute.edu.vn</ListItem>
    </List>
            </div>
            <div className="col-span-full md:col-span-2">
              <SidebarComponent forms={forms} words={words} />
            </div>
            </div>
  );
}
