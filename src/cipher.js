const cipher = { encode, decode };
// aqui você deve implementar o objeto cipher, o qual já está exportado no boilerplate. 
//Este objeto (cipher) deve conter dois métodos:
//cipher.encode(offset, string): offset é o número de posições que queremos mover para a direita no alfabeto e string é a mensagem (texto) que queremos cifrar.
//cipher.decode(offset, string): offset é o número de posições que queremos mover para a esquerda no alfabeto e string é a mensagem (texto) que queremos decifrar.
function encode(deslocamento, mensagem) {
  let result = '';
  if (typeof mensagem !== "string" || typeof deslocamento !== "number") {
    throw new TypeError();
  }
  for (let i = 0; i < mensagem.length; i++) {
    let codigo = mensagem.charCodeAt(i);
    //usando tabela ASCII para representar o intervalo das letras maiúsculas
    //texto digitado subtraido de 65 (zerando contagem das letras), depois soma o offset (deslocamento escolhido) e divide por 26 (total de letras do alfabeto). por fim somar novamente os 65 para que a mensagem seja cifrada.
    if (codigo >= 65 && codigo <= 90) { // letra maiúscula
      codigo = ((codigo - 65 + deslocamento) % 26) + 65;
      //usando tabela ASCII para representar o intervalo das letras minúsculas
    } else if (codigo >= 97 && codigo <= 122) { // letra minúscula
      codigo = ((codigo - 97 + deslocamento) % 26) + 97;
      //usando tabela ASCII para representar o intervalo dos números
    } if (codigo >= 48 && codigo <= 57) { // número
      codigo = ((codigo - 48 + deslocamento) % 10) + 48;
    }
    //retornar o valor de resultado usando a string com os caracteres correspondentes à sequência de valores Unicode.
    result += String.fromCharCode(codigo);
  }
  return result;
}
function decode(deslocamento, mensagemCifrada) {
  let result = "";
  if (typeof mensagemCifrada !== "string" || typeof deslocamento !== "number") {
    throw new TypeError();
  }
  for (let i = 0; i < mensagemCifrada.length; i++) {
    let codigo = mensagemCifrada.charCodeAt(i);
    //usando tabela ASCII para representar o intervalo das letras maiúsculas
    if (codigo >= 65 && codigo <= 90) { // letra maiúscula
      codigo = ((codigo - 90 - deslocamento) % 26) + 90;
      //usando tabela ASCII para representar o intervalo das letras minúsculas
    } else if (codigo >= 97 && codigo <= 122) { // letra minúscula
      codigo = ((codigo - 122 - deslocamento) % 26) + 122;
      //usando tabela ASCII para representar o intervalo dos números
    } if (codigo >= 48 && codigo <= 57) { // número
      codigo = ((codigo - 57 - deslocamento) % 10) + 57;
    }
    result += String.fromCharCode(codigo);
  }
  return result;
}
export default cipher;