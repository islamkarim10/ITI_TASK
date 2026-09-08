// quesstion 1
{
  let num = prompt("Ex 1: Enter a number:");
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

// questioin 2
{
  if (confirm("Ex 2: Do you want to proceed?")) {
    alert("You chose to proceed");
  } else {
    alert("Action canceled.");
  }
}

// question 3

{
  var num = 10;
  num % 2 === 0 ? console.log("hi") : console.log("heloo");
}

// question 4

{
  while (true) {
    let input = prompt("Ex 4: Enter your age (or click Cancel to stop):");
    if (input === null) break; // Exits loop on Cancel

    let age = Number(input);
    if (isNaN(age) || age <= 0) {
      alert("Please enter a valid positive number.");
      continue;
    }

    if (age >= 1 && age <= 10) alert("Child");
    else if (age >= 11 && age <= 18) alert("Teenager");
    else if (age >= 19 && age <= 50) alert("Grown up");
    else if (age > 50) alert("Old");
  }
}

// Question 5
{
  let str = prompt("Ex 5: Enter a string:").toLowerCase();
  let counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let char of str) {
    if (counts.hasOwnProperty(char)) counts[char]++;
  }
  console.log(
    `a=${counts.a}, e=${counts.e}, i=${counts.i}, o=${counts.o}, u=${counts.u}`,
  );
}

// question 6
{
  let time24 = parseInt(prompt("Ex 6: Enter hour (0-23):"));
  let period = time24 >= 12 ? "PM" : "AM";
  let time12 = time24 % 12;
  time12 = time12 === 0 ? 12 : time12;
  alert(`${time12}${period}`);
}

// Question 7
{
  let text = prompt("Ex 7: Enter a string:");
  if (text) {
    let result = text.charAt(0).toUpperCase() + text.slice(1);
    alert(result);
  }
}

// Question 8
{
  let color = prompt("Ex 8: Type your favorite color:");
  if (confirm(`You chose ${color}. Is that correct?`)) {
    alert("Great choice!");
  } else {
    alert("Let's try again.");
  }
}

// Question 9
{
  let pass = "";
  while (pass !== "correctPassword123") {
    pass = prompt("Ex 9: Enter your password (hint: correctPassword123):");
  }
  alert("Access granted!");
}

// question 10
{
  let date1 = new Date("2026-01-01");
  let date2 = new Date("2026-12-31");
  console.log("Ex 10 (Is Date 1 earlier?):", date1 < date2);
}

//question 11

{
  let d1 = new Date("2026-09-01");
  let d2 = new Date("2026-09-10");
  let diffInTime = Math.abs(d2 - d1);
  let diffInDays = diffInTime / (1000 * 60 * 60 * 24);
  console.log(`Ex 11 Difference: ${diffInDays} days`);
}

//question 12
{
  let sum = 0;
  for (let i = 2; i <= 100; i += 2) {
    sum += i;
  }
  console.log("Ex 12 Sum of evens:", sum);
}

//question 13
{
  let str = "Hello World!";
  let extracted = str.substring(6, 11);
  console.log("Ex 13 Extracted:", extracted);
}

// questiion 14
{
  let num = 5.678;
  console.log("Ex 14 Rounded:", num.toFixed(2));
}

//question 15
{
  function checkDivisibility(n) {
    return n % 3 === 0 && n % 5 === 0;
  }
  console.log("Ex 15 Divisibility check (15):", checkDivisibility(15));
}
