import { Brand } from "./Brand"
import { Link } from "react-router-dom";
// Icons
import TelegramIcon from "@/assets/icons/telegram.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HamburgerIcon from '@/assets/icons/menu.svg';

function CTAButtons() {
    return (
        <div className="hidden lg:flex justify-center">
            <button className="flex items-center bg-blue-600 px-4 py-3 mr-4 rounded text-white">
                <img className="inline mr-3" src={TelegramIcon} />Join Group
            </button>
            <button className="flex items-center bg-neutral-100 border border-solid border-grey px-4 py-2 rounded">
                <img className="inline mr-3" src={GithubIcon} />Contribute
            </button>
        </div>
    )
}


export default function Navbar() {
    return (
        <nav className="px-6 py-4 flex items-center shadow-md">
            <Brand url="/" />
            <ul className="hidden lg:flex flex-grow pl-10 list-none">
                <li className="mr-8">
                    <Link to="/">Home</Link>
                </li>
                <li className="mr-8"><Link to="/event">Acara</Link></li>
                <li className="mr-8"><Link to="/speaker">Pembicara</Link></li>
                <li className="mr-8"><Link to="/about">Tentang</Link></li>
            </ul>
            <CTAButtons />
            <div className="lg:hidden flex flex-grow justify-end">
                <img src={HamburgerIcon} />
            </div>
        </nav>
    )
}