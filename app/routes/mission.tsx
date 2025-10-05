import { List, ListItem, TabItem, Tabs } from "flowbite-react";
import type { Route } from "./+types/mission";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QTTB - Trách nhiệm nhiệm vụ" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Mission() {

  return (
    <div className="px-[10%]">
        <Tabs aria-label="Tabs with underline" variant="underline">
      <TabItem active title="Chức năng">
        <div className="leading-9">
          <p className="text-gray-500 font-semibold dark:text-gray-400">Phòng Quản trị - Thiết bị có chức năng tham mưu, giúp việc cho Hiệu trưởng trong các mặt công tác sau:</p>
        <List >
            <ListItem>Quản lý và sử dụng cơ sở vật chất của Trường.</ListItem>
            <ListItem>Xây dựng và tổ chức thực hiện các dự án đầu tư máy móc, trang thiết bị cho giảng dạy và học tập.</ListItem>
            <ListItem>Theo dõi sử dụng hiệu quả tài sản của trường phục vụ cho giảng dạy, nghiên cứu khoa học và học tập.</ListItem>
            <ListItem>Tham mưu cho Hiệu trưởng về công tác quản trị.</ListItem>
        </List>
        </div>
      </TabItem>
      <TabItem title="Nhiệm vụ">
        <div className="leading-9">
          <List>
            <ListItem><span className="font-semibold">Công tác quản trị:</span>
              <List nested>
                <ListItem>Quản lý, bảo dưỡng cơ sở hạ tầng, bao gồm: Phòng làm việc, xưởng thực hành, ban ghế, thiết bị hỗ trợ làm việc, hàng rào, hệ thống giao thông trong Trường, hệ thống cống rãnh, hệ thống cung cấp điện nước, hệ thống iện thoại trong trường đảm bảo thông tin thông suốt.</ListItem>
                <ListItem>Phối hợp với các bộ phận liên quan triển khai công tác phòng, chống bão lụt, phòng cháy, chữa cháy trong Trường.</ListItem>
                <ListItem>Lập kế hoạch và tổ chức sửa chữa nhà cửa, công trình công cộng, thiết bị máy móc, bàn ghế, tủ, bảng,... bị hư hỏng của tất cả các đơn vị trong Trường.</ListItem>
                <ListItem>Phối hợp với các đơn vị chức năng có liên quan, lập kế hoạch xây dựng và nghiệm thu các công trình xây dựng mới, công trình sửa chữa, cải tạo lớn nhận bàn giao và có kế hoạch đưa các công trình đó vào sử dụng có hiệu quả.</ListItem>
                <ListItem>Xây dựng và tổ chức kiểm tra việc thực hiện quy định sử dụng tài sản, thiết bị của các đơn vị, đánh giá chất lượng, giá trị sử dụng các trang thiết bị để có kế hoạch mua sắm, chống hư hỏng, mất mát, lãng phí.</ListItem>
                <ListItem>Giám sát việc sửa chữa, nâng cấp hệ thống điện, nước, vệ sinh môi trường và các công trình kiến trúc theo quy định.</ListItem>
                <ListItem>Đảm bảo điều kiện làm việc cho các đơn vị, đoàn thể, hoạt động đào tạo và nghiên cứu khoa học. Quản lý các phòng học chung.</ListItem>
                <ListItem>Quản lý, khai thác, sử dụng hệ thống điện, nước, các công trình kiến trúc.</ListItem>
                <ListItem>Quản lý và sử dụng có hiệu quả lao động, tài sản được giao theo quy định pháp luật hiện hành của trường.</ListItem>
                <ListItem>Quản lý đội ngũ cán bộ, viên chức, lao động hợp đồng và tài sản được giao theo quy định.</ListItem>
                <ListItem>Thực hiện các nhiệm vụ khác do Giám Hiệu giao.</ListItem>
              </List>
            </ListItem>
            <ListItem><span className="font-semibold">Công tác thiêt bị:</span>
              <List nested>
                <ListItem>Quản lý toàn bộ hệ thống máy móc, trang thiết bị và các phương tiện khoa học kỹ thuật phục vụ cho đào tạo và tổ chức đào tạo.</ListItem>
                <ListItem>Phối hợp với các đơn vị xây dựng kế hoạch mua sắm trang thiết bị, vật tư phục vụ đào tạo, nghiên cứu khoa học và hoạt động thường xuyên của Trường.</ListItem>
                <ListItem>Xây dựng kế hoạch đấu thầu và tiến độ thực hiện các dự án về thiết bị, vật tư.</ListItem>
                <ListItem>Giám sát việc sử dụng máy móc, trang thiết bị và các phương tiện khoa học kỹ thuật của các phòng khoa trong toàn trường.</ListItem>
                <ListItem>Phối hợp với phòng Kế hoạch - Tài chính trong việc thực hiện các quy định về mua sắm, giám sát và theo dõi việc sử dụng thiết bị vật tư trong Trường.</ListItem>
                <ListItem>Quản lý kho thiết bị, vật tư theo quy định.</ListItem>
                <ListItem>Là thường trực trong các ban quản lý dự án đầu tư thiết bị, vật tư.</ListItem>
              </List>
            </ListItem>
          </List>
        </div>
      </TabItem>
    </Tabs>
      </div>
  );
}
