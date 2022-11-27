let leftList=document.querySelector(".left-l")
let leftInput=document.querySelector(".left-input");
let leftButton=document.querySelector(".list-left .btn")
let rightTitle=document.querySelector(".card-header-left h3")
leftButton.addEventListener('click',()=>{
    let input=leftInput.value.trim()
    if (input.length!==0) {
        let li=document.createElement('li');
        li.innerHTML=leftInput.value;
        leftList.appendChild(li);
        li.className='left-list-active'
        rightTitle.innerHTML=leftInput.value;
        leftInput.value='';
      if (li.previousElementSibling) {
          li.previousElementSibling.classList.remove('left-list-active')
      }else{
          li.className='left-list-active'
        }
    } else {
       alert('Please Write Something To Do') 
    }
    
})

let rightList=document.querySelector(".right-l")
let rightInput=document.querySelector(".right-input");
let rightButton=document.querySelector(".list-right .btn")
rightButton.addEventListener('click',()=>{
    if (leftList.firstElementChild!==null) {
        let input=rightInput.value.trim()
        if (input.length!==0) {
            let div=document.createElement('div')
            rightList.appendChild(div);
            let checkbox=document.createElement('input')
            checkbox.type='checkbox'
            checkbox.className="checkbox-field"
            let label=document.createElement('label')
            label.className="checkbox-label"
            label.appendChild(document.createTextNode(rightInput.value));
            div.appendChild(checkbox);
            div.appendChild(label);
            rightInput.value='';
        } else {
            alert('Please Write Something To Do')
        }
    } else {
        alert('First Add To My List')
    }    
})
let checkboxes=document.querySelectorAll('.checkbox-field')
checkboxes.forEach(checkbox=>{
    checkbox.addEventListener('click',()=>{
        let labels=document.querySelectorAll('.checkbox-label')
        labels.forEach(label=>{
            label.style.textDecoration==='line-through'
        })
    })
})

