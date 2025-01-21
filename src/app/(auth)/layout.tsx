export const metadata = {
    title: 'Auth module',
    description: 'Auth module description'
}

// Route gorup layout
export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}