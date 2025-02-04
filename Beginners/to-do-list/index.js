var addClick = document.getElementById('btn-click');
var addContent = document.getElementById('input-box');
var reset = document.getElementById('reset');
var ul = document.createElement('ul');
document.body.appendChild(ul); 
reset.onclick = () => {
	 addContent.value = "";
}

addClick.onclick = () => {
 	if(addContent.value !== ""){
 		 
       var li = document.createElement('li');
       var addp = document.createElement('p');
       ul.appendChild(li);
       li.appendChild(addp);
       addp.textContent = addContent.value;
       
       var delItem = document.createElement('button');
       delItem.innerHTML = 'Delete';
       li.appendChild(delItem);
       
       console.log('Clicked');
       
     	 delItem.onclick = () => {
         ul.removeChild(li);
       }
       
       var doneBtn = document.createElement('button');
       doneBtn.innerHTML = 'Done';
       li.appendChild(doneBtn);
       
       doneBtn.onclick = () => {
        addp.classList.toggle('strike-off');
       
       }
       // Clear the input after adding an item
        addContent.value = "";

 
 	}
  else{
  console.log('We are done!')
  }
	
}
addContent.addEventListener('keypress', (event) => {
	if(event.key === 'Enter') addClick.click();
	
})