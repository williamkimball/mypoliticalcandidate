//create empty variable to hold the entire contents of the article
let articleContent = ""

//create an element to contain the candidate's information and give it the correct id
let basicInfo = document.createElement("section");
basicInfo.id = "candidate__info"

//create an image element with correct sources and alt attributes and append to the candidate section
let candidate__info__image = document.createElement("img");
candidate__info__image.setAttribute("src", "scottj.jpeg");
candidate__info__image.setAttribute("alt", "Image of Scott DesJarlais");
basicInfo.appendChild(candidate__info__image);

//create an h1 element with the candidate's name and append it to the candidate section
let candidate__info__name = document.createElement("h1");
candidate__info__name.textContent = "Scott DesJarlais";
basicInfo.appendChild(candidate__info__name);

//create an h2 element with the candidate's district and append it to the candidate section
let candidate__info__rep = document.createElement("h2");
candidate__info__rep.textContent = "Representative for Tennessee's 4th congressional district"
basicInfo.appendChild(candidate__info__rep);

//create an h3 element with the candidate's political affiliation and append it to the candidate section
let candidate__info__affiliation = document.createElement("h3");
candidate__info__affiliation.textContent = "Republican"
basicInfo.appendChild(candidate__info__affiliation);

//append the finished candidate section to the article in index.html
document.querySelector("article").appendChild(basicInfo)

//create a section element to contain the committees that the representative is a part of and add the correct id to it
let committees = document.createElement("section");
committees.id = "candidate__committiees";

//create an h2 element with the candidate's name and append it to the candidate section
let candidate__committee = document.createElement("h2")
candidate__committee.textContent = "Committees Scott DesJarlais is on";
basicInfo.appendChild(candidate__committee);

//create an h3 element to contain each of the committees the representative is on.

let candidate__committee__1 = document.createElement("h3")
candidate__committee__1.textContent = "House Committee on Agriculture";
committees.appendChild(candidate__committee__1);

let candidate__committee__2 = document.createElement("h3")
candidate__committee__2.textContent = "House Committee on Armed Services";
committees.appendChild(candidate__committee__2);

let candidate__committee__3 = document.createElement("h3")
candidate__committee__3.textContent = "House Committee on Oversight and Government Reform";
committees.appendChild(candidate__committee__3);

//append the completed committees section to the DOM
document.querySelector("article").appendChild(committees);

//create a section element that contains the links to the representatives sponsored legislation and gives it an appropriate id
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