import comments from '../../../../json/comments.json'

export async function GET(Request, { params }) {
    const { commentId } = params
    const datas = comments.filter(item => item.id == commentId)
    return Response.json({ datas: datas, success: 'comment fetched successfully' }, { status: 200 })
}
