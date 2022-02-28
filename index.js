const dateField = document.querySelector(".item-date");

const itemNameField = document.querySelector(".item-name");

const itemAmount = document.querySelector(".item-number");

const addToBtn = document.querySelector(".add-btn");

const newElementsContainer = document.querySelector(".new-Elements-container");

const totalAmount = document.querySelector(".final-amount");






addToBtn.addEventListener("click", ()=> {
  

  if (dateField.value === "" || itemNameField === "" || itemAmount === "") {

    return alert("Please fill in empty box");
  }

  else if (dateField.value === "") {
    return alert ("Please enter date");
  }

  else if (itemNameField === "") {
    return alert("Please enter expense");
  }

  else if (itemAmount === "") {
    return alert("Please enter an amount")
  }
  

  const newContainer = document.createElement("div");
  newContainer.classList.add("new-container");

  newElementsContainer.appendChild(newContainer);
  
  const firstField = document.createElement("p");
  firstField.classList.add("date-element")
  firstField.textContent = dateField.value;
  
  newContainer.appendChild(firstField);

  const secondField = document.createElement("p");
  secondField.classList.add("item-element");
  secondField.textContent = itemNameField.value;
  newContainer.appendChild(secondField);

  const thirdField = document.createElement("p");
  thirdField.classList.add("amount-element");
  thirdField.textContent = itemAmount.value;
  newContainer.appendChild(thirdField);
  


 

  dateField.value = "";
  itemNameField.value = "";
  itemAmount.value = "";
});
