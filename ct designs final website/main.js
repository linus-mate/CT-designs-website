

const search = () =>{
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("bags-collection")
  const product = document.querySelectorAll(".js")
  const pname = storeitems.getElementByTagName("h2")

  for(var i=0; i < pname.length; i++){
    let match = product [i].getElementByTagName('h2')[0];

    if(match){
      let textvalue = match.textContent || match.innerHTML

      if(textvalue.toUpperCase().indexOf(searchbox) > -1){
        product[i].style.display = "";
      }else{
        product[i].style.display = "none";
      }
    }
  }
}