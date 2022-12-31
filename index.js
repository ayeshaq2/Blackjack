
let cards = [];

let sum = 0
let hasBJ = false; 
let isAlive= false; 

let message = " ";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el"); 
let cardsEl = document.querySelector('#cards-el'); 



function getRandom(){
    let myNumber= Math.floor(Math.random()*13) + 1; //takes the lower value of 0.0000-12.999

    if (myNumber===1){
        return 11; 
    } else if(myNumber>=11){
        return 10; 
    }else{
        return myNumber; 
    }
    
}

function startGame(){
    isAlive= true; 
    let firstCard= getRandom();
    let secondCard= getRandom();
    cards = [firstCard,secondCard];
    sum= firstCard+secondCard; 
    renderGame(); 

}

function renderGame(){
    
    if(sum < 21){
        message = "Do you want a new card?"; 
        //console.log("Do you want a new card?")
    
    } else if(sum === 21)
    {
        message= "Congratulations, you won!"; 
        hasBJ= true; 
    
    } else {
        message= "Sorry, you lost :("; 
        isAlive=false; 
    }

    cardsEl.textContent = "Cards: "; 
    for(i=0; i<cards.length; i++){
        cardsEl.textContent +=  cards[i] + " ," ; 

    }
    sumEl.textContent = "Sum: " + sum; 

    messageEl.textContent = message; 


}

function newCard(){
    if(isAlive==true && sum != 21){
        let cardVar = getRandom();
        sum += cardVar;
        cards.push(cardVar);

        renderGame(); //because the value of sum will change after the newCard function
    } else {
        messageEl.textContent = "You can't take more cards"; 
    }

    

}





