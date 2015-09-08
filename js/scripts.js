var triangleTracker = function(a, b, c) {
  if ( ((a + b) < c) || ((a + c) < b) || ((c + b) < a) ){
    return false;
  } else if ((a === b) && (b === c)) {
    return "equilateral";
  } else {
    return true;
  }


};
