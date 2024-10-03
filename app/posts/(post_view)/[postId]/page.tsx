'use client'

import { _get } from "@/app/services/post"
import { Metadata } from "next"
import Link from "next/link"
import { useEffect, useState } from "react"

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
    console.log(postId, 'postId');
    const [data, setData] = useState({});
    const [comment, setComment] = useState([]);

    const get = async () => {
        const item = await _get(`posts/${postId}`)
        console.log(item, 'item');
        if (item)
            updsState(item)
        if (item.id) {
            const commentList = await _get(`posts/${item.id}/comments`)
            if (commentList)
                setComment(commentList)
        }
    }

    function updsState(data) {
        console.log(data, 'data');
        setData(data)
    }

    useEffect(() => {
        get()
    }, []);


    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h1 className="display-4">{data.title}</h1>
                                    <p className="text-muted">
                                        By <strong>Next.js</strong>
                                    </p>
                                </div>
                                <Link href="/posts" className="btn btn-outline-secondary align-self-start">Back</Link>
                            </div>
                        </div>

                        <div className="post-content mb-5">
                            <p>{data.body}</p>
                        </div>

                        <div className="comments-section mt-5">
                            <h3 className="mb-4">Comments</h3>

                            <div className="mb-4">
                                {comment && comment.map((item, idx) => (
                                    <div key={idx} className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name} <small className="text-muted">| {item.email}</small></h5>
                                            <p className="card-text">{item.body}</p>
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