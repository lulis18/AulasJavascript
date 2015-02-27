var dado1 = 6;
var dado2 = 1;
var rodada = 0;
function Random()
	{
		dado1 = parseInt((Math.random()*100)%6 + 1);
		dado2 = parseInt((Math.random()*100)%6 + 1);
		$('#dado1').attr('src', "imagens/" + dado1 + ".png");
		$('#dado2').attr('src', "imagens/" + dado2 + ".png");
		Inserir_tabela();
		RolarDados();
		Verificar();
	}
var soma = 0;
function Verificar()
	{
		rodada++;
		if (rodada == 1)
			{
				soma = dado1 + dado2;
				if (soma == 7 || soma == 11)   
					{
						
						alert('Jogador ganhou! Recarregue a página para jogar novamente!');
						$("#botao").attr("disabled", "disabled");
					}
				else if (soma == 2 || soma == 3 || soma == 12)
					{
						alert('Jogador perdeu! Recarregue a página para jogar novamente!');
						$("#botao").attr("disabled", "disabled");						
					}
				else
					{
						$('#c' + soma).css('background', '#FFB003');
					}
			}
		else 
			{
				if (soma == dado1 + dado2)
					{
						alert('Jogador venceu!');
						$("#botao").attr("disabled", "disabled");
					}
				else if (dado1 + dado2 == 7)
					{
						alert('Jogador perdeu!');
						$("#botao").attr("disabled", "disabled");
					}
			}
	}
	function Inserir_tabela()
	{
		var j;
		$('#j' + (rodada % 5)).html(dado1+dado2);
	}

function RolarDados()
	{
		var posicaoX1 = parseInt((Math.random()*1000)%600);
		var posicaoY1 = parseInt((Math.random()*1000)%170);
		$("#dado1").css('left', posicaoX1);
		$("#dado1").css('top', posicaoY1);
		var posicaoX2 = 0;
		var posicaoY2 = 0;
		do
		{
			posicaoX2 = parseInt((Math.random()*1000)%600);
			posicaoY2 = parseInt((Math.random()*1000)%170);
		} while(!(posicaoX1 - posicaoX2 <= -100 || posicaoX1 - posicaoX2 >= 100 ||
				posicaoY1 - posicaoY2 <= -100|| posicaoY1 - posicaoY2 >= 100));
		$("#dado2").css('left', posicaoX2);
		$("#dado2").css('top', posicaoY2);
	}
function Refresh(){
		 $(document).ready(function() {
            $('#botao2').click(function() {
                location.reload();
            });
        });   
		}