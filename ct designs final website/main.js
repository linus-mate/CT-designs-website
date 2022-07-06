

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("bags-collection")
  const product = document.querySelectorAll(".js")
  const pname = storeitems.getElementByTagName("h2")

  for(var i=0; i < pname.length; i++){
    let match = product [i].getElementByTagName('h2')[0];

    if(match){
      let textvalue = match.textContent || match.innerHTML;

      if(textvalue.toUpperCase().indexOf(searchbox) > -1){
        product[i].style.display = "";
      }else{
        product[i].style.display = "none";
      }
    }
  }
}

window.onload = function() {
  const pass_field = document.getElementById("pass-key");
  const showBtn = document.getElementById("passShow");
  showBtn.addEventListener("click", function(){
    if (pass_field.type === "password"){
      pass_field.type = "text";
      showBtn.innerHTML = "hide";
      // showBtn.style.color = "3498db";
    }else{
      pass_field.type = "password";
      showBtn.innerHTML = "show";
      // showBtn.style.color = "#222";
  }
})
}


/*$(document).ready(function(){
 const pass_field = document.getElementById("pass-key");
const showBtn = document.getElementById("mm");
console.log(showBtn)
console.log("heu")
showBtn.addEventListener("click", function(){
  console.log("alert")
  if (pass_field.type === "password"){
    pass_field.type = "text";
    showBtn.textContent = "hide";
    showBtn.style.color = "3498db";
  }else{
    pass_field.type = "password";
    showBtn.textContent = "show";
    showBtn.style.color = "#222";
  }
})
}) */