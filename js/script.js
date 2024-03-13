const userInput = document.querySelector(".user-input");
const listContainer = document.querySelector(".list-container");



// added a data 
function addText() {
    if (userInput.value === ''){
        alert("Must enter the text of this input ")
        setLocalstor()
    }else{
        let li = document.createElement("li");
        li.innerHTML = `${userInput.value} <span>&#10006</span>`;
        listContainer.insertBefore(li, listContainer.children[0])
    }

    userInput.value = '';
    setLocalstor()
}



// list remove and added  line-through li 
listContainer.addEventListener("click", (e)=> {
    
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("lists")
        setLocalstor()
    }else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        setLocalstor()
    };
})

// when enter then add new data 
window.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        addText()
    }
})


// save all data localStorage 
function setLocalstor() {
    localStorage.setItem("data",listContainer.innerHTML)
}


// show all task form localstorage 
function showData() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showData()