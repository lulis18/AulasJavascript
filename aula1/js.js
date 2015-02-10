function fibDOM()
{
	var x = parseInt(document.getElementById("textbox").value);
	var numeros = [];
	numeros[0] = 0;
	numeros[1] = 1;
	for(i = 2; i <= x; i++)
	{
		numeros[i] = numeros[i-1] + numeros[i-2];
	}
	document.getElementById("resultado").innerHTML += "<br/> Fib(" + x + ") = " + numeros;
}

function fibJQuery()
{
	alert($("#textbox").val());
	var x = parseInt($("#textbox").value());
	var numeros = [];
	numeros[0] = 0;
	numeros[1] = 1;
	for(i = 2; i <= x; i++)
	{
		numeros[i] = numeros[i-1] + numeros[i-2];
	}
	$("#resultado").html("ok");
}