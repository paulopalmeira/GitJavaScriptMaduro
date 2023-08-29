const verificarNota = function(nota) {
    switch (true) {
        case nota >= 9 && nota <= 10:
            console.log('Quadro de honra');
            break;
        case nota >= 7 && nota < 9:
            console.log('Aprovado');
            break;
        case nota >= 4 && nota < 7:
            console.log('Recuperação');
            break;
        case nota >= 0 && nota < 4:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota inválida');
    }
}

verificarNota(10);
verificarNota(8.9);
verificarNota(6.5);
verificarNota(2.3);
verificarNota(-1);
verificarNota(11);
