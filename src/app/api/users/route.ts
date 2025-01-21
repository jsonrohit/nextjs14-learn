import users from '../../../json/users.json'

export function GET(){
    return Response.json({datas: users});
}

export async function PUT(request: Request) {
    return Response.json({ success: 'PUT Internal Server Error' }, { status: 500 })
}

export async function DELETE(request: Request) {
    return Response.json({ method:'DELETE',success: 'Internal Server Error' }, { status: 500 })
}