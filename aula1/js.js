function fibDOM()
{
	var x = parseInt(document.getElementById("textbox").value);
	if(x <= 0)
	{
		document.getElementById("resultado").innerHTML += "<br/> Fib(0) = 0";
	}
	else
	{
		var numeros = [];
		numeros[0] = 0;
		numeros[1] = 1;
		for(i = 2; i <= x; i++)
		{
			numeros[i] = numeros[i-1] + numeros[i-2];
		}
		document.getElementById("resultado").innerHTML += "<br/> Fib(" + x + ") = " + numeros;
	}
}