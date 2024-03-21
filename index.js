function writeCards(namesArray) {
    let thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
  }
  

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
}
  