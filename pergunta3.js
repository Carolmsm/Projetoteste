        function fibonacci(quadro,texto)
        {
            var numero = 0;
            var proximo_numero = 1;
            var auxiliar;
            quadro.value = "";
           
            while (numero <= texto.value )
            {
                quadro.value += numero+", ";
                auxiliar = proximo_numero;
                proximo_numero = proximo_numero + numero;
                numero = auxiliar;
            }
        }
