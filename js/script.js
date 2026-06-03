const exploreSuites = [

{
title:"Single Room",
price:"₦45,000 / Night",
image:"assets/images/single room.jpg",
link:"single-room.html",

description:
"Perfect for solo travellers and short stays, featuring a comfortable bed, air conditioning, Smart TV, complimentary WiFi and 24-hour room service."
},

{
title:"Standard Room",
price:"₦55,000 / Night",
image:"assets/images/standard room.jpg",
link:"standard-room.html",

description:
"Designed for guests seeking additional comfort and style, offering spacious interiors, premium furnishings and a relaxing atmosphere."
},

{
title:"Studio Room",
price:"₦60,000 / Night",
image:"assets/images/studio room.jpg",
link:"studio-room.html",

description:
"An elegant accommodation option with enhanced space, modern décor and premium hospitality ideal for both leisure and business travellers."
},

{
title:"Premium Room",
price:"₦70,000 / Night",
image:"assets/images/premium room.jpg",
link:"premium-room.html",

description:
"Our signature luxury experience featuring refined interiors, superior comfort and exclusive amenities for a memorable stay."
}

];

let exploreIndex = 3;

function updateExploreSuite(){

document.getElementById("exploreSuiteTitle").innerHTML =
exploreSuites[exploreIndex].title;

document.getElementById("exploreSuiteDescription").innerHTML =
exploreSuites[exploreIndex].description;

document.getElementById("exploreSuiteImage").src =
exploreSuites[exploreIndex].image;

document.getElementById("exploreSuiteLink").href =
exploreSuites[exploreIndex].link;

}

function nextExploreSuite(){

exploreIndex++;

if(exploreIndex >= exploreSuites.length){
exploreIndex = 0;
}

updateExploreSuite();

}

function prevExploreSuite(){

exploreIndex--;

if(exploreIndex < 0){
exploreIndex = exploreSuites.length - 1;
}

updateExploreSuite();

}
