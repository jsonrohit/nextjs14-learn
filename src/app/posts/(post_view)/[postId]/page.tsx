'use client'

import { useEffect, useState } from "react"
import { Metadata } from "next"
import Link from "next/link"
import { httpRequest } from "@/src/app/services/apiRequest"

type Props = {
    params: {
        postId: string
    }
}

//static metadata  

// export const metadata = {
//     title:'Blog Nextjs',
//     description: 'Blog Description Nextjs'
// }

// dynamic metadata
// export const generateMetadata = ({ params }: Props): Metadata => {
//     return {
//         title: 'Posts Details',
//         description: 'Posts Description'
//     }
// }

export default function BlogDetails(props: Props) {
    const { params: { postId } } = props;
    const [data, setData] :any = useState({
        post: {},
        comments: []
    });

    useEffect(() => {
        get()
    }, []);

    function updsState(data) {
        setData(prevState => ({
            ...prevState,
            ...data
        }))
    }

    const get = async () => {
        const items = await httpRequest(`posts/${postId}`)
        const post = await items.json();
        if (post.datas) {
            updsState({ post: post.datas })
            if (post.datas && post.datas.id) {
                const datas = await httpRequest(`comments/${post.datas.id}`)
                const comments = await datas.json();
                if (comments.datas)
                    updsState({ comments: comments.datas })
            }
        }
    }


    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h1 className="display-4">{data?.post?.title}</h1>
                                    <p className="text-muted">
                                        By <strong>Next.js</strong>
                                    </p>
                                </div>
                                <Link href="/posts" className="btn btn-outline-secondary align-self-start">Back</Link>
                            </div>
                        </div>

                        <div className="post-content mb-5">
                            <p>{data?.post?.body}</p>
                        </div>

                        <div className="comments-section mt-5">
                            <h3 className="mb-4">Comments</h3>

                            <div className="mb-4">
                                {data.comments && data.comments.map((item, idx) => (
                                    <div key={idx} className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">{item?.name} <small className="text-muted">| {item?.email}</small></h5>
                                            <p className="card-text">{item?.comment}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}