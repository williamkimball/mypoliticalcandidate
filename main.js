document.querySelector("article").innerHTML += "<h3>Mission statement: I strive to keep horses safe!</h3>";

console.log(document.querySelector("article"))

let info = document.querySelector("#candidate__info");
let att = document.createAttribute("congressional-district");

att.value = "congressional_district_4";

info.setAttributeNode(att);