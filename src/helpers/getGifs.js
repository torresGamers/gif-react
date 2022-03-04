const getGifs =async(categori)=>{

    const url = `http://api.giphy.com/v1/gifs/search?limit=10&api_key=U4Boyhd7Ex61xlNYzhCZvkKHAnGQkVoY&q=${encodeURI(categori)}`;
    const resp = await fetch(url);
    const {data} = await resp.json()
    // console.log(data)

    const gifs = data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    });
    // console.log(gifs);
    return gifs
    
}
export default getGifs