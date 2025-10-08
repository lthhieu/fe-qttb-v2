import dayjs from "dayjs"
import type { IPosts } from "~/types/backend"
import parse from 'html-react-parser';

interface IProps {
    post: IPosts | undefined
}

export function PostDetail({ post }: IProps) {
    if (!post) return <p className="text-gray-400 italic">Đang tải dữ liệu...</p>;

    return (
        <>
            <h2 className="font-bold text-justify dark:text-gray-300">
                {post.title}
            </h2>
            <span className="italic text-xs text-gray-500 dark:text-gray-400">
                Ngày đăng: {dayjs(post.createdAt).format("DD/MM/YYYY")}
            </span>

            <div className="mt-4 prose dark:prose-invert max-w-none text-justify">
                {post.content ? parse('<div class="noi-dung"><div dir="auto"><em><strong>Sáng 04/10/2025, sinh viên trường Đại học SPKT Vĩnh Long đã được tham quan Triển lãm thành tựu kinh tế - xã hội tỉnh Vĩnh Long tại Trung tâm Hội nghị Tỉnh. Triển lãm là một trong những hoạt động nổi bật trong khuôn khổ Đại hội đại biểu Đảng bộ tỉnh&nbsp;<a class="html-a xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs" tabindex="-1"></a>Vĩnh Long lần thứ I, nhiệm kỳ 2025 - 2030.</strong></em></div><div dir="auto">Tại không gian chính, các bạn sinh viên có cơ hội tìm hiểu về Tỉnh Vĩnh Long qua các kỳ đại hội Đảng, Thành tựu kinh tế, văn hóa, xã hội, an ninh, quốc phòng tỉnh Vĩnh Long nhiệm kỳ qua 2020 - 2025 và khám phá các sản phẩm tiêu biểu của địa phương.</div><div dir="auto"><img class="w-full rounded-md py-2" src="http://vlute.edu.vn/cdn/files/558659808_1316481340265902_5009440034823806187_n.jpg" alt="" width="719" height="479"></div><div dir="auto">Ấn tượng nhất với các bạn chính là những điểm nhấn tại gian trưng bày là các mô hình: Cổng Đền thờ Chủ tịch Hồ Chí Minh tại xã Long Đức; mô hình trái dừa khổng lồ cao gần 5m – không gian trình chiếu 3D mapping với chủ đề “Vĩnh Long bay lên trong kỷ nguyên số và phát triển bền vững”; mô hình lò gạch Mang Thít; mô hình thuyền và chợ nổi- không gian giới thiệu sản phẩm OCOP, trái cây đặc sản miệt vườn… Không gian được thiết kế hiện đại, kết hợp hài hòa giữa trưng bày truyền thống và trưng bày ứng dụng công nghệ số 4.0. Cách tiếp cận này tạo nên trải nghiệm sống động, tương tác và cá nhân hóa cho người xem.</div><div dir="auto"><img class="w-full rounded-md py-2" src="http://vlute.edu.vn/cdn/files/558998115_1316481656932537_5441750251482195732_n.jpg" alt="" width="678" height="452"></div><div dir="auto">Triển lãm là dịp để tôn vinh, quảng bá những thành tựu nổi bật của tỉnh Vĩnh Long trong nhiệm kỳ 2020 – 2025, ghi lại dấu mốc quan trọng của Đảng bộ, phản ánh nỗ lực và thành tựu đã đạt được; góp phần định hướng cho chặng đường phát triển mới của tỉnh Vĩnh Long.</div><div dir="auto">Hình ảnh chi tiết <a class="text-blue-700" href="https://www.facebook.com/share/p/1ASWbtXyU4/">xem tại đây&nbsp;</a></div></div>') : <p>Không có nội dung</p>}
            </div>
        </>
    )
}
