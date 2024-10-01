import Link from 'next/link'
import style from './styles.module.css'

export const metadata = {
    title: 'Login Page',
    description: 'Login description'
}

export default function Login() {
    return (
        <>
            <div className={`container vh-100 justify-content-center align-items-center mt-5 ${style.width}`}>
                <div className='card p-4'>
                    <h4 className='text-center mb-4 text-info'>Login Form</h4>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Email Id." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Password." />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Link href="/dashboard"><button className='btn btn-info me-2'>Login</button></Link>
                        {/* <Link href="/register"><button className='btn btn-info'>Register</button></Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}