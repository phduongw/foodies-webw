'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import classes from "./main-header.module.css"
import logo from "@/assets/logo.png"
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader() {
    const path = usePathname();

    return <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image priority src={logo} alt="logo"/>
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink
                        href="/meals"
                    >
                        Browse Meals
                    </NavLink>
                </li>

                <li>

                    <NavLink
                        href="/community"
                    >
                        Foodies Community
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
}