import { Card } from "flowbite-react";
import { Link } from "react-router";
import type { IForms, IPosts, IRules } from "~/types/backend";
import parse from 'html-react-parser';
import { FileLink } from "~/configs/utils/file.link";

interface IProps{
  news?:IPosts[],
  forms?: IForms[],
  words?:IRules[]
}
export default function SidebarComponent(props:IProps) {
const {news,forms,words} = props
  return (
    <div className="px-4 mt-4 md:mt-0">
{news && news.length>0 &&     <>
<p className=" text-lg text-gray-900 dark:text-white">TIN MỚI</p>
<hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className=" space-y-2 grid grid-cols-1 space-x-1">
      {news && news.length>0 && 
      news.map((item,index:number)=>{return(
        <Link className="" key={index} to={`/${item.slug}`}>
      <Card className="hover:bg-gray-100 max-w-sm w-full dark:hover:bg-gray-700 cursor-pointer">
      <h6 className="font-bold tracking-tight text-gray-900 dark:text-white two-lines">
        {item.title}
      </h6>
      <div className="flex gap-2">
        <img className="w-[100px] rounded" src={`data:${item.mimetype};base64,${item.thumbnail}`} />
        <p className=" text-[14px] text-gray-700 dark:text-gray-400 text-justify three-lines">
{parse(item.content)}       </p>
      </div>
    </Card></Link>)})}
      </div>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </>}
    {forms && forms.length>0 && <>
    <p className=" text-lg text-gray-900 dark:text-white">BIỂU MẪU GẦN ĐÂY</p>
<hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {forms.map((item,index:number)=>{
        const filelink = FileLink(item.file, item.mimetype);
        return(<div className="mb-2" key={index}>
        {<a className="truncate block max-w-full text-primary-600 font-medium hover:underline dark:text-primary-500" href={filelink} download={item.name} target="_blank" rel="noopener noreferrer">
                                            {item.name}
                                        </a>}
      </div>)})}
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

    </>}

    {words && words.length>0 && <>
    <p className=" text-lg text-gray-900 dark:text-white">VĂN BẢN GẦN ĐÂY</p>
<hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {words.map((item,index:number)=>{
        const filelink = FileLink(item.file, item.mimetype);
        return(<div key={index}>
        {<a className="truncate mb-2 block max-w-full font-medium text-primary-600 hover:underline dark:text-primary-500" href={filelink} target="_blank" rel="noopener noreferrer">
                                            {item.bio}
                                        </a>}
      </div>)})}
    </>}

    {/* <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
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
{parse(item.content)}       </p>
      </div>
    </Card></Link>
      )})
      : <>
      {forms && forms.length>0 ? <>
      {forms.map((item,index:number)=>{
        const filelink = FileLink(item.file, item.mimetype);
        return(<div key={index}>
        {<a className="truncate text-primary-700 font-medium hover:underline dark:text-primary-500" href={filelink} download={item.name} target="_blank" rel="noopener noreferrer">
                                            {item.name}
                                        </a>}
      </div>)})}
      </>:<>Đang cập nhật</>}
      </>}
    </div> */}
    </div>
  );
}
