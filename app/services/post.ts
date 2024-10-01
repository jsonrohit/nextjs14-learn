let URL:any = process.env.API_URL
console.log(URL,'url');

async function _get(route){
    return await fetch(`${URL}/${route}`)
}

export {
    _get
}