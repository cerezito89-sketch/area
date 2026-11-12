function calcular() {

    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (base > 0 && altura > 0) {

        let area = base * altura;

        document.getElementById("resultado").innerHTML =
        "El área del rectángulo es: " + area;

    } else {

        document.getElementById("resultado").innerHTML =
        "Ingresa valores válidos";

    }

}