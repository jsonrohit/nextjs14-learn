//Layout

export default function LoginLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <h3 className="text-3xl font-bold underline">Login Header</h3>
            { children }
        </>
    )
}