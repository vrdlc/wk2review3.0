$(document).ready(function() {
    debugger;
  var q1 = $('input[name=question1]:checked').val();
  var q2 = $('input[name=question2]:checked').val();
  var q3 = $('input[name=question3]:checked').val();



function checkTest() {
  var count = 0;
  if($("input:radio[name=question1]:checked").val() == "hot") {
    count = count + 1;
  } if ($("input:radio[name=question1]:checked").val() == "cold") {
    count = count + 10;
  } if ($("input:radio[name=question2]:checked").val() == "yes") {
    count = count + 1;
  } if ($("input:radio[name=question2]:checked").val() == "no") {
    count = count + 1;
  } if ($("input:radio[name=question3]:checked").val() == "maimed") {
    count = count + 1;
  } if ($("input:radio[name=question3]:checked").val() == "dead") {
    count = count + 2;
  } if ($("input:radio[name=question3]:checked").val() == "safe") {
    count = count +0;
  }

  if (count = 2) {
    $("#answerHotSafe").show();
  } else if (count = 3) {
    $("#answerMaimedHot").show();
  } else if (count = 4) {
    $("#answerDeadHot").show();
  } else if (count = 12) {
    $("#answerLotCold").show();
  } else if (count = 13) {
    $("#answerMaimedCold").show();
  } else if (count = 14) {
    $("#answerDeadCold").show();
  }

  }

event.preventDefault();
});
