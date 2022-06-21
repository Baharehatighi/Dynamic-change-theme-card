const btns = document.querySelectorAll(".btn");
//  const colors = [];

btns.forEach((btn) => {
    btn.addEventListener("click", function(e){

        let btnColor = e.target.dataset.color;
        document.documentElement.style.setProperty('--theme-color', btnColor);

        // Function for save data in localstorage
        saveToLocalStorage(btnColor);
   
    })

})

// localStorage
function saveToLocalStorage(btnColor){
    
    localStorage.setItem("theme", JSON.stringify(btnColor));

}

// Onload Dom

window.onload = () => {
   
    let getTheme = JSON.parse(localStorage.getItem("theme"));
      document.documentElement.style.setProperty('--theme-color', getTheme);

}











