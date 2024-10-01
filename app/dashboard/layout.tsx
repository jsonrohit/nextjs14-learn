import Link from "next/link"
import { URL } from "../services/post";

export const metadata = {
    title: 'Auth module',
    description: 'Auth module description'
}

// Route gorup layout
export default function DashboardLayout({ children }: {
    children: React.ReactNode
}) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Next APP</a>
                    <div className="d-flex ms-auto">
                        <div className="dropdown d-flex">
                            <p className="nav-link me-2 text-info"> John Doe </p>
                            <Link href="/login" className="nav-link"><u>Logout</u> </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
            {/* <div style={{flexDirection:"row"}}>
               <Link href="/dashboard">Home</Link>
               <Link href="/dashboard/about">About</Link>
               <Link href="/dashboard/blog">Blog</Link>
               <Link href="/dashboard/contact">Contact</Link>
            </div>
            
            <Link href="/login">Logout</Link>
            <h1>Dashboard Footer</h1>   */}
        </>
    )
}