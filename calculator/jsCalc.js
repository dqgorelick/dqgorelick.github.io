var keys = document.querySelectorAll('#container span');
var operators = ['+','-','x','÷'];
var decimal = false;

Mousetrap.bind(['ctrl+s', 'meta+s'], function(e) {});


for(var i=0;i<keys.length; i++){
	keys[i].onclick = function(e){

	var input = document.querySelector('.inputbox');
	var inputVal = input.innerHTML;
	var btnVal = this.innerHTML;

	if(btnVal == 'C')
	{
		input.innerHTML = '';
		decimal = false;
	}

	else if(btnVal=='='){
		var lastChar = inputVal[inputVal.length-1];
		var equation = inputVal;
		equation = equation.replace(/x/g,'*').replace(/÷/g,'/');

		if(operators.indexOf(lastChar) > -1 || lastChar == '.')
			equation = equation.replace(/.$/,'');

		if(equation)
			//don't get used to using
			input.innerHTML = eval(equation);
	}	

	else if(operators.indexOf(btnVal) > -1)
	{
		var lastChar = inputVal[inputVal.length-1];
		if(inputVal != '' && operators.indexOf(lastChar)==-1)
		{
			input.innerHTML+=btnVal;
			decimal = false;
		}
		else if(inputVal == '' && btnVal == '-')
			{
				input.innerHTML+=btnVal;
			}
	}

	else if(btnVal =='.')
	{
		var lastChar = inputVal[inputVal.length-1];
		if(!decimal && (inputVal == '' || operators.indexOf(lastChar) > -1))
		{
			decimal = true;
			input.innerHTML+='0.';
		}
		if(!decimal)
		{
			decimal = true;
			input.innerHTML+='.';
		}
	}
	else{
		input.innerHTML += btnVal;
	}		
	e.preventDefault();
	}
}