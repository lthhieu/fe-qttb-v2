import { Card, Pagination } from "flowbite-react";
import parse from 'html-react-parser';
import { Form, Link, useNavigate, useSearchParams } from "react-router";
import type { IPosts, Meta } from "~/types/backend";

interface IProps {
    posts: IPosts[], meta: Meta
}
export default function PostComponent(props: IProps) {
  const { posts, meta: IMeta } = props
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()

  const onPageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
  params.set("page", page.toString());
  navigate(`?${params.toString()}`);
  }
  return (
    <>
    <div className="mb-3 flex gap-2 flex-wrap">
<Form role="search" className="flex flex-wrap gap-2 w-full">
  {/* Ô tìm kiếm */}
  <div className="relative flex-1">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
    <input
      type="search"
      name="title"
      defaultValue={searchParams.get("title") || ""}
      placeholder="Tìm kiếm theo tiêu đề..."
      className="bg-gray-50 outline-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-2 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>

  {/* Select category */}
  <select
    name="sort"
    defaultValue={searchParams.get("sort") || ""}
    onChange={(e) => e.currentTarget.form?.requestSubmit()}
    className="bg-gray-50 md:w-1/3 w-full border outline-0 focus:border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option value="">Tất cả</option>
    <option value="-createdAt">Mới nhất</option>
                        <option value="createdAt">Cũ nhất</option>
  </select>
</Form>
    </div>
    <div className=" space-y-1 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 space-x-1">
      {posts && posts.length>0 ? 
      posts.map((item,index:number)=>{return(
        <Link className="" key={index} to={`/${item.slug}`}>
      <Card className="hover:bg-gray-100 max-w-sm w-full dark:hover:bg-gray-700 cursor-pointer">
      <h6 className="font-bold tracking-tight text-gray-900 dark:text-white two-lines">
        {item.title}
      </h6>
      <div className="flex gap-2">
        <img className="w-[100px] rounded" src={`data:${item.mimetype};base64,${item.thumbnail}`} />
        <p className=" font-normal text-gray-700 dark:text-gray-400 text-justify three-lines">
{parse(item.content)}      </p>
      </div>
    </Card></Link>
      )})
      : <>Không có bài viết nào</>}
    </div>
    <div className="flex overflow-x-auto justify-center mt-2 md:justify-end">
      <Pagination currentPage={IMeta.current} totalPages={IMeta.pages} onPageChange={onPageChange} showIcons previousLabel="" nextLabel="" />
          </div>
    </>
  );
}
