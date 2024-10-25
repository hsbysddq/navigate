import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link href="/" className="font-bold mr-4">
                        Home
                    </Link>
                    <Link href="/create" className="font-bold mr-4">
                        Create
                    </Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
