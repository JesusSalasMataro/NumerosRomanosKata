function NumberConversor() {
	this.ToRoman = function(number) {
		var romanNumber = '';

		romanNumber += _calculateHundreds(number);
		romanNumber += _calculateTens(number);
		romanNumber += _calculateUnits(number);
			
		return romanNumber;
	};

	var _calculateUnits = function(number) {
		var romanNumber = _calculateUnitFigure(number);
		return romanNumber;
	};

	var _calculateTens = function(number) {
		number = Math.floor(number / 10);
		var romanNumber = _calculateTenFigure(number);
		return romanNumber;
	};	

	var _calculateHundreds = function(number) {
		number = Math.floor(number / 100);
		var romanNumber = _calculateHundredFigure(number);
		return romanNumber;		
	}	

	var _odd = function(number) {
		return number % 2 > 0; 
	};

	var _calculateUnitFigure = function(number) {		
		var romanNumber = _calculateFigure(number, 'IX', 'IV', 'V', 'I');
		return romanNumber;
	};

	var _calculateTenFigure = function(number) {
		var romanNumber = _calculateFigure(number, 'XC', 'XL', 'L', 'X');
		return romanNumber;
	};

	var _calculateHundredFigure = function(number) {
		var romanNumber = _calculateFigure(number, 'CM', 'CD', 'D', 'C');
		return romanNumber;
	};		

	var _calculateFigure = function(number, nineModuleCase, fourModuleCase, oddFiveDivisonCase, 
		repeatedLettersCase) {

		var fiveDivision = Math.floor(number / 5);
		var fiveDivisionModule = number % 5;
		var tenDivisionModule = number % 10;		
		var romanNumber = '';

		if (tenDivisionModule == 9) {
			romanNumber = nineModuleCase;
		}
		else if (fiveDivisionModule == 4) {
			romanNumber = fourModuleCase;
		}
		else if (_odd(fiveDivision)) {
			romanNumber = oddFiveDivisonCase;
		}
		
		if (fiveDivisionModule < 4) {
			for (var i = 0; i < fiveDivisionModule; i++) {
				romanNumber += repeatedLettersCase;
			}		
		}

		return romanNumber;		
	};

};






