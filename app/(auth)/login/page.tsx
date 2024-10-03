'use client'

import Link from 'next/link'
import style from './styles.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// export const metadata = {
//     title: 'Login Page',
//     description: 'Login description'
// }

export default function Login() {
    const router = useRouter()
    const [state, setState] = useState({});
    const [error, setError] = useState();


    const onChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    }

    const submitHandler = () => {
        if (state.email == 'test@gmail.com' && state.password == 'test@123') {
            router.push('posts')
        } else {
            setError('Enter vaild email & password')
        }
    }

    return (
        <>
            <div className={`container vh-100 justify-content-center align-items-center mt-5 ${style.width}`}>
                <div className='card p-4'>
                    <h4 className='text-center mb-4 text-info'>Login Form</h4>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                        <input type="text" className="form-control" onChange={onChange} name="email" id="formGroupExampleInput" placeholder="Enter Email Id." required />
                        <small className="text-danger">{error != '' ? error : ''}</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                        <input type="text" className="form-control" onChange={onChange} name="password" id="formGroupExampleInput2" placeholder="Enter Password." required />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button onClick={submitHandler} className='btn btn-info me-2'>Login</button>
                    </div>
                    <div>
                        <h6>Testing Login Credentials </h6>
                        <small>Email: test@gmail.com</small><br />
                        <small>Password: test@123</small>
                    </div>
                </div>
            <div className="d-flex justify-content-center fixed-bottom">
                <small className="position-absolute">Version:- Next.js 14</small>
            </div>
            </div>
        </>
    )
}