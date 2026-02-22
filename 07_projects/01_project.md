#project 1

#color grading
```Javascript

const button=document.querySelectorAll('.button');
// console.log(button)
const body=document.querySelector("body");
// console.log(body)

button.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
     console.log(e);
     console.log(e.target)
    
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
  })
}) 

```
##project 2


```javascript


const form=document.querySelector('form')
form.addEventListener('submit', function(e){
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const result=document.querySelector('#results')

  if(height=='' || height<0 || isNaN(height)){
    result.innerHTML="please give valid height";
    
  }
  else if(weight=='' || weight<0 || isNaN(weight)){
    result.innerHTML="please give valid weight";
    
  }
  else{
    const ans= weight/((height*height)/10000).toFixed(2);
    
    let category=''
    if(ans<18.6){
      category="Under Weight";
    }
    else if(ans>18.6 && ans<24.9){
      category="Normal range";
    }
    else{
      category="Overweight";
    }
    result.innerHTML=`so you have <span>${ans}</span> and you lied ${category}`;

  }
 


})


```

##project 3

```javascript

const clock=document.querySelector('#clock')
setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)

```
## project 5
```javascript
// console.log('Project 5');

const insert= document.getElementById('insert');
window.addEventListener('keydown', (e)=>{
  insert.innerHTML=`
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key===" "? 'space': e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.Code}</td>
  </tr>

</table>
  
  `
})




```

## project 6
```javascript 

const randomcolor=function(){
  let color='#'
  const hex='0123456789ABCDEF'
  for(let i=0; i<6; i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color
}
let interval

const startchangingcolor=function(){

  const random=function(){
  document.body.style.backgroundColor=randomcolor();
  }
  if(!interval){
  interval =setInterval(random,1000);
  }
}
const stopchangingcolor=function(){
  clearInterval(interval);
  interval=null
}

document.querySelector("#start").addEventListener('click',startchangingcolor);
document.querySelector("#stop").addEventListener('click',stopchangingcolor);

```



