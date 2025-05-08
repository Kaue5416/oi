/*questão1*/
function soma(a, b) {
    return a + b;
}

/*questão2*/
function isPar(num) {
    return num % 2 === 0;
}

/*questão3*/
function media(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

/*questão4*/
function imc(peso, altura) {
    return peso / (altura * altura);
}

/*questão5*/
function calcularDesconto(preco, desconto) {
    return preco - (preco * (desconto / 100));
}

/*questão6*/
function calcularImpostoRenda(salario) {
    if (salario <= 22847.76) {
        return 0;
    } else if (salario <= 33919.80) {
        return salario * 0.075 - 1713.58;
    } else if (salario <= 45012.60) {
        return salario * 0.15 - 4257.57;
    } else if (salario <= 55976.16) {
        return salario * 0.225 - 7633.51;
    } else {
        return salario * 0.275 - 10432.32;
    }
}

/*questão7*/
function calcularMediaArredondada(Numeros){
    let soma = numeros.reduce((acc, num) => acc + num, 0);
    let media = soma / numeros.length;
    return Math.round(media);
}

/*questão8*/
function ContarDigitosParesImpares(numero) {
    let pares = 0;
    let impares = 0;
    let digitos = numero.toString().split('');
    
    for (let i = 0; i < digitos.length; i++) {
        if (parseInt(digitos[i]) % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    
    return { pares, impares };
}

/*questão9*/
function calcularMediaAlunos(alunos) {
    let somaNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
    return somaNotas / alunos.length;
}

/*questão10*/
function calcularidades(anoNascimento) {
    let anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

/*questão11*/
function gerartabuada(numero) {
    let tabuada = [];
    for (let i = 1; i <= 10; i++) {
        tabuada.push(numero * i);
    }
    return tabuada;
}

/*questão12*/
function advinheNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
        const tentativa = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):"));
        tentativas++;

        if (tentativa === numeroAleatorio) {
            alert(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
            acertou = true;
        } else if (tentativa < numeroAleatorio) {
            alert("O número correto é maior.");
        } else {
            alert("O número correto é menor.");
        }
    }
}

/*questão13*/
function verificarPropriedade(objeto, propriedade) {
    return objeto.hasOwnProperty(propriedade);
}

/*questão14*/
function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {
    const lucro = valorCusto * (margemLucro / 100);
    return valorCusto + lucro + valorFrete;
}

/*questão15*/
function encontrarPalavraMaisLonga(frase) {
    const palavras = frase.split(' ');
    let palavraMaisLonga = '';

    for (const palavra of palavras) {
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    }

    return palavraMaisLonga;
}

/*Questão16*/
function imprimirQuadro(lista) {
    const larguraMaxima = Math.max(...lista.map(str => str.length));
    const borda = '*'.repeat(larguraMaxima + 4);

    console.log(borda);
    for (const palavra of lista) {
        console.log(`* ${palavra.padEnd(larguraMaxima)} *`);
    }
    console.log(borda);
}

/*Questão17*/
function filtrarStringsLongas(array) {
    return array.filter(item => typeof item === 'string' && item.length > 5);
}

/*Questão18*/
function filtrarLivrosPorAutor(livros, autor) {
    return livros.filter(livro => livro.autor === autor);
}

/*questão19*/
function encontrarPessoaMaisVelha(pessoas) {
    let pessoaMaisVelha = pessoas[0];

    for (const pessoa of pessoas) {
        if (pessoa.idade > pessoaMaisVelha.idade) {
            pessoaMaisVelha = pessoa;
        }
    }

    return pessoaMaisVelha.nome;
}

/*questão20*/
function filtrarCarrosPorAno(carros, ano) {
    return carros.filter(carro => carro.ano >= ano);
}

/*questão21*/
function inverterString(str) {
    return str.split('').reverse().join('');
}