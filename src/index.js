document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inputText = e.target.new_task_description.value;
    addToDo(inputText);
    form.reset();
  })
});

function addToDo(text){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  let tasks = document.querySelector('#tasks');
  btn.textContent = 'x';
  p.textContent =  text;
  p.appendChild(btn);
  tasks.appendChild(p);
  btn.addEventListener('click',removeToDo);
}



function removeToDo(e){
  e.target.parentNode.remove();
}

