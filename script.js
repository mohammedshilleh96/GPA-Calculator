// This script calculates the GPA for Birzeit University students
// All the finished courses have a class called "RTN"

/* Global variables */
var grades = [];
var totalCreditHours = 0;
var totalPoints = 0.0;
var gpa;

$(document).ready(function() {
  // Select all the finished courses
  grades = $(".RTN").not(".disabled");

  // Loop over each course to calculate its points and update the global variables
  grades.each(function() {
    var credit = 0; // Credit hours for this course
    var grade = 0; // Grade for this course
    var coursePoints = 0.0; // The points for this course

    credit = $(this)
      .find("td:nth-child(3)")
      .text();
    grade = $(this)
      .find("td:nth-child(5)")
      .text();

    // Calculate course points
    if (grade != "") {
      coursePoints = calculatePoints(parseInt(grade));

      // Update global variables;
      totalCreditHours += parseInt(credit);
      totalPoints += parseInt(credit) * coursePoints;
    }
  });

  // Calculate final GPA
  gpa = (totalPoints / totalCreditHours).toFixed(2);

  // Print result to user
  alert("Hours: " + totalCreditHours + "\n" + "GPA: " + gpa);
  console.log(grades.length);
});

// This function takes the course grade as input and returns the gpa points
function calculatePoints(grade) {
  if (grade >= 97) {
    return 4.0;
  } else if (grade >= 93) {
    return 4.0;
  } else if (grade >= 90) {
    return 3.7;
  } else if (grade >= 87) {
    return 3.3;
  } else if (grade >= 83) {
    return 3.0;
  } else if (grade >= 80) {
    return 2.7;
  } else if (grade >= 77) {
    return 2.3;
  } else if (grade >= 73) {
    return 2.0;
  } else if (grade >= 70) {
    return 1.7;
  } else if (grade >= 67) {
    return 1.3;
  } else if (grade >= 65) {
    return 1.0;
  } else {
    return 0.0;
  }
}
