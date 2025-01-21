import posts from '../../../json/posts.json'

export function GET() {
    return Response.json({ datas: posts }, { status: 200 })
}