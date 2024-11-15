let comments = [
    {
        comment : 'comment 1'
    },
    {
        comment : 'comment 2'
    },
];

export async function GET(request: Request) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('id')
    if(query)
        return Response.json({ datas: comments[0], success: 'fatched successfully' }, { status: 200 })

    return Response.json({ datas: comments, success: 'fatched successfully' }, { status: 200 })
}
