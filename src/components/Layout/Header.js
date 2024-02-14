import Link from "next/link";
import Hero from "../Hero";

export default function Header() {

    return (
        <>
   <div className="h-screen bg-[url('/call.svg')] bg-no-repeat ">
            <nav className="flex justify-between mx-10 ">
                    <div className="flex mt-9">
                    <span className="font-semibold  text-3xl ">Love</span>
                    <img src="heartwings.png" alt="heartwings" className="h-4 w-6 mt-2 -ml-1" />
                </div>

                <div className="flex text-white  font-light gap-20 mt-11 text-2xl">
                    <Link href={'/'} className="no-underline" >Home</Link>
                    <Link href={''} className="no-underline">About</Link>
                    <Link href={''} className="no-underline">Services</Link>
                    <Link href={''} className="no-underline">Contact</Link>
                </div>

            </nav>
<Hero/>
    </div>
        </>

    )
}