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
candidate__committee.textContent = "Committees Scott DesJarlais serves on";
basicInfo.appendChild(candidate__committee);

//create a ul to contain the following commitees
let candidate__committee__list = document.createElement("ul")

//create an li elements to contain each of the committees the representative is on.

let candidate__committee__1 = document.createElement("li")
candidate__committee__1.textContent = "House Committee on Agriculture";
candidate__committee__list.appendChild(candidate__committee__1);

let candidate__committee__2 = document.createElement("li")
candidate__committee__2.textContent = "House Committee on Armed Services";
candidate__committee__list.appendChild(candidate__committee__2);

let candidate__committee__3 = document.createElement("li")
candidate__committee__3.textContent = "House Committee on Oversight and Government Reform";
candidate__committee__list.appendChild(candidate__committee__3);

//append the completed committees section to the DOM
document.querySelector("article").appendChild(candidate__committee__list);

//create a section element that contains the links to the representatives sponsored legislation and gives it an appropriate id
let links = document.createElement("section");
links.id = "candidate__links";

//create a title for the unordered list of sponsored bills
let link_title = document.createElement("h2")
link_title.textContent = "Bills Scott DesJarlais has Sponsored";
links.appendChild(link_title);

//create an unordered list
let links_list = document.createElement("ul")
//create the list items containing the links to sponsored bills
let links_list_item_1 = document.createElement("li")
let link_1 = document.createElement("a");
link_1.setAttribute("href", "https://www.govtrack.us/congress/bills/browse?sponsor=412477");
link_1.setAttribute("target", "_blank")
link_1.textContent= "Link to all Sponsored Legislation"
links_list_item_1.appendChild(link_1)
links_list.appendChild(links_list_item_1)

let links_list_item_2 = document.createElement("li")
let link_2 = document.createElement("a");
link_2.setAttribute("href", "https://www.govtrack.us/congress/bills/115/hr1338");
link_2.setAttribute("target", "_blank")
link_2.textContent= "Horse Bill"
links_list_item_2.appendChild(link_2)
links_list.appendChild(links_list_item_2)

let links_list_item_3 = document.createElement("li")
let link_3 = document.createElement("a");
link_3.setAttribute("href", "https://www.govtrack.us/congress/bills/115/hr500");
link_3.setAttribute("target", "_blank")
link_3.textContent= "Tax Bill"
links_list_item_3.appendChild(link_3)
links_list.appendChild(links_list_item_3)

//append the links to the ul, then to the article as a whole
links.appendChild(links_list);
document.querySelector("article").appendChild(links)

//add the fake slogan
let slogan = document.createElement("h2")
slogan.textContent = "Mission statement: I strive to keep horses safe. Help me help horses.";
document.querySelector("article").appendChild(slogan)

console.log(document.querySelector("article"))

//add a custom attribute to the candidate__info section
let info = document.querySelector("#candidate__info");
let att = document.createAttribute("congressional-district");
att.value = "congressional_district_4";
info.setAttributeNode(att);

//console.log the newly changed section to check if it worked correctly
console.log(document.querySelector("#candidate__info"))