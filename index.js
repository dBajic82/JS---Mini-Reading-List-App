/* Selektujemo celu ul listu i dodeljujemo joj eventListener, unutar njega postavljamo if stejtment
koji proverava da li je klik unutar ul taga bio klik na element sa klasom 'delete'. Ako jeste onda
brisemo roditeljski - li element  tog elementa na koji smo kliknuli. Na ovaj nacin postizemo brisanje 
jednog elementa li liste ul na cije delete dugme smo kliknuli. */

//Brisanje knjiga

let ul = document.querySelector('#book-list ul');

ul.addEventListener('click', event =>{
   if(event.target.className == "delete"){
      event.target.parentElement.remove();
   } 
})

// Rad sa formama; dodavanje novog elementa;

const addForm = document.forms["add-book"];

 addForm.addEventListener("submit", event=>{
   event.preventDefault();
   let input = addForm.querySelector("input");
   if(input.value !== ''){

         const li = document.createElement("li");
         const name = document.createElement("span");
         const delBtn = document.createElement("span");

         name.textContent = input.value;
         delBtn.textContent = 'delete';

         ul.appendChild(li);
         li.appendChild(name);
         li.appendChild(delBtn);

         name.classList.add('name');
         delBtn.classList.add('delete');

         //Kraci nacin da se postigne isti efekat:

         /* let newLi = document.createElement("li");
         newLi.innerHTML = `<span class="name">${input.value}</span>
                           <span class="delete">delete</span>`;
         document.querySelector("ul").append(newLi); */
   }

   input.value = "";     

}) 

//dodavanje chack-box opcije za sakrivanje spiska knjiga:

const checkBox = document.getElementById("hide");
checkBox.addEventListener("change", event => {
   if(checkBox.checked){
      ul.style.display = "none";
   }
   else {
      ul.style.display = "block"; // "block" ili "initial"
   }
})


// Pravljenje search filtera.
 
const searchBar = document.forms["search-books"].querySelector("input");

searchBar.addEventListener("keyup", event => {
   const term = event.target.value.toLowerCase();
   const books = document.querySelectorAll(".name");
   
   books.forEach(book => {
      let naslov = book.textContent;
      if(naslov.toLowerCase().indexOf(term) < 0){
         book.parentElement.style.display = "none";
      }
      else {
         book.parentElement.style.display = "block";
      }
   })


})









