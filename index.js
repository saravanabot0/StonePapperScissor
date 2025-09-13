let leftIcon = document.getElementById("leftHand"),
rightIcon = document.getElementById("rightHand"),
resultTxt = document.getElementById("wishTxt");

function handleSelect(a) {
    let randomNumber = Math.floor(Math.random()*3+1);
    let b;

    if(randomNumber === 1){
        rightIcon.innerText = "✊";
        b = "sto";
    } else if(randomNumber === 2) {
        rightIcon.innerText = "🖐️";
        b="pap";
    } else {
        rightIcon.innerText = "✌️";
        b="scr";
    }

    if(a === 'sto'){
        leftIcon.innerText = "✊"
        rightIcon.style = "animation-name : rHand1"
        leftIcon.style = "animation-name : lHand1"
    } else if(a === "pap") {
        leftIcon.innerText = "🖐️"
        rightIcon.style = "animation-name : rHand2"
        leftIcon.style = "animation-name : lHand2"
    } else {
        leftIcon.innerText = "✌️"
        rightIcon.style = "animation-name : rHand3"
        leftIcon.style = "animation-name : lHand3"
    }

    if(a === b) {
        console.log("Draw");
        resultTxt.innerText = "Draw";
        resultTxt.style = "animation-name:draw;background-color: rgb(253, 207, 0);border: 5px solid rgb(226, 195, 57);"
    } else if(a==="scr" && b !== "sto") {
        resultTxt.innerText = "Won!";
        console.log("scr won");
        resultTxt.style = "animation-name:win1;background-color:seagreen;border: 5px solid rgb(69, 205, 128);color: white;"
    } else if(a === "sto" && b !== "pap"){
        resultTxt.innerText = "Won!";
        console.log("sto won");
        resultTxt.style = "animation-name:win2;background-color:seagreen;border: 5px solid rgb(69, 205, 128);color: white;"
    } else if(a === "pap" && b!== "scr") {
        resultTxt.innerText = "Won!";
        console.log("pap won");
        resultTxt.style = "animation-name:win3;background-color:seagreen;border: 5px solid rgb(69, 205, 128);color: white;"
    } else {
        resultTxt.innerText = "Lost!";
        console.log("Lost");
        resultTxt.style = "animation-name:lost;background-color: crimson;border: 5px solid rgb(250, 61, 99);color: white;"
    }

    console.log(a, b)
    console.log("--------------");
}
