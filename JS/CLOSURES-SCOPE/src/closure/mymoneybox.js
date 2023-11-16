// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;

//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);
// moneyBox(5);


function moneyBox() {
    var saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }

    return countCoins;
}


const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(15);
myMoneyBox(30);
const myMoneyBoxXavier = moneyBox();

myMoneyBoxXavier(5);
myMoneyBoxXavier(5);
myMoneyBoxXavier(5);
myMoneyBox(30);