'use client'

import Link from 'next/link'
import { useEffect, useState } from "react";
import { GET } from "../api/posts/route"

export default function Posts() {
    const [datas, setData] = useState([]);

    useEffect(() => {
        get()
    }, []);

    useEffect(() => {
        setData(datas)
    }, [datas]);

    const get = async () => {
        const posts = await GET().json();
        if (posts && posts.datas)
            setData(posts.datas)
    }

    const del = (id) => {
        const items = datas.filter(item => item.id != id)
        setData(items);
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Posts List</h2>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>S.No.</th>
                        <th>Title</th>
                        <th>Discription</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas && !datas.length &&
                        <tr>
                            <td colSpan="4" align="center">Data not found..</td>
                        </tr>
                    }
                    {datas && datas.map((data, indx) => (
                        <tr key={indx}>
                            <td>{indx + 1}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                            <td>
                                <Link href={`posts/${data.id}`} className="btn btn-sm btn-info me-1" id="viewButton">
                                    <i className="bi bi-trash-fill"></i> View
                                </Link>
                                <button onClick={() => del(data.id)} className="btn btn-sm btn-danger" id="deleteButton">
                                    <i className="bi bi-trash-fill"></i> Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}