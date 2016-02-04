// function checkTest() {
//   var count = 0;
//   if ($("input:radio[name=question1]:checked").val() == "hot") {
//     count = count + 1;
//   } if ($("input:radio[name=question1]:checked").val() == "cold") {
//     count = count + 10;
//   } if ($("input:radio[name=question2]:checked").val() == "yes") {
//     count = count + 1;
//   } if ($("input:radio[name=question2]:checked").val() == "no") {
//     count = count + 1;
//   } if ($("input:radio[name=question3]:checked").val() == "maimed") {
//     count = count + 1;
//   } if ($("input:radio[name=question3]:checked").val() == "dead") {
//     count = count + 2;
//   } if ($("input:radio[name=question3]:checked").val() == "safe") {
//     count = count +0;
//   }
//
//   if (count = 2) {
//     $("#answerHotSafe").show();
//   } else if (count = 3) {
//     $("#answerMaimedHot").show();
//   } else if (count = 4) {
//     $("#answerDeadHot").show();
//   } else if (count = 12) {
//     $("#answerLotCold").show();
//   } else if (count = 13) {
//     $("#answerMaimedCold").show();
//   } else if (count = 14) {
//     $("#answerDeadCold").show();
//   }
//
//   }



$(document).ready(function() {
  $("form#test").submit(function(event) {
    event.preventDefault();

  var question1 = $("input:radio[name=question1]:checked").val();
  console.log(question1)
  var question2 = $('input:radio[name=question2]:checked').val();
  console.log(question2)
  var question3 = $('input:radio[name=question3]:checked').val();
  console.log(question3)

 var count =0;

  if ($("input:radio[name=question1]:checked").val() == "hot") {
    count = count + 1;
  } if ($("input:radio[name=question1]:checked").val() == "cold") {
    count = count + 10;
  } if ($("input:radio[name=question2]:checked").val() == "yes") {
    count = count + 1;
  } if ($("input:radio[name=question2]:checked").val() == "no") {
    count = count + 1;
  } if ($("input:radio[name=question3]:checked").val() == "maimed") {
    count = count + 2;
  } if ($("input:radio[name=question3]:checked").val() == "dead") {
    count = count + 3;
  } if ($("input:radio[name=question3]:checked").val() == "safe") {
    count = count +0;
  }

  if (count === 2) {
    $("#answerHotSafe").show();
  } else if (count === 4) {
    $("#answerMaimedHot").show();
  } else if (count === 5) {
    $("#answerDeadHot").show();
  } else if (count === 11) {
    $("#answerLotCold").show();
  } else if (count === 13) {
    $("#answerMaimedCold").show();
  } else if (count === 14) {
    $("#answerDeadCold").show();
  }

});


});



//
// function checkTest() {
//   var count = 0;
//   if ($("input:radio[name=question1]:checked").val() == "hot") {
//     count = count + 1;
//   } if ($("input:radio[name=question1]:checked").val() == "cold") {
//     count = count + 10;
//   } if ($("input:radio[name=question2]:checked").val() == "yes") {
//     count = count + 1;
//   } if ($("input:radio[name=question2]:checked").val() == "no") {
//     count = count + 1;
//   } if ($("input:radio[name=question3]:checked").val() == "maimed") {
//     count = count + 1;
//   } if ($("input:radio[name=question3]:checked").val() == "dead") {
//     count = count + 2;
//   } if ($("input:radio[name=question3]:checked").val() == "safe") {
//     count = count +0;
//   }
//
//   if (count = 2) {
//     $("#answerHotSafe").show();
//   } else if (count = 3) {
//     $("#answerMaimedHot").show();
//   } else if (count = 4) {
//     $("#answerDeadHot").show();
//   } else if (count = 12) {
//     $("#answerLotCold").show();
//   } else if (count = 13) {
//     $("#answerMaimedCold").show();
//   } else if (count = 14) {
//     $("#answerDeadCold").show();
//   }
//
//   }
//
// $(document).ready(function() {
//   $("form#questionsForm").submit(function(event) {
//     console.log(question1)
//     event.preventDefault();
//
//   var question1 = $("input:radio[name=question1]:checked").val();
//   var question2 = $('input:radio[name=question2]:checked').val();
//   var question3 = $('input:radio[name=question3]:checked').val();
//   });
//
//
//
//
//
//
//   });
