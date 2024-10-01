'use client'
import { useEffect } from "react";
import { _get } from "../services/post"

export default function dashboard() {

    const datas = async () =>{
        await _get('post').then(res=>{
            console.log(res,'res');
        });
    }

    useEffect(() => {
        datas()
        return () => {
            
        };
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Searchable Table</h2>
            <div className="d-flex justify-content-end">
                <input className="form-control mb-4" id="tableSearch" type="text" placeholder="Search..." style={{ width: "22rem" }} />
            </div>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="tableData">
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                        <td>555-555-5555</td>
                        <td>
                            <button className="btn btn-sm btn-info me-1" id="viewButton">
                                <i className="bi bi-trash-fill"></i> View
                            </button>
                            <button className="btn btn-sm btn-success me-1" id="editButton">
                                <i className="bi bi-pencil-fill"></i> Edit
                            </button>
                            <button className="btn btn-sm btn-danger" id="deleteButton">
                                <i className="bi bi-trash-fill"></i> Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>jane@example.com</td>
                        <td>555-555-1234</td>
                        <td>
                            <button className="btn btn-sm btn-info me-1" id="viewButton">
                                <i className="bi bi-trash-fill"></i> View
                            </button>
                            <button className="btn btn-sm btn-success me-1" id="editButton">
                                <i className="bi bi-pencil-fill"></i> Edit
                            </button>
                            <button className="btn btn-sm btn-danger" id="deleteButton">
                                <i className="bi bi-trash-fill"></i> Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mark Johnson</td>
                        <td>mark@example.com</td>
                        <td>555-555-9876</td>
                        <td>
                            <button className="btn btn-sm btn-info me-1" id="viewButton">
                                <i className="bi bi-trash-fill"></i> View
                            </button>
                            <button className="btn btn-sm btn-success me-1" id="editButton">
                                <i className="bi bi-pencil-fill"></i> Edit
                            </button>
                            <button className="btn btn-sm btn-danger" id="deleteButton">
                                <i className="bi bi-trash-fill"></i> Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}