import { Link } from "@inertiajs/react";
// import navigate from "../public/navigate.png";

export default function Navbar() {
    return (
        <nav className="flex bg-[#2F2D52] px-14 items-center justify-between">
            <div>
                <Link href="/">
                    <img src="images/navigate.png" alt="Logo" className="h-6" />
                </Link>
            </div>

            <div className="flex py-4 text-base text-white font-semibold justify-end items-center">
                <Link href="/perbandingan" className="mr-8">
                    Perbandingan
                </Link>
                <Link href="/sekolah" className="mr-8">
                    Daftar Sekolah
                </Link>
                <Link href="/kalender" className="mr-8">
                    Kalender
                </Link>
                <Link href="/blog" className="mr-8">
                    Blog
                </Link>
                <Link href="/login">
                    <img src="images/login1.png" alt="Login" className="h-4" />
                </Link>
            </div>
        </nav>
    );
}
