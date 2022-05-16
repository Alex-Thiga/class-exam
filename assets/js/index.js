/** @format */

function check() {
  var marks = 0;
  var answer1 = document.test.qtn1.value;
  var answer2 = document.test.qtn2.value;
  var answer3 = document.test.qtn3.value;
  var answer4 = document.test.qtn4.value;
  
  if (answer1 == "nairobi") {
    marks++;
  }
  if (answer2 == "wamalwa") {
    marks++;
  }
  if (answer3 == "1963") {
    marks++;
  }
  if (answer4 == "tea") {
    marks++;
  }

  var finalMark = document.getElementById( "finalMark" );
  if ( marks > 3 )
  {
    finalMark.textContent = "You have excellently passed";
  } else if ( marks >= 2 )
  {
    finalMark.textContent = "You have fairly passed";
  } else ( marks < 2 ); {
    finalMark.textContent="You have poorly passed. You need to redo the test"
  }
  
  var test = document.getElementById( 'test' )
  test.style.display="none"
}
