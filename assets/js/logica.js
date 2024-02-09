let boton = document.querySelector("#listas");

boton.addEventListener("click", listaCitas);

function listaCitas() {
  //Tabla Citas radiologia
  var html = radiologia
    .map(function (cita) {
      return `<tr>
              <td>${cita.hora}</td>
              <td>${cita.especialista}</td>
              <td>${cita.paciente}</td>
              <td>${cita.rut}</td>
              <td>${cita.prevision}</td>
            </tr>`;
    })
    .join("");

  document.getElementById("tabla-cita-radiologia").innerHTML = html;

  //Tabla Citas traumatologia
  var html = traumatologia
    .map(function (cita) {
      return `<tr>
          <td>${cita.hora}</td>
          <td>${cita.especialista}</td>
          <td>${cita.paciente}</td>
          <td>${cita.rut}</td>
          <td>${cita.prevision}</td>
        </tr>`;
    })
    .join("");

  document.getElementById("tabla-cita-traumatologia").innerHTML = html;

  //Tabla Citas Dental
  var html = dental
    .map(function (cita) {
      return `<tr>
            <td>${cita.hora}</td>
            <td>${cita.especialista}</td>
            <td>${cita.paciente}</td>
            <td>${cita.rut}</td>
            <td>${cita.prevision}</td>
          </tr>`;
    })
    .join("");

  document.getElementById("tabla-cita-dental").innerHTML = html;
}

var radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

var traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

var dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

// Datos Iniciales

// los arreglos radiologia, traumatologia y dental Previamente Definidos

// Asegúrate de llamar a la función mostrarCantidades después de que el contenido del DOM esté cargado

/** */
//document.addEventListener("click", mostrarCantidades);

function mostrarCantidades() {
  document.getElementById(
    "cantidad-radiologia"
  ).textContent = `Cantidad de atenciones para Radiología: ${radiologia.length}`;
  document.getElementById(
    "cantidad-traumatologia"
  ).textContent = `Cantidad de atenciones para Traumatología: ${traumatologia.length}`;
  document.getElementById(
    "cantidad-dental"
  ).textContent = `Cantidad de atenciones para Dental: ${dental.length}`;
}

// 1. Agregar las siguientes horas al arreglo de Traumatología.

//Opocion 1 - Push Nos permite agregar uno o más elementos al final de nuestro array
traumatologia.push = [
  {
    hora: "09:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "09:30",
    especialista: "MARIA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  },
];

//Opcion 2 - Concat Podemos fusionar los elementos dedos o más arrays dentro de un solo resultado

// Nuevo arreglo de Traumatología para agregar
var nueva_traumatologia = [
  {
    hora: "09:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "09:30",
    especialista: "MARIA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  },
];

traumatologia = traumatologia.concat(nueva_traumatologia);

// 2. Eliminar el primer y último elemento del arreglo de Radiología.

radiologia.shift(); // Se utiliza para eliminar el primer dato que tenemos en el arreglo
radiologia.pop(); // Se utiliza para eliminar el último dato que tenemos en el arreglo

//  3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime
// conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo
// separando por un guión cada dato desplegado y cada fila de información debe estar
// separada por un párrafo (2 Puntos).
// Ejemplo:
// 8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE
// 11:00 - MARIA PIA ZAÑARTU - ANGEL MUÑOZ - 9878789-2 - ISAPRE...

// Asegúrate de llamar a la función mostrarCitasDental después de que el contenido del DOM esté cargado

/** */
//document.addEventListener("click", mostrarCitasDental);

function mostrarCitasDental() {
  var citasHTML = dental
    .map(function (cita) {
      return `${cita.hora} - ${cita.especialista} - ${cita.paciente} - ${cita.rut} - ${cita.prevision}`;
    })
    .join("<br>"); // Utilizamos <br> para separar cada cita con un salto de línea.

  // Asegúrate de tener un elemento con el id 'citas-dental' en tu HTML
  document.getElementById("citas-dental").innerHTML = citasHTML;
}

// 4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
// Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo
// (3 Puntos).
//  Ejemplo:
//  FRANCISCA ROJAS
//  PAMELA ESTRADA
//  ARMANDO LUNA…

// Llama a la función para actualizar la tabla cuando el contenido esté listo
/** */
//document.addEventListener("click", generarTablaCitas);

// Concatenamos todos los arreglos en uno solo
var todasLasCitas = radiologia.concat(traumatologia, dental);

function generarTablaCitas() {
  var html = todasLasCitas
    .map(function (cita) {
      return `<tr>
              <td>${cita.hora}</td>
              <td>${cita.especialista}</td>
              <td>${cita.paciente}</td>
              <td>${cita.rut}</td>
              <td>${cita.prevision}</td>
            </tr>`;
    })
    .join("");

  document.getElementById("cuerpo-tabla-citas").innerHTML = html;
}

// 5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas
// de Dental (1 Punto).
//  Ejemplo:
//  MARCELA RETAMAL - ISAPRE
//  ANGEL MUÑOZ - ISAPRE
//  ANA SEPULVEDA - ISAPRE

// Filtramos los pacientes que tienen ISAPRE como previsión
var pacientesIsapre = dental.filter(function (cita) {
  return cita.prevision === "ISAPRE";
});

// Mapeamos los resultados para obtener la cadena de texto deseada
var listaPacientesIsapre = pacientesIsapre.map(function (cita) {
  return cita.paciente + " - " + cita.prevision;
});

console.log(listaPacientesIsapre);

// 6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas
// de Traumatología (1 Punto).
//  Ejemplo:
//  PAULA SÁNCHEZ – FONASA

// Filtramos los pacientes que tienen FONASA como previsión
var pacientesFonasa = traumatologia.filter(function (cita) {
  return cita.prevision === "FONASA";
});

// Mapeamos los resultados para obtener la cadena de texto deseada
var listaPacientesFonasa = pacientesFonasa.map(function (cita) {
  return cita.paciente + " - " + cita.prevision;
});

console.log(listaPacientesFonasa);
