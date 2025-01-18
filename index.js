// After linking the index.js file:-
// 1. we will create a handleClick function that does something when the drum buttons gets clicked.
    // In order to do that we first need to select the button and put eventListener to it so that it calls the function.
    // Lets select the first button and try it out:-
    // We are not using parenthese with the name handleClick in event listener because we are going to call it later when we will click the button.
    // If we put parenthesis with the function name so it will be directly called when we load out site initially and we do not want that to happen.
    // Instead of putting the function name as second parameter in eventListener you can also add anonymous function where the function will be there directly and no need to put the function or method name.
    // But remember anonymous function do not have the name into it, its a function call without name.

// document.querySelector("button").addEventListener("click", handleClick);

// or 

// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked");
// })

// Now lets do this for all the buttons :-

for(let i=0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// function handleClick() {
    // alert("I got clicked");
    // Lets play the sound of drum :-
    // let audio = new Audio("./sounds/crash.mp3");
    // audio.play();
// }

// Now lets implement the different sounds on button click for different instruments in drum kit :-
// To do that we need to know which button is pressed to play the right sound according to different instrument's button,
// We just need to know which button triggered the event, at the moent we have attached a listener to our button and when user clicks on the button the listener gets trigerred, and the function that was linked to the event listener gets called.
// Now we can figure out the identity of the button by using this (bcz button has a different character linked to it as class) is basically the identity of the button that triggered the event listener. 

// function handleClick() {
//     // console.log(this);
//     // we can also change the color of text using this :-
//     // this.style.color = "white";

//     // Lets put the switch condition to specify the button click based on its different characters and play particular sound:-
//     let buttonInnerHHTML = this.innerHTML;
//     switch (buttonInnerHHTML) {
//         case "w":
//             let tom1 = new Audio("./sounds/tom-1.mp3");
//             tom1.play();
//             break;
//         case "a":
//             let tom2 = new Audio("./sounds/tom-2.mp3");
//             tom2.play();
//             break;
//         case "s":
//             let tom3 = new Audio("./sounds/tom-3.mp3");
//             tom3.play();
//             break;
//         case "d":
//             let tom4 = new Audio("./sounds/tom-4.mp3");
//             tom4.play();
//             break;
//         case "j":
//             let snare = new Audio("./sounds/snare.mp3");
//             snare.play();
//             break;
//         case "k":
//             let crash = new Audio("./sounds/crash.mp3");
//             crash.play();
//             break;
//         case "l":
//             let kick = new Audio("./sounds/kick-bass.mp3");
//             kick.play();
//             break;
    
//         default: console.log(buttonInnerHHTML);   
//     }
// }


// Detecting button press :-
function handleClick() {

   let buttonInnerHTML = this.innerHTML;
    
   makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
}

// Now lets see how we can use keyboard to press these buttons and play sounds:- 
// Lets see how to use keyboard events:-

// If we want our website to not just detect button presses but also to detect keyboard key presses to activate the relevant drum,
// say if i press "w" key, then it should activate this w button drum, and if i click j then it should activate j drum.
// How exactly do we do that ?
// Now instead of adding eventListener to listen for clicks, we can listen to a keydown event instead.

// So we would write something like :-

// addEventListener("keydown",function() {
//     this.alert("Key was pressed!");
// } )

// But the proble is, "What exactly do we add this event listener to, right ?"
// Because previously we added out event listener to all of the buttons, so that when the buttons get pressed then the event listener gets triggered.
// But in this case,  we're kind of waiting for the keyboard keys, so how do we add an event listener to the keyboard ?
// Well you don't have to wait for key press, 
// You can add an event listener to the entire document, so that the entire web page starts listening for keyboard strokes:-

// document.addEventListener("keydown", function() {
//     alert("key got clicked!");
// })

// Right now any of the key gets clicked on the keyboard, we would see this alert Key got clicked!.
// Now, next problem is how do we figure out which key was pressed ?
// Now, remember how we said that when we add an event listener to an element then once the event happens the element will trigger the function that's in the second parameter.
// So in this case when the keydown is detected it will trigger the function that tells the browser to show an alert.
// Now when function gets triggered, there's also the optiuon pass in a parameter and we can call that parameter an event or e,
// but essentially what it allows us to do is it lets us tap into the event that triggered the event listener and this event provides a lot of information of key pressed, also which key is pressed.
// You can log this event and check the information provided into this event.

// So you can use that event information telling which key is pressed to make the keyboard keys work when clicked for particular drum :-


// Detecting keyboard keys press :-
document.addEventListener("keydown", function(event) {
    // console.log(event);
    
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default: console.log();   
    }
}

// We want buttons to flick both when the button gets pressed and when the keyboard key gets pressed :-
function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);    

}