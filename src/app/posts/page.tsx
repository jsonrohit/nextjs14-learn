'use client'

import Link from 'next/link'
import { useEffect, useState } from "react";
import { _get } from "../api/posts/route"

export default function posts() {
    const [datas, setData] = useState([]);

    const get = async () => {
        const items = await _get('posts')
        if (items.length)
            updsState(items)
    }

    function updsState(data) {
        setData(data)
    }

    useEffect(() => {
        get()
    }, []);

    // useEffect(()=>{
    //     updsState(datas)
    //     console.log(datas,'dfgdffgddfddfddgddd');
    // },[datas])

    const del = (id) => {
        const items = datas.filter(item => item.id != id)
        updsState(items);
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Posts List</h2>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Discription</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {!datas.length &&
                        <td colSpan="4" align="center">Data not found..</td>
                    } */}
                    {datas.length && datas.map((data, indx) => (
                        <tr key={indx}>
                            <td>{indx+1}</td>
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