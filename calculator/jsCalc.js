//ignore browser back function
window.onkeydown = function() {
    var key = event.keyCode || event.charCode;
    if( key == 8 || key == 46 ){
        return false;
    }
};

var assert = function (funcName, btn, value){
	if (value === funcName(btn)){
		console.log("this assert is correct");
	}
	console.log("this is not working");
}

$(document).ready(function(){

	var keys = document.querySelectorAll('#container span');
	var operators = ['+','-','*','/'];
	var decimal = true;
	//if decimal is true: can add decimal to number
	var calcDisplay = document.querySelector('.inputbox');
	var lastChar;
	var keyCommands = {
		'C': 'C',
		'shift+c': 'C',
		'c': 'C',
		'del':'C',
		'backspace':'C',
		'enter':'=',
		'=':'=',
		'shift+x':'*',
		'x':'*',
		'X':'*',
		'*':'*',
		'÷':'/',
		'/':'/',
		'-':'-',
		'+':'+',
		'p':'+',
		'0':'0',
		'1':'1',
		'2':'2',
		'3':'3',
		'4':'4',
		'5':'5',
		'6':'6',
		'7':'7',
		'8':'8',
		'9':'9',
		'.':'.'
	};

	var bindKey = function (keyPress, command) {
		var $selected = $("[button-data='" + command + "']");
		Mousetrap.bind(keyPress, function(e) {
			$selected.removeClass("active");
			$selected.addClass("active");
		});
		Mousetrap.bind(keyPress, function(e) {
			$selected.removeClass("active");
			inputHandler(command);
		}, 'keyup');
	}

	for(var key in keyCommands) {
		bindKey(key, keyCommands[key]);
	}

	for(var i=0; i < keys.length; i++){
		keys[i].onclick = function(e) {
			var btnVal = this.innerHTML;
			if (btnVal === '÷'){
				btnVal ='/';
			}
			inputHandler(btnVal);
			e.preventDefault();
		}
	}

	var inputHandler = function (btnVal){
		updateDisplay(evaluate(btnVal, calcDisplay));
	}

	var isOperator = function (btn){
		return (operators.indexOf(btn) > -1) ? true : false;
	}

	var updateDisplay = function (newInput) {
		if (newInput !== calcDisplay.innerHTML) {
			calcDisplay.innerHTML = newInput;
			$(".inputbox").removeClass("cleared-text");
			$(".inputbox.starting-text").removeClass("starting-text");
			if(calcDisplay.innerHTML === ''){
				$(".inputbox").addClass("cleared-text");
			}
		}
	}

	var evaluate = function (btn, inputVal){
		var eq = inputVal.innerHTML;
		console.log(btn);
		lastChar = eq.slice(-1);
		if (btn === 'C'){
			eq = '';
			decimal = true;
			return eq;
		}
		if (btn === '=') {

			if (lastChar == '.') {
				decimal = true;
			} 
			if (isOperator(lastChar)){
				eq = eq.replace(/.$/,'');
			}
			if (eq) {
				return eval(eq);
			}
			else return eq;
		}
		if (btn === '.') {
			if (decimal) {
				decimal = false;
				if (eq === '' || isOperator(lastChar)) {
					return eq += '0.';
				} else {
					return eq += btn;
				}
			}
			else return eq;
		} 
		if (isOperator(btn)){
			decimal = true;
			if (btn === '-' && eq === ''){
				return eq += btn;
			} 
			if (!(isOperator(lastChar)) && eq !== ''){
				return eq += btn;
			}
			if (isOperator(lastChar)){
				eq = eq.replace(/.$/,'');
				return eq+btn;
			}
			if (lastChar === '.'){
				return eq + '0' + btn;
			}
			else return eq;
		}
		else {
			return eq += btn;
		}
	}
});