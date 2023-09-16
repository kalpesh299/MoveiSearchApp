// console.log("linked");

const getMovies = async ()=>{
    const moveicards=document.querySelector(".moveiscards");
    let input=document.getElementById("input");
    moveicards.innerHTML="";
    moveicards.style.backgroundColor="white";
    const movei=input.value;
    let moveis=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=cca4f583&s=${movei}&page=1`);
    
    moveis=await moveis.json();
   
    // console.log(moveis.Search);
    const filteredmoveis=moveis.Search.filter((el)=>{
      return el.Type=="movie" && el.Poster!="N/A";
    })
console.log(filteredmoveis);
    filteredmoveis.forEach((el)=>{

       let rating=Math.floor(Math.random()*10)+1;

       const div=document.createElement("div");
div.classList.add("cardcontainer");
        const card=`<div class="moveicard">
        <div class="imgcontainer"><img src="${el.Poster} alt=movei poster"></div>
        
        <div class="ratings">Rating: <i class="fa-solid fa-star" style="color: #f2d936;"></i> <span>${rating}</span>/10</div> 
        <h3 class="title">${el.Title}</h3> 
       
        <p class="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsum aperiam aut rerum voluptates molestias, alias distinctio modi ratione, culpa fuga cum, quas libero nulla excepturi porro illum quibusdam aliquam!</p></div>`
        
        div.innerHTML=card;
       
        moveicards.appendChild(div);
        moveicards.style.backgroundColor="black";


    })
input.value="";
    
  
}





document.getElementById("btn").addEventListener("click",getMovies);

