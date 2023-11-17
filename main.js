function generarNumero() {
    var numeroGenerado = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numero").value = numeroGenerado;
  }

  function agregarNumero() {
    var numero = document.getElementById("numero").value;

    if (numero !== "") {
      var tabla = document.getElementById("tabla");
      var fila = tabla.insertRow(-1);
      var celda = fila.insertCell(0);
      celda.innerHTML = numero;
    }
  }


//   CALCULAR LO D ELA TABLA

// function calcularNumero() {
//     var numeroGenerado = Math.floor(Match.random() * 100) + 1;
//     document.getElementById("numero").value = numeroGenerado;
// }


// function agregarNumero() {
//     var numero = document.getElementById("numero").value;

//     if (numero !== "") {

//     }
// }



function calcularNumero() {
    var numeroGenerado = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numero").value = numeroGenerado;
  }

  function agregarNumero() {
    var numero = document.getElementById("numero").value;

    if (numero !== "") {
      var tabla = document.getElementById("tabla");
      var fila = tabla.insertRow(-1);
      var celda = fila.insertCell(0);
      celda.innerHTML = numero;
    }
  }

  function calcularEstadisticas() {
    var numeros = [];
    var table = document.getElementById("tabla");
    for (var i = 1, row; row = table.rows[i]; i++) {
      var numero = parseInt(row.cells[0].innerHTML);
      numeros.push(numero);
    }

    var promedio = calcularPromedio(numeros);
    var total = calcularTotal(numeros);
    var minimo = calcularMinimo(numeros);
    var maximo = calcularMaximo(numeros);

    document.getElementById("promedio").textContent = promedio;
    document.getElementById("total").textContent = total;
    document.getElementById("minimo").textContent = minimo;
    document.getElementById("maximo").textContent = maximo;
  }

  function calcularPromedio(numeros) {
    var sum = numeros.reduce(function(acc, val) {
      return acc + val;
    }, 0);
    return (sum / numeros.length).toFixed(2);
  }

  function calcularTotal(numeros) {
    return numeros.reduce(function(acc, val) {
      return acc + val;
    }, 0);
  }

  function calcularMinimo(numeros) {
    return Math.min.apply(null, numeros);
  }

  function calcularMaximo(numeros) {
    return Math.max.apply(null, numeros);
  }