let articleContent = ""

let basicInfo = document.createElement("section");
basicInfo.className = "candidate__info"
basicInfo.innerHTML = '<img src="scottj.jpeg" alt="Image of Scott DesJarlais"> <h1>Scott DesJarlais</h1> <h2>Representative for Tennessee&#39;s 4th congressional district</h2><h3>Republican</h3>'
console.log(basicInfo)
document.querySelector("article").appendChild(basicInfo)


let committees = document.createElement("section");
committees.className = "candidate__committiees";
committees.innerHTML = '<h2>House Committee on Agriculture</h2><h2>House Committee on Armed Services</h2><h2>House Committee on Oversight and Government Reform</h2>'
articleContent.innerHTML += "committees"
document.querySelector("article").appendChild(committees)

let links = document.createElement("section");
links.className = "candidate__links";
links.innerHTML = '<a href="https://www.govtrack.us/congress/bills/browse?sponsor=412477">Link to Sponsored Legislation</a>'
console.log(links)
articleContent.innerHTML += "links"

console.log(articleContent);

document.querySelector("article").appendChild(links)


document.querySelector("article").innerHTML += "<h3>Mission statement: I strive to keep horses safe!</h3>";

console.log(document.querySelector("article"))

let info = document.querySelector("#candidate__info");
let att = document.createAttribute("congressional-district");

att.value = "congressional_district_4";

info.setAttributeNode(att);
 console.log(document.querySelector("#candidate__info"))