import { Outlet } from "react-router-dom"
import { Header } from "./header/header"
import { Footer } from "./footer/footer"

export const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            <header className="container pt-6.25">
                <Header />
            </header>
            <Outlet />
            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    )
}