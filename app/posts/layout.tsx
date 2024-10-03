import Link from "next/link"

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
                    <a className="navbar-brand" href="#">Next.js 14 | APP</a>
                    <div className="d-flex ms-auto">
                        <div className="dropdown d-flex">
                            <p className="nav-link me-2 text-info"> Rohit Kumar </p>
                            <Link href="/login" className="nav-link"><u>Logout</u> </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </>
    )
}