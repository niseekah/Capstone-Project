# Creating a Calculator

## Description
Created a Scientific Calculator that includes basic mathematics and trigonometric functions.
Used a queue to loop through numbers and operations.

## High level features / user stories
As a user, I want to either add, subtract, multiply or divide two or more numbers so that I can see the result number.

## Detailed sketches
Each small box that contains a number, math operators, and trignometric function repersents a button.
At the top represents the calculator screen that displays the numbers, math operations and result number.
![A Picture of the Calculator](Calculator.jpg)

## Pseudocode to explain the more complex parts
ADD three or more numbers to do math operations with
I would want to put each number in a queue data structure
Example: 45+23-12
45 -> queue[]
+  -> queue[]
23 -> queue[]
......etc 
queue => [45,"+",23,"-","12"]
result function 
use a for loop to loop through the queue
check to see if the first element is a number and store it into a variable num1
 if the second element is a math operation either add, subtract or divide 
 and if the next element is a number either add, subtract, or divide
 store the results in dig
 
