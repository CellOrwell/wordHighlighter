const form = document.getElementById("inputForm");
const outPara = document.getElementById("output");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.getElementById("string").value;
    let output = "";

    Array.from(input).forEach((letter) => {
        console.log(`${letter} is ${parseInt("0")}`);
        if(!isNaN(parseInt(letter))) {
            output += `<span id='number'>${letter}</span>`;
            return;
        }

        output += `<span id='letter'>${letter}</span>`;
    });

    outPara.innerHTML = output;

})