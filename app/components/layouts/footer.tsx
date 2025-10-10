import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
export default function FooterPage() {
    return (
        <Footer className="mt-2 md:px-[10%] border-t-2 border-t-[#ccc]" container>
      <div className="w-full">
        <div className="w-full px-4 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright className="text-black" href="#" by="Phòng Quản trị - Thiết bị" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterLink as={'p'} className="list-none" href="#">73 Nguyễn Huệ, phường Long Châu, tỉnh Vĩnh Long</FooterLink>

          </div>
        </div>
      </div>
    </Footer>
    )
}