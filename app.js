function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    
    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : "Error"; break;
        case '%': result = num1 % num2; break;
        case '^': result = Math.pow(num1, num2); break;
        case 'sqrt': result = Math.sqrt(num1); break;
        case '!': result = factorial(num1); break;
        default: result = "Invalid";
    }

    document.getElementById("result").innerText = `Result: ${result}`;
    addToHistory(`${num1} ${operation} ${num2} = ${result}`);
}

function factorial(n) {
    if (n < 0) return "Error";
    return n === 0 ? 1 : n * factorial(n - 1);
}

function addToHistory(entry) {
    let historyList = document.getElementById("history-list");
    let listItem = document.createElement("li");
    listItem.innerText = entry;
    historyList.appendChild(listItem);
}
