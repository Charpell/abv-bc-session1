function add(a, b){
	return a + b;
}

describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for 2 + 4 = 6", function() {
        console.log("Bro how far, did the test fail or pass?");
        expect(add(2,4)).toBe(10);
    });
});