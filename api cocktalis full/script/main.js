
const API = 'https://www.thecocktaildb.com/api/json/v1/1/'

let form, input, output, button
output= document.createElement('div')
output.className='output'
form = document.createElement('form')
input= document.createElement('input')
button = document.createElement('button')
button.className='button'
button.innerHTML='<='

form.appendChild(button)

getAllCocktails = async()=>{
    const req = await fetch (API+'filter.php?c=Cocktail')
    const resp = await req.json()
    renderCoctail(resp.drinks)
}

compareFunc = ()=>{
    input.value.length <2 ? getAllCocktails() : serchCocktailsByName()
}

createSearchForm = ()=> {
    form.addEventListener('keyup',()=>{
        compareFunc()
    })
    input.id='serchParametr'
    input.setAttribute('placeholder', 'enter cocktail name')
    form.appendChild(input)
    document.body.appendChild(form)
    compareFunc()
}

createSearchForm()

serchCocktailsByName = async() => {
    output.innerHTML=''
    let nameCocktail = input.value 
    const req = await fetch (API+'search.php?s='+nameCocktail)
    const resp = await req.json()
    renderCoctail(resp.drinks)
    console.log(resp.drinks)
}
renderCoctail = async (arr) =>{

    let error = document.createElement('p')
    error.style.color='red'
    error.innerHTML='ПУСТО'
    arr ? arr.map((el, index)=>{
        let div = document.createElement('div')
        div.className='card'
         div.addEventListener('click' ,()=>{
            createSearchId(el.idDrink)
        })
        
        let nameCocktail = document.createElement('p')
        let imgCocktail = document.createElement('img')
        imgCocktail.src= el.strDrinkThumb
        nameCocktail.innerHTML=el.strDrink
        div.appendChild(imgCocktail)
        div.appendChild(nameCocktail)
        output.appendChild(div)
       
    }):output.appendChild(error)
    document.body.appendChild(output)
}

createSearchId = async (id)=> {
    output.innerHTML =''
    const req = await fetch (API +"lookup.php?i="+id)
    const resp = await req.json()
    renderFullInformationById(resp)
    console.log(resp.drinks)
}
renderFullInformationById = (arr) =>{

    let infoCard = document.createElement('div')
    infoCard.className='infoCard'
    output.appendChild(infoCard)

    let cardInfo =document.createElement('div')
    cardInfo.className='infoText'
    infoCard.appendChild(cardInfo)

    let informationIdImg = document.createElement('img')
    informationIdImg.className ='infoImg'
    informationIdImg.setAttribute ('src', arr.drinks[0].strDrinkThumb)
    infoCard.appendChild(informationIdImg)

    let idName = document.createElement('p')
    idName.className ='infoP'
    idName.innerHTML= arr.drinks[0].strDrink
    cardInfo.appendChild(idName)

    let alcohol = document.createElement('p')
    alcohol.className = 'alcohol'
    alcohol.innerHTML=arr.drinks[0].strAlcoholic + ' '+arr.drinks[0].strCategory 
    cardInfo.appendChild(alcohol)

    let ingredient = document.createElement('div')
    ingredient.className='ingred'
    cardInfo.appendChild(ingredient)

    let aboutIng = document.createElement('p')
    aboutIng.className='aboutIng'
    aboutIng.innerHTML='INGREDIENTS:'
    ingredient.appendChild(aboutIng)
    
    let ingredFirst = document.createElement('a')
    ingredFirst.className='ingFirst'
    ingredFirst.innerHTML = arr.drinks[0].strIngredient1 ;   
    ingredient.appendChild(ingredFirst)
    
    ingredient.addEventListener('click', ()=>{
        createSearchIng(arr.drinks[0].strIngredient1)
    })
}

getback = ()=>{
   
    button.addEventListener('click', ()=>{
        infoCard.innerHTML=''
        getAllCocktails()
    })
}

createSearchIng =async(strIngredient1)=>{
    output.innerHTML =''
    const req = await fetch (API +"search.php?i="+ strIngredient1 )
    const resp = await req.json()
    console.log(resp)
}
