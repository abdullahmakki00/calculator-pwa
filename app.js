function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Enter valid numbers!";
        return;
    }

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            if (num2 === 0) {
                document.getElementById("result").innerText = "Cannot divide by zero!";
                return;
            }
            result = num1 / num2;
            break;
    }
    document.getElementById("result").innerText = `Result: ${result}`;
}
