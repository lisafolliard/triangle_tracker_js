var triangleTracker = function(a, b, c) {
  if ( ((a + b) < c) || ((a + c) < b) || ((c + b) < a) ){
    return false;
  } else if ((a === b) && (b === c)) {
    return "equilateral";
  } else if ((a === b || b === c || c === a)) {
    return "isosceles";
  } else {
    return true;
  }
};


$(document).ready(function() {
  $("form#triangle_tracker").submit(function(event) {
    var a = parseInt($("input#side_a").val());
    var b = parseInt($("input#side_b").val());
    var c = parseInt($("input#side_c").val());
    var result = triangleTracker(a ,b ,c);

    $(".type").text(result);

    $("#result").show();
      event.preventDefault();
  });
});
