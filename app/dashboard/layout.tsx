import Link from "next/link"

export const metadata = {
    title:'Auth module',
    description: 'Auth module description'
}

// Route gorup layout
export default function DashboardLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <div style={{flexDirection:"row"}}>
               <Link href="/dashboard">Home</Link>
               <Link href="/dashboard/about">About</Link>
               <Link href="/dashboard/blog">Blog</Link>
               <Link href="/dashboard/contact">Contact</Link>
            </div>
            { children }
            <Link href="/login">Logout</Link>
            <h1>Dashboard Footer</h1>
        </>
    )
}