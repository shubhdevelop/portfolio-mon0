import { Book, CurlyBraces, HomeIcon, Languages, Moon, Puzzle, Sun, } from "lucide-react"
import { ReactNode } from "react"
import Link from "next/link"
import { useTheme } from "../context/ThemeContext"
import { useLanguage } from "../context/LanguageContext"

type NavItem = {
    alt: string,
    url: string,
    icon: ReactNode,
    action?: "changeTheme" | "translate"
}



export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { toggleLanguage } = useLanguage();

    const navItems: NavItem[] = [{
        alt: "Home",
        url: "/",
        icon: <HomeIcon color={theme ? "black" : "white"} size={15} />
    }, {
        alt: "Projects",
        url: "/projects",
        icon: <Puzzle color={theme ? "black" : "white"} size={15} />
    }, {
        alt: "Snippets",
        url: "/snippets",
        icon: <CurlyBraces color={theme ? "black" : "white"} size={15} />
    }, {
        alt: "Blog",
        url: "/blogs",
        icon: <Book color={theme ? "black" : "white"} size={15} />
    },
    {
        alt: "Theme",
        url: "/",
        action: "changeTheme",
        icon: <Sun color={theme ? "black" : "white"} size={15} />
    },
    {
        alt: "translate",
        url: "/",
        action: "translate",
        icon: <Languages color={theme ? "black" : "white"} size={15} />
    }
    ]

    return (
        <nav className="dark:bg-[#161616] left-[50%] -translate-x-[50%] noise  h-12 w-60 rounded-full flex flex-row items-center justify-center fixed bottom-3 overflow-hidden shadow-lg border-[.5] dark:border-[#161616]">
            {
                navItems.map((item, idx) => {
                    return (
                        item.action === undefined ?
                            <Link key={idx} href={item.url} className="bg-white dark:bg-[#161616] h-full w-full  flex flex-row items-center justify-center cursor-pointer  dark:hover:bg-[#0a0a0a]">
                                <div >
                                    <div>
                                        {item.icon}
                                    </div>
                                </div>
                            </Link> : (
                                item.action === "changeTheme" ?
                                    <div key={idx} className="bg-white dark:bg-[#161616] h-full w-full  flex flex-row items-center justify-center cursor-pointer dark:hover:bg-[#0a0a0a]">
                                        <div >
                                            <div onClick={() => toggleTheme()}>
                                                {!theme ? < Sun color={theme ? "black" : "white"} size={15} /> : <Moon color={theme ? "black" : "white"} size={15} />}
                                            </div>
                                        </div>
                                    </div> : <div key={idx} onClick={() => toggleLanguage()} className=" bg-white dark:bg-[#161616] h-full w-full  flex flex-row items-center justify-center cursor-pointer  dark:hover:bg-[#0a0a0a]">
                                        <div >
                                            <div >
                                                {item.icon}
                                            </div>
                                        </div>
                                    </div>
                            )
                    )
                })
            }
        </nav>
    )
}