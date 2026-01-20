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