let titleOne = ["Light","Dark","Great","Legendary","Flameable","Evil","Steady","Big","Small","Famous","",];

let titleTwo = ["Bringer","Stallion","Charmer","",];

let firstnameOne = ["Grex","Exs","Wil","Lma","Sal","Kin","Cho","Tree","Majo","Em","Il","Orb","Ban","Mander","Xor","Xav","Iar"];

let firstnameTwo =["grex","exs","wil","lma","sal","kin","cho","tree","majo","em","il","orb","ban","mander","xor","xav","iar"];

let lastnameOne = ["Hex","Smith","Mir","Gor","Mark","Till","My","Mill","Or","Stan","Ox","Dur","","",];

let lastnameTwo = ["hex","smith","mir","gor","mark","till","my","mill","or","stan","ox","dur",];

let nicknameOne =["of the","the",];

let nicknameTwo =["northendsea","westernsea","easternsea","southernsea","highsea","deadsea","Gray","Yellow","White","Black","Dark","orphan","farmer","Mayor","Guilds","Warrior","King","Queens","Lady","Gentleman","Jester","Trader",];

let newName = []

function getTitle(){
    const randomtitleOne = titleOne[Math.floor(Math.random()* titleOne.length)];
    const randomtitleTwo = titleTwo[Math.floor(Math.random()* titleTwo.length)];
    const title = randomtitleOne +" "+ randomtitleTwo
    document.getElementById("title").innerText = title
    newName.push(title)
}

function getFirstName(){
    const randomfirstnameOne = firstnameOne[Math.floor(Math.random()* firstnameOne.length)];
    const randomfirstnameTwo = firstnameTwo[Math.floor(Math.random()* firstnameTwo.length)];
    
    const firstname = randomfirstnameOne + randomfirstnameTwo
    document.getElementById("firstname").innerText = firstname
    newName.push(firstname)
}
function getLastName(){
    const randomlastnameOne = lastnameOne[Math.floor(Math.random()* lastnameOne.length)];
    const randomlastnameTwo = lastnameTwo[Math.floor(Math.random()* lastnameTwo.length)];
    
    const lastname = randomlastnameOne + randomlastnameTwo
    document.getElementById("lastname").innerText = lastname
    newName.push(lastname)
}

function getNickName(){
    
    document.getElementById("nickName").innerText = ""
    const randomNickNameOne = nicknameOne[Math.floor(Math.random()* nicknameOne.length)]
    const randomNickNameTwo = nicknameTwo[Math.floor(Math.random()* nicknameTwo.length)]
    
    const nickname = randomNickNameOne +" "+ randomNickNameTwo
    console.log("start")

    if(randomNickNameOne == "of the" ){
        document.getElementById("nickName").innerText = nickname+"s"
        console.log("1")
        newName.push(nickname)
        return
    
    }else{
        document.getElementById("nickName").innerText = nickname+""
        console.log("2")
    }

    newName.push(nickname)
    
}


document.getElementById("generate").addEventListener("click", getChecked)

function getChecked(){
    document.getElementById("saves").innerText ="" 
    let names = document.forms[0];
   
        if(names["fRandom"].checked){
            getTitle()
            getFirstName()
            getLastName()
            getNickName()
        }
        else if (names["withTitle"].checked){
            console.log("With title")
            getTitle()
        
        }
        else if (names["firstName"].checked){
            console.log("firstName")
            getFirstName()
        
        }
        else if (names["lastNames"].checked){
            console.log("lastNames")
            getLastName()
        
        }
        else if (names["nicknames"].checked){
            console.log("nicknames")
            getNickName()
        
        }
        else{
            document.getElementById("saves").innerText ="" 
            document.getElementById("saves").innerText ="There is no input made"   
        }
        
}

function getName(){
    document.getElementById("firstname").innerText = ""
    getFirstName()
}

/* function loopaalphabox(){
    for (let i = 0; i < newName.length; i++) {
        let divBox = newName[i];
        divBox.innerText = JSON.stringify(newName[i]);
        document.getElementById("saves").append(renderNameCard(i))
    }   
} */



/* function pushobj(){
    let saveName = newName
    sessionStorage.setItem("saveName", newName);
    getSavedBeast()
    renderNameCard()
} */

/* function getSavedBeast(){
    let getName = sessionStorage.getItem("saveName", newName);
    document.getElementById("saves").innerText = (getName);
    console.log(getName, newName)
    return



} */

/* function renderNameCard(){
    
    let getName = sessionStorage.getItem("saveName", newName);

    let renderCard = document.createElement("div");
    renderCard.className ="renderCard"

    let infoBox = document.createElement("div")
    infoBox.id = "infoBox"

    let name = document.createElement("p")
    name.style.marginBottom ="3px"
    name.innerText = getName ;
    
    
    infoBox.appendChild(name)
    renderCard.appendChild(infoBox);
    document.getElementById("saves").appendChild(renderCard);
    document.getElementById("saves").innerText = (getName);

    console.log(newName)


    if(newName.length > 12) {
        console.log("not more than 5 names")
        newName.splice(0,3);
    
    }else{
        console.log("enter the else")
    }

    return renderCard
}
 */