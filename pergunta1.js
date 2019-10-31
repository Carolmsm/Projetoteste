
    function primo(num) {
    // verifica se o numero digitado é "1", que não é primo
     if(num!=1){
      for (var i = 2; i < num; i++)
        if (num % i == 0) return false;
      return num !== 1;
    }
    }

    function verificaPrimo() {
      var num = document.getElementById("name").value;
      var resl="";
     
      // verifica se é número
     if(!isNaN(num)){
      // verifica se é primo
      if (primo(num)) {
       resl = "O número " + (num) + " é primo";
        
      } else {
       resl = "O número " + (num) + " nao éprimo";
      }
      document.getElementById("mensagem").innerHTML = resl;
    }

else{
 document.getElementById("mensagem").innerHTML = "não é número ";
}
    }
 