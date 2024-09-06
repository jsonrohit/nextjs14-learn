import Link from "next/link"

export default function BlogComments({ params }: {
    params: { commentId: string }
}) {
    return (
        <>
            <h3>Blogs Comments {params.commentId}</h3>
            <Link href="/dashboard/blog/blog-details">Go Back</Link>
        </>
    )
}