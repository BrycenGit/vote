


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const voterInput = $("input#voter").val();


    $(".voter").text(voterInput);
    $(".younger").text(voterInput);

    event.preventDefault();
  });
});