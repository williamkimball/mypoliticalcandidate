let articleContent = ""

let basicInfo = document.createElement("section");
basicInfo.id = "candidate__info"

let candidate__info__image = document.createElement("img");
candidate__info__image.setAttribute("src", "scottj.jpeg");
candidate__info__image.setAttribute("alt", "Image of Scott DesJarlais");
basicInfo.appendChild(candidate__info__image);

let candidate__info__name = document.createElement("h1");
candidate__info__name.textContent = "Scott DesJarlais";
basicInfo.appendChild(candidate__info__name);

let candidate__info__rep = document.createElement("h2");
candidate__info__rep.textContent = "Representative for Tennessee's 4th congressional district"
basicInfo.appendChild(candidate__info__rep);

let candidate__info__affiliation = document.createElement("h3");
candidate__info__affiliation.textContent = "Republican"
basicInfo.appendChild(candidate__info__affiliation);

document.querySelector("article").appendChild(basicInfo)


let committees = document.createElement("section");
committees.id = "candidate__committiees";
committees.innerHTML = '<h2>House Committee on Agriculture</h2><h2>House Committee on Armed Services</h2><h2>House Committee on Oversight and Government Reform</h2>'
articleContent.innerHTML += "committees"
document.querySelector("article").appendChild(committees)

let links = document.createElement("section");
links.id = "candidate__links";
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