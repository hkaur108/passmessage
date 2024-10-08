const displayMessage=document.querySelector('#displayMessage');
const inputMessage= document.querySelector('#inputMessage');
const clear= document.querySelector('#clear');
const send=document.querySelector('#send');
const message= document.createElement("div");
const container= document.querySelector(".container-fluid");
const start= document.querySelector("#start");
const email= document.querySelector("#email");
const password= document.querySelector('#password')


//first click event
const deliverMessage=()=>{
    let innerInput= inputMessage.value;
    inputMessage.value="";
    displayMessage.value=innerInput;
    container.insertBefore(message,start);
    message.innerHTML="The message has been successfully delivered! 👍"
    message.style.color="white";
    
}


send.addEventListener('click',deliverMessage)

//second click event

const clearMessage=()=>{
    inputMessage.value="";
    displayMessage.value="";
    message.innerHTML="";
}

clear.addEventListener('click',clearMessage)

