class NumberConversor {
	toRoman(number) {
		let romanNumber = '';

		romanNumber += this._calculateHundreds(number);
		romanNumber += this._calculateTens(number);
		romanNumber += this._calculateUnits(number);
			
		return romanNumber;
	};

	_calculateUnits(number) {
		let romanNumber = this._calculateUnitFigure(number);
		return romanNumber;
	};

	_calculateTens(number) {
		number = Math.floor(number / 10);
		let romanNumber = this._calculateTenFigure(number);
		return romanNumber;
	};	

	_calculateHundreds(number) {
		number = Math.floor(number / 100);
		let romanNumber = this._calculateHundredFigure(number);
		return romanNumber;		
	}	

	_odd(number) {
		return number % 2 > 0; 
	};

	_calculateUnitFigure(number) {		
		let romanNumber = this._calculateFigure(number, 'IX', 'IV', 'V', 'I');
		return romanNumber;
	};

	_calculateTenFigure(number) {
		let romanNumber = this._calculateFigure(number, 'XC', 'XL', 'L', 'X');
		return romanNumber;
	};

	_calculateHundredFigure(number) {
		let romanNumber = this._calculateFigure(number, 'CM', 'CD', 'D', 'C');
		return romanNumber;
	};		

	_calculateFigure(number, nineModuleCase, fourModuleCase, oddFiveDivisonCase, 
		repeatedLettersCase) {

		let fiveDivision = Math.floor(number / 5);
		let fiveDivisionModule = number % 5;
		let tenDivisionModule = number % 10;		
		let romanNumber = '';

		if (tenDivisionModule == 9) {
			romanNumber = nineModuleCase;
		}
		else if (fiveDivisionModule == 4) {
			romanNumber = fourModuleCase;
		}
		else if (this._odd(fiveDivision)) {
			romanNumber = oddFiveDivisonCase;
		}
		
		if (fiveDivisionModule < 4) {
			for (let i = 0; i < fiveDivisionModule; i++) {
				romanNumber += repeatedLettersCase;
			}		
		}

		return romanNumber;		
	};

}






