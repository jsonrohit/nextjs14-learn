import Link from "next/link"

export default function Blog(){
    return(
        <>
            <h3>Blog</h3>
            <Link href="/dashboard/blog/blog-details">Read me..</Link>
            <br />
            <Link href="/dashboard">Go Back</Link>
        </>
    )
}