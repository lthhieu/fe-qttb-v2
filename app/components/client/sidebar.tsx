import { Card } from "flowbite-react";
import { Link } from "react-router";
import type { IPosts } from "~/types/backend";

interface IProps{
  news?:IPosts[]
}
export default function SidebarComponent(props:IProps) {
const {news} = props
  return (
    <div className="px-4">
    <p className=" text-lg text-gray-900 dark:text-white">{news ? 'TIN MỚI':'BIỂU MẪU GẦN ĐÂY'}</p>
    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <div className=" space-y-2 grid grid-cols-1 space-x-1">
      {news && news.length>0 ? 
      news.map((item,index:number)=>{return(
        <Link className="" key={index} to={`/${item.slug}`}>
      <Card className="hover:bg-gray-100 max-w-sm w-full dark:hover:bg-gray-700 cursor-pointer">
      <h6 className="font-bold tracking-tight text-gray-900 dark:text-white two-lines">
        {item.title}
      </h6>
      <div className="flex gap-2">
        <img className="w-[100px] rounded" src={`data:${item.mimetype};base64,${item.thumbnail}`} />
        <p className=" font-normal text-gray-700 dark:text-gray-400 text-justify three-lines">
{item.content}      </p>
      </div>
    </Card></Link>
      )})
      : <>Không có bài viết nào</>}
    </div>
    </div>
  );
}
