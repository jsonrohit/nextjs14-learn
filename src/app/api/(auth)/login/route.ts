export async function POST(request: Request) {
    const body = await request.json();
    const { email, password } = body;
    const errors = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors['email'] = 'Invalid email address'
    }
    if (!password) {
        errors['password'] = 'Password field required'
    }
    if (!password || !email || !emailRegex.test(email)) {
        return Response.json({ errors: { ...errors }, msg: 'invaild data' }, { status: 400 });
    }
    return Response.json({ body: body, msg: 'login successfully', status: 200 }, { status: 200 })
}