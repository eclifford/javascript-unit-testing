var FizzBuzz = (function() {
  return {
    // configuration (workflow)
    run: function() {
      for(var i = 1; i < 100; i++) {
        this.print(this.calculateFizzBuzz(i));
      }
    },

    // presentation
    print: function(str) {
      console.log(str);
    },

    // calculation
    calculateFizzBuzz: function(num) {
      if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
      } else if (num % 3 === 0) {
        return "Fizz";
      } else if (num % 5 === 0) {
        return "Buzz";
      } else {
        return num.toString();
      }
    }
  };
})();

describe("FizzBuzz", function() {
  it("should return FizzBuzz for numbers that are multiples of 3 and 5", function() {
    // ??
  });
  it("should return Fizz for numbers that are multiples of 3", function() {
    // ??
  });
  it("should return Buzz for numbers that are multiples of 5", function() {
    // ??
  });
});
