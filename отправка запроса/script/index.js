let site='http://api.giphy.com/v1/gifs/search?q=';
let api='&api_key=b8DDLWo01xSO3sCK2p06SNw62S3G4AhO';


let output = document.getElementById('output')
const go = (e)=>{
    e.preventDefault()
    let input = document.getElementById('input')
    let url= site + input.value + api
    getAllGiphy(url)
    input.value=''
}
const getAllGiphy = async (url)=>{
    let req  = await fetch(url)
    let res = await req.json()
    renderElemnts(res.data)
}
const renderElemnts =  (arr)=>{
    output.innerHTML=''
    arr.forEach(el => {
        let ifrm = document.createElement('iframe')
        let h = document.createElement('h4')
        ifrm.src = el.embed_url
        ifrm.width='250px'
        ifrm.height='150px'
        h.innerHTML=el.title
        output.appendChild(ifrm)
        output.appendChild(h)
    });
}