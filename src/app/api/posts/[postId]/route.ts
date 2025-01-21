import posts from '../../../../json/posts.json'

export function GET(Request, { params }) {
    const { postId } = params
    const data = posts.filter(post => post.id == postId)
    return Response.json({ datas: data.length ? data[0] : {} }, { status: 200 })
}