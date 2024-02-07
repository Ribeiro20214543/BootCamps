programa
{
	
	funcao inicio()
	{
	    escreva("Escolha uma das opções: 1 - Abrir Netflix 2 - Abrir Amazon Prime 3 - Abrir HBO Max 4 - Sair")
	    inteiro menu = 0
	    escreva("\n" + "Sua escolha:")
	    leia (menu)
	     

	    escolha (menu)
	    {
	    	caso 1:     //testa se o valor é igual a 1
	     escreva("Ok! Abrir Netflix!")
	     pare
	     
	     caso 2:     //testa se o valor é igual a 2
	     escreva("Ok! Abrir Amazon prime!")	
	     pare

	 	caso 3:     //testa se o valor é igual a 3
	     escreva("Ok! Abrir HBO Max!")
	     pare

          caso 4:     //testa se o valor é igual a 3
	     escreva("Saindo do menu...")
	     pare
	     
        	caso contrario:   
	     escreva("Você deve escolhar uma das opções 1, 2 ou 3)")
	     pare
	    }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 201; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */