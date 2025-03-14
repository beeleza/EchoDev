import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const logoTitle = "<EchoDev/>";

    const handClose = () => setOpen(false);

    return(
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center ga-4 text-2xl font-bold">
                {/* <img src="/logo.png" className="w-8 h-8" alt="logo" /> */}
                <span>{logoTitle}</span>
            </Link>

            {/* MOBILE MENU */}
            <div className="md:hidden">
                {/* MOBILE BUTTON */}
                <div 
                    className="cursor-pointer text-4xl" 
                    onClick={() => setOpen((prev) => !prev)}
                >
                    { open ? <MdClose /> : <RiMenu3Line /> }
                </div>

                <div className={`w-full h-screen z-50 flex flex-col bg-[#e6e6ff] items-center justify-center gap-8 font-medium text-lg fixed top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                    <Link to="/" onClick={handClose}>Home</Link>
                    <Link to="/" onClick={handClose}>Treding</Link>
                    <Link to="/" onClick={handClose}>Most Popular</Link>
                    <Link to="/" onClick={handClose}>About</Link>
                    <SignedOut>
                        <Link to="/login" onClick={handClose}>
                            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">Treding</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar;
