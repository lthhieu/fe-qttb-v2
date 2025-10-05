import { Outlet } from "react-router";
import Footer from "~/components/layouts/footer";
import { Header } from "~/components/layouts/header";

export default function MasterLayout() {
    return (
        <main className="flex min-h-screen flex-col dark:bg-gray-900">
                <Header />
                <div className="flex-auto">
                    <Outlet />
                </div>
                <Footer />
        </main>
    )
}