//Creating variables to do arithmetic operations , desired operation, result, and the continue operation option to do another operation for a calculator
let num1, num2, desiredOperation, continueOperation = "y", result;

//Creating an array to store the calculation history
const calculationHistory = [];

//Function to perform addition
function add(num1, num2) {
    let sum;
    return sum = num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
    let difference;
    return difference = num1 - num2;
}

//Function to perform multiplication
function multiply(num1, num2) {
    let product;
    return product = num1 * num2;
}

//function to perform division
function divide(num1, num2) {
    let quotient;
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return quotient = num1 / num2;
}

//Function to store calculation data
function storeHistory() {
    if (desiredOperation === "1") {
        let newHistoryObject = { //This is the object to store the operation
        operation: "Addition",
        "first number": num1,
        "second number": num2,
        operator: "+",
        result: result
        }
        return calculationHistory.push(newHistoryObject); //Here we store the object in the calculationHistoryarray
    }

    else if (desiredOperation === "2") {
        let newHistoryObject = { //This is the object to store the operation
        operation: "Subtraction",
        "first number": num1,
        "second number": num2,
        operator: "-",
        result: result
        }
        return calculationHistory.push(newHistoryObject); //Here we store the object in the calculationHistoryarray
    }

    else if (desiredOperation === "3") {
        let newHistoryObject = { //This is the object to store the operation
        operation: "Multiplication",
        "first number": num1,
        "second number": num2,
        operator: "*",
        result: result
        }
        return calculationHistory.push(newHistoryObject); //Here we store the object in the calculationHistoryarray
    }
    else if (desiredOperation === "4") {
        let newHistoryObject = { //This is the object to store the operation
        operation: "Division",
        "first number": num1,
        "second number": num2,
        operator: "/",
        result: result
        }
        return calculationHistory.push(newHistoryObject); //Here we store the object in the calculationHistoryarray
    }
}

//Function to display the history
function displayHistory() {
    if (calculationHistory.length === 0) {
        alert("You have no stored calculations yet") //This message is shown if there's nothing stored in the calculationHistory array
    }
    else { // This is shown if there are objects in the calculationHistory array
        alert("This is your calculation history: (press enter or click on ok)")
        console.log("This is your calculation history:")
        for(let i = 0; i < calculationHistory.length; i++) { //This for loop lets print all the object values in the array with the proper message
            alert(`The operation number ${i + 1} was ${calculationHistory[i].operation}: ${calculationHistory[i]["first number"]} ${calculationHistory[i].operator} ${calculationHistory[i]["second number"]} = ${calculationHistory[i].result}`)
            console.log(`The operation number ${i + 1} was ${calculationHistory[i].operation}: ${calculationHistory[i]["first number"]} ${calculationHistory[i].operator} ${calculationHistory[i]["second number"]} = ${calculationHistory[i].result}`)
        }
    }
}

//While loop to do multiple operations
while (continueOperation.toLowerCase() === "y") {

    //Ask the user for the desired operation
    desiredOperation = prompt("Please select your desired operation:\nType 1 for Addition\nType 2 for Subtraction\nType 3 for Multiplication\nType 4 for Division\nType 5 to see the calculation history\nType 6 to exit");
    
    //While loop to make sure the user typed a valid option
    while (desiredOperation !== "1" && desiredOperation !== "2" && desiredOperation !== "3" && desiredOperation !== "4" && desiredOperation !== "5" && desiredOperation !== "6") {
        desiredOperation = prompt("You've entered an invalid option. Please try again:\nType 1 for Addition\nType 2 for Subtraction\nType 3 for Multiplication\nType 4 for Division\nType 5 for to see the calculation history\nType 6 to exit the program")
    }
    
    //Doing the addition operation when the desired option is 1
    if (desiredOperation === "1") {

        num1 = Number(prompt("Please type the first number")); //Getting the first number from the user
        while (isNaN(num1)) { //This while loop was created to ensure that the user entered a number
            num1 = Number(prompt("You've entered an invalid option. Please type a number"));
        }

        num2 = Number(prompt("Please type the second number")); //Getting the second number from the user
        while (isNaN(num2)) { //This while loop was created to ensure that the user entered a number
            
            num2 = Number(prompt("You've entered an invalid option. Please type a number"));
        }
        result = add(num1, num2); //Getting the result through the add function
        alert(`The sum of ${num1} + ${num2} = ${result}`); //Showing the result to the user
        storeHistory(); //Storing the calculation data
    }

    //Doing the subtraction operation when the desired option is 2
    else if (desiredOperation === "2") {
         
        num1 = Number(prompt("Please type the first number")); //Getting the first number from the user
        while (isNaN(num1)) { //This while loop was created to ensure that the user entered a number
            num1 = Number(prompt("You've entered an invalid option. Please type a number"));
        }

        num2 = Number(prompt("Please type the second number")); //Getting the second number from the user
        while (isNaN(num2)) { //This while loop was created to ensure that the user entered a number
            
            num2 = Number(prompt("You've entered an invalid option. Please type a number"));
        }
        result = subtract(num1, num2); //Getting the result through the subtract function
        alert(`The difference of ${num1} - ${num2} = ${result}`); //Showing the result to the user
        storeHistory(); //Storing the calculation data
    }

    //Doing the multiplication operation when the desired option is 3
    else if (desiredOperation === "3") {
         
        num1 = Number(prompt("Please type the first number")); //Getting the first number from the user
        while (isNaN(num1)) { //This while loop was created to ensure that the user entered a number
            num1 = Number(prompt("You've entered an invalid option. Please type a number"));
        }

        num2 = Number(prompt("Please type the second number")); //Getting the second number from the user
        while (isNaN(num2)) { //This while loop was created to ensure that the user entered a number
            
            num2 = Number(prompt("You've entered an invalid option. Please type a number"));
        }
        result = multiply(num1, num2); //Getting the result through the multiply function
        alert(`The product of ${num1} * ${num2} = ${result}`); //Showing the result to the user
        storeHistory(); //Storing the calculation data
    }

    //Doing the division operation when the desired option is 4
    else if (desiredOperation === "4") {
         
        num1 = Number(prompt("Please type the first number")); //Getting the first number from the user
        while (isNaN(num1)) { //This while loop was created to ensure that the user entered a number
            num1 = Number(prompt("You've entered an invalid option. Please type a number"));
        }

        num2 = Number(prompt("Please type the second number (it must be different from 0)")); //Getting the second number from the user
        while (isNaN(num2) || num2 === 0) { //This while loop was created to ensure that the user entered a number
            
            num2 = Number(prompt("You've entered an invalid option. Please type a number (it must be different from 0)"));
        }
        result = divide(num1, num2); //Getting the result through the divide function
        alert(`The quotient of ${num1} / ${num2} = ${result}`); //Showing the result to the user
        storeHistory(); //Storing the calculation data
    }

    else if (desiredOperation === "5") {
        displayHistory(); //Displaying the calculation data
    }

    else if (desiredOperation === "6") {
        break;
    }

    //Ask if the user wants do do another operation
    continueOperation = prompt("Would you like to do another operation?\nPlease type y (if yes)\nPlease type n (if no)") //This question stores a new value in the variable option. If it is "y", the user will be asked again to choose an operation. If it is "n", the program will end
    while (continueOperation.toLowerCase() !== "y" && continueOperation.toLowerCase() !== "n") { //This loop is to ensure that the user enter a valid option
        continueOperation = prompt("You've entered an invalid option. Please try again:\nPlease type y (if yes)\nPlease type n (if no)")
    }
}

alert("Thank you for using this program. Good bye!");