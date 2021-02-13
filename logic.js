let titleOne = ["Light","Dark","Great","Legendary","Flameable","Evil","Steady","Big","Small","Famous","",];

let titleTwo = ["Bringer","Stallion","Charmer","",];

let firstnameOne = ["Grex","Exs","Wil","Lma","Sal","Kin","Cho","Tree","Majo","Em","Il","Orb","Ban",];

let firstnameTwo =["grex","exs","wil","lma","sal","kin","cho","tree","majo","em","il","orb","ban",];

let lastnameOne = ["Hex","Smith","",];

let lastnameTwo = ["hex","Smith","",];

function getTitle(){
    const randomtitleOne = titleOne[Math.floor(Math.random()* titleOne.length)];
    const randomtitleTwo = titleTwo[Math.floor(Math.random()* titleTwo.length)];
    const title = randomtitleOne + randomtitleTwo
    document.getElementById("title").innerText = title
}

function getFirstName(){
    const randomfirstnameOne = firstnameOne[Math.floor(Math.random()* firstnameOne.length)];
    const randomfirstnameTwo = firstnameTwo[Math.floor(Math.random()* firstnameTwo.length)];
    
    const firstname = randomfirstnameOne + randomfirstnameTwo
    document.getElementById("firstname").innerText = firstname
    
}
function getLastName(){
    const randomlastnameOne = lastnameOne[Math.floor(Math.random()* lastnameOne.length)];
    const randomlastnameTwo = lastnameTwo[Math.floor(Math.random()* lastnameTwo.length)];
    
    const lastname = randomlastnameOne + randomlastnameTwo
    document.getElementById("lastname").innerText = lastname
}


document.getElementById("generate").addEventListener("click", getName)

function getName(){
    getTitle()
    getFirstName()
    getLastName()
}