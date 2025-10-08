import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export default function FooterPage() {
    return (
        <Footer className="border-t border-t-[#ccc] rounded-none mt-4" container>
      <FooterCopyright className="w-full text-center" href="#" by="Bản quyền thuộc về Phòng Quản trị - Thiết bị" year={2025} />
    </Footer>
        // <footer className="flex-[0 0 10%]">
        //     <div className="bg-[#1b4d85] text-white px-[10%] py-4 w-full text-center flex justify-center">
        //         Bản quyền thuộc về Phòng Quản trị - Thiết bị (QTTB)</div>
        // </footer>
    )
}