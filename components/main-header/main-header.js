import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css"
import logo from "@/assets/logo.png"

export default function MainHeader() {
    return <header className={classes.header}>
        <Link className={classes.logo} href="/public">
            <Image priority src={logo} alt="logo"/>
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>

                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
}