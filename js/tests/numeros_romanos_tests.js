describe("convert to roman numerals", function() {
 
    let _sut;

    beforeEach(function() {
        _sut = new NumberConversor();        
    });

    it("1 must return I", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(1);

        // ASSERT
        expect(actualRomanNumber).toBe('I');
    });

    it("2 must return II", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(2);

        // ASSERT
        expect(actualRomanNumber).toBe('II');
    });

    it("3 must return III", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(3);

        // ASSERT
        expect(actualRomanNumber).toBe('III');
    });    

    it("5 must return V", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(5);

        // ASSERT
        expect(actualRomanNumber).toBe('V');
    });

    it("4 must return IV", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(4);

        // ASSERT
        expect(actualRomanNumber).toBe('IV');
    }); 

    it("6 must return VI", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(6);

        // ASSERT
        expect(actualRomanNumber).toBe('VI');
    }); 

    it("10 must return X", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(10);

        // ASSERT
        expect(actualRomanNumber).toBe('X');
    });  

    it("12 must return XII", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(12);

        // ASSERT
        expect(actualRomanNumber).toBe('XII');
    }); 

    it("14 must return XIV", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(14);

        // ASSERT
        expect(actualRomanNumber).toBe('XIV');
    });

    it("15 must return XV", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(15);

        // ASSERT
        expect(actualRomanNumber).toBe('XV');
    }); 

    it("18 must return XVIII", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(18);

        // ASSERT
        expect(actualRomanNumber).toBe('XVIII');
    }); 

    it("20 must return XX", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(20);

        // ASSERT
        expect(actualRomanNumber).toBe('XX');
    }); 

    it("22 must return XXII", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(22);

        // ASSERT
        expect(actualRomanNumber).toBe('XXII');
    }); 

    it("24 must return XXIV", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(24);

        // ASSERT
        expect(actualRomanNumber).toBe('XXIV');
    }); 

    it("25 must return XXV", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(25);

        // ASSERT
        expect(actualRomanNumber).toBe('XXV');
    }); 

    it("27 must return XXVII", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(27);

        // ASSERT
        expect(actualRomanNumber).toBe('XXVII');
    });

    it("29 must return XXIX", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(29);

        // ASSERT
        expect(actualRomanNumber).toBe('XXIX');
    }); 

    it("30 must return XXX", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(30);

        // ASSERT
        expect(actualRomanNumber).toBe('XXX');
    });  

    it("40 must return XL", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(40);

        // ASSERT
        expect(actualRomanNumber).toBe('XL');
    });

    it("50 must return L", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(50);

        // ASSERT
        expect(actualRomanNumber).toBe('L');
    }); 

    it("53 must return LIII", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(53);

        // ASSERT
        expect(actualRomanNumber).toBe('LIII');
    }); 

    it("59 must return LIX", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(59);

        // ASSERT
        expect(actualRomanNumber).toBe('LIX');
    });

    it("60 must return LX", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(60);

        // ASSERT
        expect(actualRomanNumber).toBe('LX');
    });  

    it("70 must return LXX", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(70);

        // ASSERT
        expect(actualRomanNumber).toBe('LXX');
    });

    it("74 must return LXXIV", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(74);

        // ASSERT
        expect(actualRomanNumber).toBe('LXXIV');
    }); 

    it("89 must return LXXXIX", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(89);

        // ASSERT
        expect(actualRomanNumber).toBe('LXXXIX');
    }); 

    it("100 must return C", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(100);

        // ASSERT
        expect(actualRomanNumber).toBe('C');
    });       

    it("90 must return XC", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(90);

        // ASSERT
        expect(actualRomanNumber).toBe('XC');
    }); 

    it("434 must return CDXXXIV", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(434);

        // ASSERT
        expect(actualRomanNumber).toBe('CDXXXIV');
    }); 

    it("826 must return DCCCXXVI", function() {
        // ARRANGE

        // ACT
        let actualRomanNumber = _sut.toRoman(826);

        // ASSERT
        expect(actualRomanNumber).toBe('DCCCXXVI');
    });                                    
 
});