import React, { useState } from 'react'
import Link from "next/link"
import Container from './Container'


type HamburgerNavProps = {
    onClick(): void
}
const HamburgerNav = ({ onClick }: HamburgerNavProps) => {

    return (
        <div className="space-y-2 cursor-pointer md:hidden xs:block" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
    )
}

type HamburgerCloseNavProps = {
    onClick(): void
}
const HamburgerCloseNav = ({ onClick }: HamburgerCloseNavProps) => {
    return (
        <div className="space-y-2 cursor-pointer md:hidden xs:block -top-5 relative" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    )
}

type HamburgerNavItems = HamburgerNavProps;
const HamburgerNavItems = ({ onClick }: HamburgerNavItems) => {
    return (
        <>
            <NavOverlay onClick={onClick} />
            <div className="w-4/5 sm:w-2/5 absolute justify-between items-center md:hidden bg-indigo-700 p-12 right-0 bottom-0 top-0 z-5">
                <HamburgerCloseNav onClick={onClick} />
                <ul className="mt-20 flex flex-col justify-center  items-start gap-6">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#listings">Listings</Link></li>
                    <li><Link href="#faq">FAQ</Link></li>
                    <li><Link href="#login">Login</Link></li>
                    <li><Link href="#register">Register</Link></li>
                </ul>


            </div>
        </>
    )
}

type NavOverlayProps = HamburgerNavProps;

const NavOverlay = ({ onClick }: NavOverlayProps) => {
    return (
        <div onClick={onClick} className="absolute inset-0 bg-black opacity-50 h-full flex flex-col">

        </div>
    )
}

const Navigation = () => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <header className="bg-indigo-700 ">
            <Container>

                <nav className="flex justify-between items-center text-white">
                    <Link passHref href="/">
                        <span className="inline-flex gap-2 justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                            </svg>
                            <span className="font-bold">Lansea</span>
                        </span>
                    </Link>



                    {/* nav for xs to sm screens */}
                    <HamburgerNav onClick={() => (setToggleNav(!toggleNav))} />
                    {toggleNav && <HamburgerNavItems onClick={() => (setToggleNav(!toggleNav))} />}

                    {/* nav for md up screens */}
                    <div className="hidden justify-between items-center md:flex gap-12  ">

                        <ul className="flex justify-between items-center gap-12 font-bold ">
                            <li><Link passHref href="#">Home</Link></li>
                            <li><Link passHref href="#listings">Listings</Link></li>
                            <li><Link passHref href="#faq">FAQ</Link></li>
                        </ul>

                        <ul className="auth-links flex justify-between items-center gap-6">
                            <li><Link passHref href="#login">Login</Link></li>
                            <li><Link passHref href="#register">Register</Link></li>
                            {/* <li><Link passHref href="#Logout">Logout</Link></li> */}
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Navigation