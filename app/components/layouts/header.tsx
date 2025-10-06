
import { Avatar,MegaMenuDropdown, DarkThemeToggle, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import logo from '/logo.png'
import AppNavLink from "~/configs/utils/app.navlink";

export function Header() {
  const nav: { url: string, title: string }[] = [
    { url: '/gioi-thieu', title: 'Giới thiệu' },
    { url: '/chuc-nang-nhiem-vu', title: 'Chức năng - Nhiệm vụ' },
    { url: '/van-ban-quy-dinh', title: 'Văn bản - Quy định' },
    { url: '/bieu-mau', title: 'Biểu mẫu' },
    { url: '/quy-trinh', title: 'Quy trình' },
    { url: '/', title: 'Tin tức' },
  ]
  return (
    <div className="px-[10%] border-b-[#ccc] border-b dark:bg-[#1f2937] mb-4">
      <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="VLUTE Logo" />
        {/* <span className="hidden md:block self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
        <div className="hidden md:flex flex-col">
          <span className="self-center text-md font-semibold dark:text-white">Trường Đại học SPKT Vĩnh Long</span>
        <span className="self-center text-sm font-semibold dark:text-white">Phòng Quản trị - Thiết bị</span>
        </div>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle />
        {/* <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar className="cursor-pointer" alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem>Quản trị</DropdownItem>
          <DropdownItem>Cài đặt</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Đăng xuất</DropdownItem>
        </Dropdown> */}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {/* <NavbarLink as={'div'}>
          <MegaMenuDropdown toggle={<p className="cursor-pointer">Tổng quan</p>}>
            <ul className="grid grid-cols-1">
              <div className="flex flex-col gap-4 p-4">
                  <AppNavLink to={'/gioi-thieu'} text={'Giới thiệu'} />
                  <AppNavLink to={'/chuc-nang-nhiem-vu'} text={'Chức năng - Nhiệm vụ'} />
              </div>
            </ul>
          </MegaMenuDropdown>
        </NavbarLink> */}
        {nav.map((item,index:number)=>{return(
          <AppNavLink to={item.url} text={item.title} key={index} />
        )})}
      </NavbarCollapse>
    </Navbar>
    </div>
  );
}
