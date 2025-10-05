import { List, ListItem } from "flowbite-react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QTTB - Giới thiệu" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <div className="leading-9 px-[10%]">
          <List>
      <ListItem>Tên phòng: Quản trị - Thiết bị</ListItem>
      <ListItem>Tên tiếng Anh: Office of Equipment and Facilities Management</ListItem>
      <ListItem>Văn phòng: B0106 (Nhà B, tầng 1)</ListItem>
      <ListItem>Trưởng phòng phụ trách: ThS. Nguyễn Văn Tám; Email: <span className="cursor-pointer underline text-[#1b4d85]">tamnv@vlute.edu.vn</span></ListItem>
          <ListItem>Phó trưởng phòng:
            <List nested>
              <ListItem>ThS. Nguyễn Thanh Hoàng; Email: <span className="cursor-pointer underline text-[#1b4d85]">hoangnt@vlute.edu.vn</span></ListItem>
              <ListItem>ThS. Nguyễn Đức Hải; Email: <span className="cursor-pointer underline text-[#1b4d85]">haind@vlute.edu.vn</span></ListItem>
            </List>
          </ListItem>
          <ListItem>Email: qttb@vlute.edu.vn</ListItem>
    </List>
      </div>
  );
}
