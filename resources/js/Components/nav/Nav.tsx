import { Button } from "@/components/ui/button"
import { Navigation } from "./navigation/Navigation"
import { DropdownCountry } from "./navigation/DropdowonCountry"
import { Login } from "../auth/Login"
import Register from "../auth/Register"

export const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between items-center py-3 max-w-screen-xl xl:px-16 2xl:px-0 mx-auto ">
                <img className="h-12" src="https://res.cloudinary.com/dnsekavtx/image/upload/v1725819617/Logo-01_gbsnev.svg" alt="" />
                <Navigation />
                <div className="space-x-3 flex items-center">
                    <div className="border-r pr-4 mr-2">
                        <DropdownCountry />
                    </div>
                    <Login/>
                    <Register/>
                </div>
            </nav>
        </>
    )
}
