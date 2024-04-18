const userInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const resultDiv = document.querySelector("#result");

function checkForPalindrome(input) {
    const originalInput = input;

    if (input === "") {
        alert("Please input a value");
        return
    }

    resultDiv.replaceChildren();

    const inputLowerCase = input.toLowerCase();
    const inputCleaned = inputLowerCase.replace(/[^A-Za-z0-9]/gi, "");
    const reversedInputCleaned = inputCleaned.split("").reverse().join("");

    if(reversedInputCleaned === inputCleaned) {
        resultDiv.innerHTML = `
        <p><strong>${originalInput}</strong> is a palindrome.</p>
        `;
        resultDiv.style.display = "block";
    } else {
        resultDiv.innerHTML = `
        <p><strong>${originalInput}</strong> is not a palindrome.</p>
        `;
        resultDiv.style.display = "block";
    }
    console.log(inputCleaned, reversedInputCleaned);
    userInput.value = "";
}

checkButton.addEventListener('click', function () {
    checkForPalindrome(userInput.value);
});

userInput.addEventListener('keypress', function(event) {
    if(event.key === "Enter") {
        checkButton.click();
    }
})