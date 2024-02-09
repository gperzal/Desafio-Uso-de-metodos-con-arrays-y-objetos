/* ARREGLOS DEL DESAFIO */

var radiologia = [
  { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
  { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
  { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
  { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
  { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

var traumatologia = [
  { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
  { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
  { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
  { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
  { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
  { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
  { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

var dental = [
  { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
  { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
  { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
  { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
  { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
  { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];


// Añadir listener a los enlaces para split el contenido
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    const requerimientos = this.textContent; // Obtener el texto del enlace clickeado
    let requerimiento = getFinalWord(requerimientos);
    console.log("uds selecciono", requerimiento);
    cambiarContenido(requerimiento); // Llamar a la función y cambiar el contenido
  });
});




// Función para cambiar el contenido de #info basado en el enlace clickeado

function cambiarContenido(requerimiento) {
  const infoDiv = document.getElementById("info");
  console.log("uds recibio", requerimiento);
  // Aquí puedes establecer el contenido según el requerimiento
  switch (requerimiento) {
    case "Agregar":
      console.log(traumatologia);
      // Crear la tabla con los datos de traumatología
      let tablaHtml1 = `
            <div class="scrollable-table">
            <p>1. Agregar las siguientes horas al arreglo de Traumatología:</p>
            <table class="table table-striped-columns">
              <thead>
                <tr>
                  <th class="table-dark">Hora</th>
                  <th class="table-dark">Especialista</th>
                  <th class="table-dark">Paciente</th>
                  <th class="table-dark">RUT</th>
                  <th class="table-dark">Previsión</th>
                </tr>
              </thead>
              <tbody id="tabla-citas-traumatologia">
          `;

      // Agregar filas al HTML de la tabla para cada cita en el arreglo
      traumatologia.forEach((cita) => {
        tablaHtml1 += `
              <tr class="table-info">
                <td class="table-secondary">${cita.hora}</td>
                <td class="table-secondary">${cita.especialista}</td>
                <td class="table-secondary">${cita.paciente}</td>
                <td class="table-secondary">${cita.rut}</td>
                <td class="table-secondary">${cita.prevision}</td>
              </tr>
            `;
      });

      // Cerrar las etiquetas de la tabla
      tablaHtml1 += `
              </tbody>
            </table>
            </div>
          `;

      // Añadir el botón para agregar horas
      tablaHtml1 += `<button onclick="agregarHoras()" class="btn btn-primary mb-5 mt-2">Agregar Horas</button>`;
      infoDiv.innerHTML = tablaHtml1;
      // Actualizar el contenido de infoDiv
      break;
    case "Eliminar":
      let tablaHtml2 = `
    <p>2. Eliminar el primer y último elemento del arreglo de Radiología:</p>
    <p>Utilizando Shift y Pop</p>
    <table class="table table-striped-columns">
      <thead>
        <tr>
          <th class="table-dark">Hora</th>
          <th class="table-dark">Especialista</th>
          <th class="table-dark">Paciente</th>
          <th class="table-dark">RUT</th>
          <th class="table-dark">Previsión</th>
        </tr>
      </thead>
      <tbody id="tabla-citas-radiologia">
      `;

      // Aquí solo debemos generar el esqueleto de la tabla, no llenarla con datos.
      tablaHtml2 += `
      </tbody>
    </table>
  `;

      // Botones para eliminar elementos. Nota que ya no llenamos la tabla aquí.
      tablaHtml2 += `
    <button onclick="eliminarPrimero()" class="btn btn-primary mb-5">Eliminar Primer Elemento</button>
    <button onclick="eliminarUltimo()" class="btn btn-secondary mb-5">Eliminar Ultimo Elemento</button>
  `;

      // Actualizar el contenido de infoDiv con el HTML de la tabla y los botones
      infoDiv.innerHTML = tablaHtml2;

      // Llamar a una función para llenar la tabla con los datos actuales
      llenarTablaRadiologia()
      break;
    case "Listar Dental":
      // Iniciar la variable para construir el HTML
      let listaHtml1 = `<p>3. Lista de consultas médicas de Dental, separando por un guión:</p>`;

      // Usar map para transformar cada cita en un string con guiones y <br> para separarlas
      const citasDentalHtml = dental.map(cita => {
        return `${cita.hora} - ${cita.especialista} - ${cita.paciente} - ${cita.rut} - ${cita.prevision}`;
      }).join("<br>");

      // Añadir el resultado al HTML
      listaHtml1 += `<p>${citasDentalHtml}</p>`;

      // Establecer el contenido de infoDiv al HTML construido
      infoDiv.innerHTML = listaHtml1;
      break;
    case "Listar Todo":
      // Iniciar la variable para construir el HTML
      let listaHtml2 = `<p>4. Listar todas las citas del centro medico, mostrar solo nombres:</p>`;
      // Usar map para transformar cada cita en un string con guiones y <br> para separarlas
      const todasLasCitas = radiologia.concat(traumatologia, dental);
      const citasHtml = todasLasCitas.map(cita => {
        return `${cita.paciente}`;
      }).join("<br>");
      // Añadir el resultado al HTML
      listaHtml2 += `<p>${citasHtml}</p>`;

      // Establecer el contenido de infoDiv al HTML construido
      infoDiv.innerHTML = listaHtml2;
      break;
    case "Filtrar ISAPRE":
      // Filtramos los pacientes que tienen ISAPRE como previsión
      var pacientesIsapre = dental.filter(function (cita) {
        return cita.prevision === "ISAPRE";
      });

      // Iniciar la variable para construir el HTML
      let filtrarHtml1 = `<p>5. Lista de consultas médicas de Dental con previsión ISAPRE:</p>`;

      // Usar map para transformar cada cita en un string con guiones y <br> para separarlas
      const citasIsapreHtml = pacientesIsapre.map(cita => {
        return `${cita.paciente} - ${cita.prevision}`;
      }).join("<br>");

      // Añadir el resultado al HTML
      filtrarHtml1 += `<p>${citasIsapreHtml}</p>`;

      // Establecer el contenido de infoDiv al HTML construido
      infoDiv.innerHTML = filtrarHtml1;
      break;
    case "Filtrar FONASA":
      // Filtramos los pacientes que tienen FONASA como previsión
      var pacientesFonasa = traumatologia.filter(function (cita) {
        return cita.prevision === "FONASA";
      });

      // Iniciar la variable para construir el HTML
      let filtrarHtml2 = `<p>5. Lista de consultas médicas de Traumatologia con previsión Fonasa:</p>`;

      // Usar map para transformar cada cita en un string con guiones y <br> para separarlas
      const citasFonasaHtml = pacientesFonasa.map(cita => {
        return `${cita.paciente} - ${cita.prevision}`;
      }).join("<br>");

      // Añadir el resultado al HTML
      filtrarHtml2 += `<p>${citasFonasaHtml}</p>`;

      // Establecer el contenido de infoDiv al HTML construido
      infoDiv.innerHTML = filtrarHtml2;
      break;
  }
}


function getFinalWord(variable) {
  return variable.split(".- ").pop(); // pop obtiene el último elemento del array
}

// 1. Agregar las siguientes horas al arreglo de Traumatología.
function agregarHoras() {

  // Agregar nuevos elementos al arreglo de traumatología de forma correcta
  traumatologia.push(
    { hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE", },
    { hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA", },
    { hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
    { hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" }
  );

  // Actualizar la vista
  const tablaCitas = document.getElementById("tabla-citas-traumatologia");

  // Limpiar la tabla antes de volver a llenarla para evitar duplicados
  tablaCitas.innerHTML = "";

  // Asumimos que quieres agregar los nuevos elementos al final de la tabla
  traumatologia.forEach((cita) => {
    const row = tablaCitas.insertRow(-1); // -1 agrega al final de la tabla
    row.innerHTML = `
        <td class="table-danger">${cita.hora}</td>
        <td class="table-danger">${cita.especialista}</td>
        <td class="table-danger">${cita.paciente}</td>
        <td class="table-danger">${cita.rut}</td>
        <td class="table-danger">${cita.prevision}</td>
      `;
  });
}

// 2. Agregar las siguientes horas al arreglo de Radiologia.

function llenarTablaRadiologia() {
  const tablaCitas = document.getElementById("tabla-citas-radiologia");
  tablaCitas.innerHTML = ""; // Asegurarse de limpiar la tabla antes de llenarla

  radiologia.forEach((cita) => {
    const row = tablaCitas.insertRow(-1);
    row.innerHTML = `
      <td class="table-danger">${cita.hora}</td>
      <td class="table-danger">${cita.especialista}</td>
      <td class="table-danger">${cita.paciente}</td>
      <td class="table-danger">${cita.rut}</td>
      <td class="table-danger">${cita.prevision}</td>
    `;
  });
}

function eliminarPrimero() {
  radiologia.shift();
  llenarTablaRadiologia();
}

function eliminarUltimo() {
  radiologia.pop();
  llenarTablaRadiologia();
}




