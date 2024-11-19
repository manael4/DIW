<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ejercicio 2</title>
</head>
<body>
    <!--
    EJERCICIO 2: Cálculo de impuestos
    Escribe un programa que calcule el impuesto a pagar basado en el ingreso anual de una persona. Las reglas de impuesto son:
    Ingresos menores a $10,000: 0% de impuestos.
    Ingresos entre $10,000 y $30,000: 10% de impuestos.
    Ingresos entre $30,000 y $50,000: 20% de impuestos.
    Ingresos mayores a $50,000: 30% de impuestos.
    Requerimientos:
    Usa una estructura if...elseif...else para calcular el impuesto.
    Muestra el impuesto a pagar en función del ingreso.
    -->
<?php

$ingreso = readLine("Introduce el ingreso anual de una persona: ");

if ($ingreso<10000) {
    echo "0$ a pagar (0% de impuestos";
} elseif ($ingreso>=10000 && $ingreso<30000) {
    echo $ingreso*0.1 . "$ a pagar (10% de impuestos)";
} elseif ($ingreso>=30000 && $ingreso<50000) {
    echo $ingreso*0.2 . "$ a pagar (20% de impuestos";
} else {
    echo $ingreso*0.3 . "$ a pagar (30% de impuestos)";
}


?>


</body>
</html>