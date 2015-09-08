 describe('triangleTracker',function(){
   it("returns false if it is not a triangle",function() {
     expect(triangleTracker(5,5,15)).to.equal(false);
   });

   it("returns true if it is  a triangle", function() {
     expect(triangleTracker(7,5,12)).to.equal(true);
   });

   it("returns equilateral if all the sides are the same size", function() {
     expect(triangleTracker(5,5,5)).to.equal("equilateral");
   });

   it("returns isosceles if two sides are equal", function() {
     expect(triangleTracker(5,5,10)).to.equal("isosceles");
   });

 });
