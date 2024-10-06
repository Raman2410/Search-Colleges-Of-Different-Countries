let api = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');


btn.addEventListener("click", async function(){
  let country = document.querySelector("input").value;
  console.log(country);
  let college = await getCollege(country);

  show(college)
});

function show(college){
  let list = document.querySelector("#list");
  list.innerText = "";

  for(col of college){
    console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
    li.classList.add("li");
  }
}

async function getCollege(country){
  try{
   let res =  await axios.get(api + country);
     return res.data;
  } catch(e){
    console.log(e);
    return [];
  }
}