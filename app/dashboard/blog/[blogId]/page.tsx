import { Metadata } from "next"
import Link from "next/link"

type Props = {
    params: {
        blogId:string
    }
}

//static metadata  

// export const metadata = {
//     title:'Blog Nextjs',
//     description: 'Blog Description Nextjs'
// }

// dynamic metadata
export const generateMetadata = ({ params } : Props ) : Metadata => {
    return {
        title: 'Blog Details',
        description: 'Blog Description Nextjs dync'
    }
}

export default function BlogDetails({ params }: Props) {
    return (
        <>
            <h3>Blogs {params.blogId}</h3>
            <Link href="/dashboard/blog/blog-details/comment-id">Read comment..</Link>
            <br/>
            <Link href="/dashboard/blog">Go Back</Link>
        </>
    )
}