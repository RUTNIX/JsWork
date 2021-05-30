const API = 'https://jsonplaceholder.typicode.com/todos/1/'

let allCard = document.getElementsByClassName('allCard')
let card = document.getElementsByClassName('card')

getAllUsers =async()=>{
    let urlUsers = API+ 'users' 

    let req = await fetch(urlUsers)
    let resp = await req.json()
    console.log(resp)
    renderMainName(resp)
}
getAllUsers()
getAllPhotos = async()=>{
    let urlUsersPhotos = API +'photos'
    
    let req = await fetch(urlUsersPhotos)
    let resp = await req.json()
    console.log(resp)
    renderMainPhoto(resp)
}
getAllPhotos()


renderMainPhoto =async(arr)=>{

    let mainImg = document.createElement('img')
    mainImg.src=''
    
}

renderMainName = async(arr)=>{
    let mainName = document.createElement('p')
    mainName.innerHTML='uvruvbruv'
}