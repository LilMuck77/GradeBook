$(document).ready(
    function () {
        $("form").submit(calculateGrade);


        function calculateGrade(event) {
            event.preventDefault();
            //find out if you can make ranges in objects otherwise use if else statements


            var pointsEarned = $("#pointsEarned").val();
            pointsEarned = parseFloat(pointsEarned);
            var pointsPossible = $("#pointsPossible").val();
            pointsPossible = parseFloat(pointsPossible);


            //So I tried parsing the strings above in a function inside the object below
            //but I couldnt get it to work.
            //How do you parse a string inside the object that is a number into a number.
            // I commented out the code below. I wanted to parse that with a function.
            var student = {

                //pointsEarned: $("#pointsEarned").val(),


                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                percentage: (pointsEarned/pointsPossible) * 100,

            };
            var fullName= student.firstName + " " + student.lastName;

            $("#output").html(`Student Name: ${fullName} <br>
              Percent on test: ${student.percentage.toFixed()}%`);

            if (student.percentage <60){
                //F Grade
                $("#grade").text("You Flunked!");
            }
            else if (student.percentage <=70){
                //D Grade
                $("#grade").text("You got a D! What are you doing.");
            }
            else if (student.percentage <=80){
                //C Grade
                $("#grade").text("You got a C. Study more.");
            }else if (student.percentage <=90){
                //B Grade
                $("#grade").text("You got a B. Keep up the good work.");
            }
            else if (student.percentage >90){
                //A Grade
                $("#grade").text("You got an A. Awesome job! ");
            }






        }
    });