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
                {post.content ? parse(post.content) : <p>Không có nội dung</p>}
            </div>

            {/* <div><img src="http://localhost:3000/548269745_1300496288531074_7470413029836420212_n.jpg" /></div> */}
        </>
    )
}
