


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const voterInput = $("input#voter").val();
    const voterAge = parseInt($("input#age").val());
    //const dob = $("#born").val();
    //console.log(dob);
    //const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
    //console.log(voterAge);


    $(".hide").hide();
    $(".voter").text(voterInput);
    $(".younger").text(voterInput);

    if (voterAge >= 18) {
      $('#vote').show();
    } else {
      $('#too-young').show();
    }



    event.preventDefault();
  });
});

