import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/login');
  return (
    <h2>Hello next js</h2>
  );
}