import { Link, useNavigate } from "react-router";
import type { IRuleCategories, IRules, Meta } from "~/types/backend";
import dayjs from "dayjs";
import { Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useState } from "react";
import { Form, useSearchParams } from "react-router";
import { FileLink } from "~/configs/utils/file.link";

interface IProps {
    rules: IRules[],
    meta: Meta,
    ruleCategories: IRuleCategories[]
}
export default function WordComponent(props: IProps) {
const { rules, meta: IMeta, ruleCategories } = props
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
      id="bio"
      name="bio"
      defaultValue={searchParams.get("bio") || ""}
      placeholder="Tìm kiếm theo trích yếu..."
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
    <option value="">Ngày ban hành</option>
    <option value={'-issueDate'}>Mới nhất</option>
                        <option value={'issueDate'}>Cũ nhất</option>
  </select>

  {/* Select category */}
  <select
    name="categoryRuleId"
    defaultValue={searchParams.get("categoryRuleId") || ""}
    onChange={(e) => e.currentTarget.form?.requestSubmit()}
    className="bg-gray-50 md:w-1/3 w-full border outline-0 focus:border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option value="">Danh mục</option>
    {ruleCategories.map((item, index) => (
      <option key={index} value={item._id}>{item.name}</option>
    ))}
  </select>
</Form>
    </div>
    
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell className="max-w-[150px]">Số ký hiệu</TableHeadCell>
            <TableHeadCell className="min-w-[150px]">Ngày ban hành</TableHeadCell>
            <TableHeadCell className="min-w-[300px]">Trích yếu</TableHeadCell>
            <TableHeadCell className="min-w-[150px]">File đính kèm</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {rules && rules.length>0 && rules.map((item,index)=>{
            const filelink = FileLink(item.file, item.mimetype);
            return(
            <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {item.signNumber}
            </TableCell>
            <TableCell className="text-gray-900">{dayjs(item.issueDate).format("DD/MM/YYYY")}</TableCell>
            <TableCell className="text-gray-900 text-justify">{item.bio}</TableCell>
            <TableCell>{<a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href={filelink} target="_blank" rel="noopener noreferrer">
                                            File đính kèm
                                        </a>}</TableCell>
          </TableRow>
          )})}
          
        </TableBody>
      </Table>
    </div>
    <div className="flex overflow-x-auto justify-center mt-2 md:justify-end">
      <Pagination currentPage={IMeta.current} totalPages={IMeta.pages} onPageChange={onPageChange} showIcons previousLabel="" nextLabel="" />
    </div>
    </>
  );
}
