/*function greet (person) {
    if (person == { name: 'amy' }) {
    return 'hey amy'
    } else {
    return 'hey arnold'
    }
    }
    greet({ name: 'amy' })
*/
    
 /* Resposta: O código retorna amy, porque na função greet, o name: está recebendo a string amy, e no if da função tem uma condição,
 em que se o nome da pessoa for amy, irá retornar hey amy, e se não irá retornar hey arnold 

 Resposta do Desafio:*/

    function greet (person) {
    if (person == { name: 'arnold' }) {
    return 'hey arnold'
    } else {
    return 'hey amy'
    }
    }
    greet({ name: 'amy' }) 

