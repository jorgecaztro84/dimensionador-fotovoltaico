# Dimensionador de Sistemas Fotovoltaicos

¡Bienvenido al **Dimensionador de Sistemas Fotovoltaicos**! Esta aplicación web está diseñada para ayudar a los usuarios a dimensionar sistemas de energía solar fotovoltaica de manera rápida y sencilla. Es ideal para residencias y pequeños negocios que deseen calcular el número de paneles solares necesarios, la capacidad del inversor, el tamaño de las baterías (si es necesario) y el ahorro energético y económico.

---

## **Características Principales**

- **Cálculo del número de paneles solares**: Basado en el consumo mensual, la potencia de los paneles y las horas de sol pico (HSP).
- **Dimensionamiento del inversor**: Considera un factor de simultaneidad del 80% y un factor de pico de 2 para cubrir cargas momentáneas.
- **Cálculo de baterías**: Opcional, para sistemas con autonomía deseada.
- **Ahorro energético y económico**: Muestra el ahorro diario, mensual y anual en kWh y dólares, utilizando un costo de referencia de $0.18 por kWh.
- **Interfaz sencilla y amigable**: Fácil de usar, con resultados claros y concisos.

---

## **¿Cómo Funciona?**

La aplicación realiza los siguientes cálculos:

1. **Energía generada por los paneles**:
   - Considera las pérdidas del sistema (85% de eficiencia).
   - Calcula la energía diaria generada en función de las HSP.

2. **Número de paneles necesarios**:
   - Divide el consumo diario entre la energía generada por panel.

3. **Potencia del inversor**:
   - Multiplica la potencia pico del sistema por un factor de simultaneidad del 80% y un factor de pico de 2.
   - Añade un 25% adicional de seguridad.

4. **Capacidad de baterías** (opcional):
   - Calcula la capacidad necesaria en función de la autonomía deseada.

5. **Ahorro energético y económico**:
   - Calcula el ahorro en kWh y dólares, utilizando un costo de referencia de $0.18 por kWh.

---

## **Instrucciones de Uso**

1. **Ingresa los datos**:
   - Consumo mensual (kWh).
   - Potencia del panel (W).
   - Horas de sol pico (HSP) (opcional, valor predeterminado: 5).
   - Autonomía de baterías en horas (opcional, dejar vacío para sistemas on-grid).

2. **Haz clic en "Calcular"**:
   - La aplicación mostrará los resultados en un formato claro y conciso.

3. **Revisa los resultados**:
   - Número de paneles necesarios.
   - Potencia del inversor recomendada.
   - Capacidad de baterías (si aplica).
   - Energía generada diaria.
   - Ahorro energético y económico.

---

## **Tecnologías Utilizadas**

- **Frontend**:
  - HTML, CSS y JavaScript.
- **Alojamiento**:
  - GitHub Pages, Netlify o Firebase Hosting (gratuito).

---

## **Instalación y Despliegue**

### **Instalación Local**
1. Clona este repositorio:
   ```bash
   git clone [(https://github.com/jorgecaztro84/dimensionador-fotovoltaico)
