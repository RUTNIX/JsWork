let site = 'https://randomuser.me/api/?results=50'


 

const go = async()=>{
    let req  = await fetch(site)
    let res = await req.json()
    console.log(res.results)
    renderElemnts(res.results)
}
go()

const renderElemnts = (a)=>{
        a.forEach(el => {
            let img = document.createElement('img')
            img.src=el.picture.large
            document.body.appendChild(img) 
            let name = document.createElement('p')
            name.innerHTML=el.name
            document.body.appendChild(name) 
            let age = document.createElement('p')
            age.innerHTML=el.dob.age
            document.body.appendChild(age) 
            let email = document.createElement('p')
            email.innerHTML=el.dob.email
            document.body.appendChild(email) 
            let num = document.createElement
        });
}
