//Layout

export default function LoginLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <h3>Login Header</h3>
            { children }
        </>
    )
}