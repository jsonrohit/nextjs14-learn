import Link from 'next/link'

export default function Register(){
    return(
        <>
            <h3>Register</h3>
            <Link href="/dashboard">Submit</Link>
            <Link href="/login">Back to Login</Link>
        </>
    )
}