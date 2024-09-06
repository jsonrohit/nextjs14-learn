import Link from 'next/link'

export const metadata = {
    title:'Login Page',
    description: 'Login description'
}

export default function Login(){
    return(
        <>
            <h3>Login</h3>
            <Link href="/dashboard">Submit</Link>
            <Link href="/register">Register</Link>
        </>
    )
}