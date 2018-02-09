# _Super Galactic Age Calculator_

## Planning

1. Configuration/dependencies
  * npm, gulp, bower
  * defined in gulpfile/package.json
  * npm = lets us run JS from the command licenses
  * gulp = automates development tasks
  * bower = frontend package manager

2. Specs
  * Spec 1: 'should convert a persons age into seconds', 24 years, 7.569e+8 seconds.
  * Spec 2: 'should take inputted date and current date and determine the difference between the two dates', 9/15/1993, 24 years.

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome


#### _An application that calculates the age of a user based on a planet's solar years._

#### By _**Kate Trahan**_

## Description

_This is an application that uses JavaScript to take the age of a carbon based life form and convert that number of years on Earth to the number of solar years on a different planet. The application converts the number of years on Earth to the number of years on Mercury, Venus, Mars, and Jupiter. The application also can determine how many years the user has left to live on each planet based on the life expectancy on Earth. Created 2/9/2018._


### Specs
| Behavior | Input | Output |
| :-------------     | :------------- | :-------------
| **Accepts person's age(earth)**| "24" | "24" |
| **Coverts age into seconds**| "24 years" | "x seconds" |
| **Determines difference between two dates**| "2/9/2018(seconds) - 2/8/2018(seconds)" | "x seconds"|
| **Returns age of a human in Mercury years** |"24 earth years"| "x Mercury years"|
| **Returns age of a human in Venus years** |"24 earth years"|"x Venus years"|
| **Returns age of a human in Mars years** | "24 earth years"| "x Mars years"|
| **Returns age of a human in Jupiter years** | "24 earth years" | "x Jupiter years"|
| **Outputs life expectancy of Earth years**| "72 years"|"72 years"|
| **Converts life expectancy on Earth to life expectancy on Mercury** | "72 years" | "x years" |
| **Converts life expectancy on Earth to life expectancy on Venus** | "72 years" | "x years" |
| **Converts life expectancy on Earth to life expectancy on Mars** | "72 years" | "x years" |
| **Converts life expectancy on Earth to life expectancy on Jupiter** | "72 years" | "x years" |
| **Determine how many years the user has to live based on life expectancy subtracted form current years** | "x years life expected on mars - current year" | "years left to live" |


## Setup/Installation Requirements

* _Clone repository to your machine from GitHub_
* _Open cloned repository in Atom_

## Known Bugs

_No known issues._

## Support and contact details

_If you have any issues or have questions, ideas or concerns please email kathrynceciliatrahan@gmail.com or contribute to the code_

## Technologies Used

* _JavaScript_
* _Atom_
* _Node_
* _Gulp_
* _Bower_
* _Jasmine_
* _Karma_



### License
Copyright (C) 2017 Kate Trahan

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
