function CalcularMedia(nota1, nota2) {
           return (nota1 + nota2)/2;
        }
    
        function CalculoMedia() {
            var nota1 = parseFloat(document.getElementById('nota1').value);
            var nota2 = parseFloat(document.getElementById('nota2').value);
            //-----------------------------------------------
            if (isNaN(nota1) || isNaN(nota2) || CalcularMedia(nota1, nota2) > 10) {
                document.getElementById("media").innerHTML = "Valor invalido";
            } else {
                var media = CalcularMedia(nota1,nota2);
                console.log(media);
                document.getElementById("media").innerHTML = media;
            }
            //-----------------------------------------------
            
            const aprovacao = document.getElementById("aprovacao");

            if (media >= 7) {
                aprovacao.innerHTML = "Você foi Aprovado!!!";
                aprovacao.className = "aprovado";
            } else if (media < 7 || media > 0){
                aprovacao.innerHTML = "Você Não foi Aprovado.";
                aprovacao.className = "reprovado";
            }else{
                return
            }

        }
