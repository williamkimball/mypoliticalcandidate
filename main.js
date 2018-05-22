let articleContent = ""

let basicInfo = document.createElement("section");
basicInfo.innerHTML = '<img src="scottj.jpeg" alt="Image of Scott DesJarlais"> <h1>Scott DesJarlais</h1> <h2>Representative for Tennessee&#39;s 4th congressional district</h2><h3>Republican</h3>'
console.log(basicInfo)
document.querySelector("article").appendChild(basicInfo)

let attrib = document.createAttribute("id")
attrib.value = "candidate__info"
basicInfo.setAttributeNode(attrib);


let committees = document.createElement("section");
committees.innerHTML = '<h2>House Committee on Agriculture</h2><h2>House Committee on Armed Services</h2><h2>House Committee on Oversight and Government Reform</h2>'
articleContent.innerHTML += "committees"
document.querySelector("article").appendChild(committees)

attrib = document.createAttribute("id")
attrib.value = "candidate__committiees"
committees.setAttributeNode(attrib);

let links = document.createElement("section");
links.innerHTML = '<a href="https://www.govtrack.us/congress/bills/browse?sponsor=412477">Link to Sponsored Legislation</a>'
console.log(links)
articleContent.innerHTML += "links"

attrib = document.createAttribute("id")
attrib.value = "candidate__links"
links.setAttributeNode(attrib);

console.log(articleContent);

document.querySelector("article").appendChild(links)


document.querySelector("article").innerHTML += "<h3>Mission statement: I strive to keep horses safe!</h3>";

console.log(document.querySelector("article"))

let info = document.querySelector("#candidate__info");
let att = document.createAttribute("congressional-district");

att.value = "congressional_district_4";

info.setAttributeNode(att);
 console.log(document.querySelector("#candidate__info"))