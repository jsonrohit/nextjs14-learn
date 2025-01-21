export const metadata = {
    title:'Auth module',
    description: 'Auth module description'
}

// Route gorup layout
export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1>Auth Header</h1>
            { children }
            <h1>Auth Footer</h1>
        </>
    )
}