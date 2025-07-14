'use client'
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./navLink";


const MainHeader = () => {
  
  console.log('hello')
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="foodie image" priority />
          Next Level Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
             <NavLink href='/meals'>Browse meals</NavLink>
            </li>
            <li>
             <NavLink href='/community'>Foodie Community</NavLink>
            </li>
           
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
