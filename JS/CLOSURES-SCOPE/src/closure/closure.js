
function greeting() {
    let username = 'Xavier';

    function displayUserName() {
        return `Hello ${username}`;
    }
    return displayUserName;
}

const minisaludo = greeting();
console.log(minisaludo);
console.log(minisaludo());