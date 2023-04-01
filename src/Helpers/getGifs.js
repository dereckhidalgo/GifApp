
export const getGifs = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=8fkqTXFJ4GokOAQ1z6hEF0bmslavQdlr&q=${category}&limit=5`
    const response = await fetch( url )
    const {data}= await response.json()
    const gifs = data.map(img=>(
        {
            id: img.id,
            img_url: img.images.downsized_medium.url,
            title: img.title
        }
    ))
    return gifs;
}