import dayjs from "dayjs"
import type { IPosts } from "~/types/backend"

interface IProps {
    post: IPosts | undefined
}

export function PostDetail(props: IProps) {
    const { post } = props
    return (
        <>
            <h2 className="font-bold text-xl mb-4 text-justify text-gray-500 dark:text-gray-400">{post?.title}</h2>
            <span className="italic text-sm text-gray-500 dark:text-gray-400">Ngày đăng: {dayjs(post?.createdAt).format("DD/MM/YYYY")}</span>
            <p className="leading-[24px] text-justify text-gray-500 dark:text-gray-400">{post?.content}</p>
        </>
    )
}