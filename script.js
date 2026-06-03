const rooms = [

{
title: "Single Room",
price: "₦45,000 / Night",
description:
"Comfortable accommodation ideal for short stays and business travellers.",
image: "assets/images/single room.jpg",
details: "single-room.html",
book:
"https://wa.me/2349169882866?text=Hi%20I%20want%20to%20book%20the%20Single%20Room"
},

{
title: "Standard Room",
price: "₦55,000 / Night",
description:
"Spacious and stylish room featuring premium comfort and modern amenities.",
image: "assets/images/standard room.jpg",
details: "standard-room.html",
book:
"https://wa.me/2349169882866?text=Hi%20I%20want%20to%20book%20the%20Standard%20Room"
},

{
title: "Studio Room",
price: "₦60,000 / Night",
description:
"An elegant room experience with additional space and enhanced comfort.",
image: "assets/images/studio room.jpg",
details: "studio-room.html",
book:
"https://wa.me/2349169882866?text=Hi%20I%20want%20to%20book%20the%20Studio%20Room"
},

{
title: "Premium Room",
price: "₦70,000 / Night",
description:
"Our most luxurious accommodation experience with premium finishes and exclusive comfort.",
image: "assets/images/premium room.jpg",
details: "premium-room.html",
book:
"https://wa.me/2349169882866?text=Hi%20I%20want%20to%20book%20the%20Premium%20Room"
}

];

let currentRoom = 3;

function updateRoom(){

const img = document.getElementById("sliderImage");

img.classList.add("fade");

setTimeout(() => {

document.getElementById("sliderTitle").textContent =
rooms[currentRoom].title;

document.getElementById("sliderPrice").textContent =
rooms[currentRoom].price;

document.getElementById("sliderDescription").textContent =
rooms[currentRoom].description;

document.getElementById("sliderImage").src =
rooms[currentRoom].image;

document.getElementById("sliderDetails").href =
rooms[currentRoom].details;

document.getElementById("sliderBook").href =
rooms[currentRoom].book;

img.classList.remove("fade");

}, 250);

}

function nextRoom(){

currentRoom++;

if(currentRoom >= rooms.length){
currentRoom = 0;
}

updateRoom();

}

function previousRoom(){

currentRoom--;

if(currentRoom < 0){
currentRoom = rooms.length - 1;
}

updateRoom();

}
