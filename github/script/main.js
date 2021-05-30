const API = 'https://api.github.com/users/'

let form = document.getElementById('form')
let date = document.getElementById('date')
let btn = document.getElementById('btn')
let dateProfile = document.createElement('div')
dateProfile.className='profile'
date.appendChild(dateProfile) 

let dateMain = document.createElement('div')
   
let go=(e)=>{
        e.preventDefault()
        let input = document.getElementById('input')
        let url= API + input.value
        getGithub(url)
        dateProfile.innerHTML=''
        dateMain.innerHTML=''
    }
let getGithub = async(url)=>{

        let req  = await fetch(url)
        let resp = await req.json()
        console.log(resp)
        renderUser(resp)
    }
    
let renderUser =(obj)=>{

    dateProfile.className='profile'
    date.appendChild(dateProfile) 

    let img = document.createElement('img')
    img.setAttribute('src', obj.avatar_url)
    img.className = 'dateImg'
    dateProfile.appendChild(img)

    let name = document.createElement('h2')
    name.className='dateName'
    name.innerHTML=obj.name
    dateProfile.appendChild(name)

    let login = document.createElement('p')
    login.innerHTML= '<b>LOGIN:</b>' + obj.login
    login.className='dateLogin'
    dateProfile.appendChild(login)

    let follow = document.createElement('div')
    follow.className='follow'
    dateProfile.appendChild(follow)

    let followers = document.createElement('p')
    followers.innerHTML=obj.followers +'  followers'
    follow.appendChild(followers)

    let following = document.createElement('p')
    following.innerHTML=obj.following +' following'
    follow.appendChild(following)

    followers.addEventListener('click', ()=>{
        getPushFollowers()
    })

    following.addEventListener('click', ()=>{
        getPushFollowing()
    })
}

getPushFollowers = async(el)=>{
    let urlFollowers = API + input.value + '/followers'
    const req = await fetch(urlFollowers)
    const resp = await req.json()
    console.log(resp)
    renderFollowers(resp)
}

renderFollowers = (arr) => {

    dateMain.className='dateMain'
    date.appendChild(dateMain)
    let allFollowers = document.createElement('div')
        allFollowers.className='allFollowers'
        dateMain.appendChild(allFollowers)    

    if(arr){ arr.map((el, index)=>{ 
        let mainFollowers =document.createElement('div') 
        mainFollowers.className='mainFollowers'
        allFollowers.appendChild(mainFollowers)

        let followersImg = document.createElement('img')
        followersImg.src=el.avatar_url
        mainFollowers.appendChild(followersImg)
 
        let followersLogin = document.createElement('p')
        followersLogin.innerHTML = '<b>login:</b>'+ el.login
        mainFollowers.appendChild(followersLogin)     

    })

    }
}


getPushFollowing = async()=>{

    let urlFollowing = API + input.value + '/following'
    const req = await fetch(urlFollowing)
    const resp = await req.json()
    console.log(resp)
    renderFollowing(resp)
}

renderFollowing = (arr)=>{
    dateMain.className='dateMain'
    date.appendChild(dateMain)
    let allFollowing = document.createElement('div')
        allFollowing.className='allFollowing'
        dateMain.appendChild(allFollowing)

    arr ? arr.map((el, index)=>{
        let mainFollowing =document.createElement('div')
        mainFollowing.className='mainFollowing'
        allFollowing.appendChild(mainFollowing)

        let followingImg = document.createElement('img')
        followingImg.src=el.avatar_url
        mainFollowing.appendChild(followingImg)
        
        let followingLogin = document.createElement('p')
        followingLogin.innerHTML = '<b>login:</b>'+ el.login
        mainFollowing.appendChild(followingLogin)  

}):getGithub ()
}

