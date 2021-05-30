
let sum = '0'
let bg = document.createElement('div')
document.body.appendChild(bg)

let output = document.createElement('input')
output.className='output'
output.value=sum
output.disabled=true
bg.appendChild(output)
let arr = ['0', "1", "2", "3", "4", "5", "6", "7", "8", "9", "+",  "(", ")","-", "=", "/", "*", ".", "C",'AC']
arr.forEach((el,index)=>{
    let btn = document.createElement('input')
    btn.className="btn"
    btn.type =  "button"
    btn.value=el
    btn.setAttribute('onclick', 'getNum(event)')
    if(index % 4 == 0){
        
      bg.appendChild(document.createElement('br'))
    }
    bg.appendChild(btn)
})


const getNum = (e) =>{
    let num = e.target.value
    
    if(num == 'C'){
        sum = '0'
    }else if( num == 'AC'){
        sum = sum.substr(0,sum.length -1)
    }
    else if(num == '='){
        sum=eval(sum)
    }
    else{
        if(sum == '0'){
            sum = ''
        }
        sum+=num
    }
    output.value=sum
}
