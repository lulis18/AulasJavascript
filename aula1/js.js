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
		//document.getElementById("resultado").innerHTML += "<br/> Fib(" + x + ") = " + numeros;
		console.log(numeros);
	}
}

function multiplos()
	{ 
		var n = [];
		for (i = 1; i <=20; i++)
			{
				n[i] = i *4;
			}
		console.log(n);	
	}
	
var nc = 0;
function cliques()
	{
		nc++;
		console.log(nc);
	}

function confirmado()
	{
		alert("carregou");
	}

function popup()
	{
		var retorno = confirm("Deseja abir uma nova janela?");
		if(retorno)
			{
				open("http://www.google.com");
			}
		else
			{
				console.log("cancelado");
			}
	}