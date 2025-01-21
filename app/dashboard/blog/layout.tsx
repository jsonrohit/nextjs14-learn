import { Metadata } from "next"

export const metadata : Metadata = {
        title: {
                default :`Blog`,
                template:"%s | Blog"
            },
        description: 'Blog description'
}

// Route gorup layout
export default function BlogLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1>Blog Header</h1>
            { children }
            <h1>Blog Footer</h1>
        </>
    )
}