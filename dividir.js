function dividir(numeroA, numeroB){
    if (numeroA !== 0 && numeroB !== 0){
        return numeroA / numeroB
    } else {
        return "No se puede dividir por cero"
    }
}

module.exports = dividir;

