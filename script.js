document.getElementById("calculadoraForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener valores del formulario
    const consumo = parseFloat(document.getElementById("consumo").value);
    const potenciaPanel = parseFloat(document.getElementById("potenciaPanel").value) || 600; // Valor predeterminado: 600W
    const horasSol = parseFloat(document.getElementById("horasSol").value) || 5; // Valor predeterminado: 5 HSP
    const autonomia = parseFloat(document.getElementById("autonomia").value) || 0; // Si no se ingresa, es 0 (on-grid)

    // Constantes
    const costoKWh = 0.18; // Costo de la energía en Ecuador ($0.18 por kWh)
    const factorSimultaneidad = 0.8; // Factor de simultaneidad para cargas residenciales (80%)
    const perdidasSistema = 0.85; // Eficiencia del sistema (85% considerando pérdidas)
    const factorPico = 2; // Factor de pico para considerar arranques de electrodomésticos

    // Cálculos
    const energiaNecesariaDiaria = consumo / 30; // Consumo diario en kWh
    const energiaGeneradaDiaria = (potenciaPanel * horasSol * perdidasSistema) / 1000; // Energía generada por panel (kWh/día)
    const numPaneles = Math.ceil(energiaNecesariaDiaria / energiaGeneradaDiaria);
    const potenciaPicoSistema = numPaneles * potenciaPanel; // Potencia pico del sistema en W
    const potenciaInversor = (potenciaPicoSistema * factorSimultaneidad * factorPico * 1.25).toFixed(2); // Inversor con factor de pico y 25% de seguridad
    const capacidadBaterias = autonomia > 0 ? (energiaNecesariaDiaria * (autonomia / 24) / perdidasSistema).toFixed(2) : 0; // Capacidad en kWh (solo si hay autonomía)
    const ahorroDiario = energiaGeneradaDiaria * numPaneles; // Ahorro en kWh/día
    const ahorroMensual = ahorroDiario * 30;
    const ahorroAnual = ahorroMensual * 12;
    const ahorroDiarioDolares = ahorroDiario * costoKWh;
    const ahorroMensualDolares = ahorroMensual * costoKWh;
    const ahorroAnualDolares = ahorroAnual * costoKWh;

    // Mostrar resultados en formato compacto
    let resultadoTexto = `<span class="visto">✔️</span> Número de paneles: <strong>${numPaneles}</strong><br>`;
    resultadoTexto += `<span class="visto">✔️</span> Potencia del inversor: <strong>${potenciaInversor} W</strong><br>`;
    if (autonomia > 0) {
        resultadoTexto += `<span class="visto">✔️</span> Capacidad de baterías: <strong>${capacidadBaterias} kWh</strong><br>`;
    } else {
        resultadoTexto += `<span class="visto">✔️</span> Sistema: <strong>On-grid (sin baterías)</strong><br>`;
    }
    resultadoTexto += `<span class="visto">✔️</span> Energía generada diaria: <strong>${(energiaGeneradaDiaria * numPaneles).toFixed(2)} kWh</strong><br>`;
    resultadoTexto += `<span class="visto">✔️</span> Ahorro diario: <strong>${ahorroDiario.toFixed(2)} kWh ($${ahorroDiarioDolares.toFixed(2)})</strong><br>`;
    resultadoTexto += `<span class="visto">✔️</span> Ahorro mensual: <strong>${ahorroMensual.toFixed(2)} kWh ($${ahorroMensualDolares.toFixed(2)})</strong><br>`;
    resultadoTexto += `<span class="visto">✔️</span> Ahorro anual: <strong>${ahorroAnual.toFixed(2)} kWh ($${ahorroAnualDolares.toFixed(2)})</strong><br><br>`;
    resultadoTexto += `<small><em>Nota: El cálculo del ahorro utiliza un costo de referencia de $${costoKWh} por kWh.</em></small><br><br>`;
    resultadoTexto += `<small><strong>¿Cómo se calculan los resultados?</strong><br>`;
    resultadoTexto += `1. Se calcula la energía generada por los paneles considerando pérdidas del sistema (85% de eficiencia).<br>`;
    resultadoTexto += `2. El inversor se dimensiona con un 25% adicional de seguridad, un factor de simultaneidad del 80% y un factor de pico de 2.<br>`;
    resultadoTexto += `3. El ahorro se calcula en base a la energía generada y el costo de $${costoKWh} por kWh.</small>`;

    // Mostrar resultados en la aplicación
    document.getElementById("resultadoTexto").innerHTML = resultadoTexto;
});
