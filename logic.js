let titleOne = ["Light","Dark","Great","Legendary","Flameable","Evil","Steady","Big","Small","Famous","Sir","friendly","",];

let titleTwo = ["Bringer","Stallion","Charmer","friendly","",];

let firstnameOne = ["Grex","Exs","Wil","Lma","Sal","Kin","Cho","Tree","Majo","Em","Il","Orb","Ban",];

let firstnameTwo =["grex","exs","wil","lma","sal","kin","cho","tree","majo","em","il","orb","ban","",];

let lastnameOne = ["Hex","Smith","Mir","Gor","Mark","Till","My","Mill","Or","Stan","Ox","Dur","",];

let lastnameTwo = ["hex","smith","mir","gor","mark","till","my","mill","or","stan","ox","dur",];

function getTitle(){
    const randomtitleOne = titleOne[Math.floor(Math.random()* titleOne.length)];
    const randomtitleTwo = titleTwo[Math.floor(Math.random()* titleTwo.length)];
    const title = randomtitleOne +" "+ randomtitleTwo
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
    document.getElementById("title").innerText = ""
    document.getElementById("firstname").innerText = ""
    document.getElementById("lastname").innerText = ""
    getTitle()
    getFirstName()
    getLastName()
}
