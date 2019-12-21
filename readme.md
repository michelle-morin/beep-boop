# _Beep Boop_

#### _Webpage for outputting a list of numbers and strings replacing select numbers, December 20, 2019_

#### By _**Michelle Morin**_

## Description

This webpage includes a form that collects input of a number from a user, and optionally the user's name. When the user submits the form, the webpage outputs a list of numbers. The list of numbers includes the following exceptions, ordered from least to most important. For numbers in the list that contain a 1, all digits are replaced with "Beep!" For numbers that contain a 2, all digits are replaced with "Boop!" For numbers that contain a 3, all digits are replaced with "I'm sorry, [name]. I'm afraid I can't do that." When the user does not enter their name, the [name] defaults to "Dave". This webpage is an exercise in HTML, CSS, JavaScript, and jQuery. The webpage is styled using Bootstrap and custom CSS.

## Specifications:

_Spec: The program returns a range of numbers from 0 to the users inputted number._
* _Example input: 4_
* _Example output: 0, 1, 2, 3, 4_

_Spec: The program replaces the number 3 with "I'm sorry, Dave. I'm afraid I can't do that."_
* _Example input: 3_
* _Example output: 0, 1, 2, "I'm sorry, Dave. I'm afraid I can't do that."_

_Spec: The program replaces the number 2 with "Boop!"_
* _Example input: 2_
* _Example output: 0, 1, "Boop!"_

_Spec: The program replaces the number 1 with "Beep!"_
* _Example input: 1_
* _Example output: 0, "Beep!"_

_Spec: The program replaces a multi-digit number containing a 3 with "I'm sorry, Dave. I'm afraid I can't do that."
* _Example input: 13_
* _Example output: 0, "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, 10, 11, 12, "I'm sorry, Dave. I'm afraid I can't do that."_

_Spec: The program replaces a multi-digit number containing a 2 with "Boop!"_
* _Example input: 12_
* _Example output: 0, "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!"_

_Spec: The program replaces a multi-digit number containing a 1 with "Beep!"_
* _Example input: 10_
* _Example output: 0, "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, "Beep!"_

## Setup/Installation Requirements

* _First, clone this repository via the following process:_
  1. _Open a command line interface, such as the Terminal._
  2. _Navigate to your computer's desktop using the command "cd desktop"._
  3. _Confirm that you have navigated to the desktop by using the command "pwd"._
  4. _Once the working directory is set to the desktop, enter the command "git clone https://github.com/michelle-morin/beep-boop" in the Terminal to clone this repository to the desktop._
* _The repository should now be cloned to your desktop. To navigate into the beepboop directory in the Terminal, enter the command "cd beepboop"._
* _To access and/or edit the HTML, CSS, and JavaScript that of the webpage, open contents of the repository in Atom using the command "atom ."_
* _Open  index.html in your web browser of choice._

## Technologies Used

_HTML, CSS, JavaScript, jQuery_

### License

Copyright (c) 2019 **_Michelle Morin_**
