function Dog (name) {
  this.name = name
  }
  Dog.bark = function () {
  console.log(this.name + ' says woof')
  }
  let fido = new Dog('fido')
  
  /* dog.bark já é uma função chamada acima e a função já retorna o nome, não precisando chamar novamente abaixo.*/