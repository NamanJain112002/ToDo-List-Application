
let button = document.getElementById("btn");

button.addEventListener("click",()=>{

    // console.log("clicked");
    if(document.getElementById("input").value === ""){
        alert("You have to write something!")
    }
    else{
   let input = document.getElementById("input").value;
//    console.log(input);

  const temp = document.getElementById("temp");
  const items =document.getElementById("items");

  const clone = temp.content.cloneNode(true);

  var removeButton = clone.getElementById('removeBTN');
  removeButton.addEventListener('click', function() {
      // Remove the corresponding item when the minus button is clicked
     removeButton.parentElement.remove(clone);
      
  });

  var chk = clone.getElementById("check");

  chk.addEventListener('click',()=>{
    chk.parentElement.classList.toggle("done");
  })


  let data = clone.querySelector("#Task");
  data.innerHTML = input;
//   console.log(data);
    items.append(clone);
   

    }
   
})









