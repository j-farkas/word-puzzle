$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var words = $("#sentence").val().split('');
    var puzzle = words.map(function(word){
      if(["a","e","i","o","u"].includes(word)){
      return "-";
    }else{
      return word;
    }
    });
    puzzle = puzzle.join('');
    $("p").text(puzzle);
    event.preventDefault();
  });
});
