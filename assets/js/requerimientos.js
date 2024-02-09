/* ARREGLOS DEL DESAFIO */

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

// Función para cambiar el contenido de #info basado en el enlace clickeado
function cambiarContenido(requerimiento) {
  const infoDiv = document.getElementById("info");

  // Aquí puedes establecer el contenido según el requerimiento
  switch (requerimiento) {
    case "Agregar":
      console.log(traumatologia);
      // Crear la tabla con los datos de traumatología
      let tablaHtml = `
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
        tablaHtml += `
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
      tablaHtml += `
            </tbody>
          </table>
        `;

      // Añadir el botón para agregar horas
      tablaHtml += `
      <button onclick="agregarHoras()" class="btn btn-primary mb-5">Agregar Horas</button>

        `;
      // Actualizar el contenido de infoDiv

      // Crea el botón y lo añade al DOM
      const botonAgregar = document.createElement("button");
      botonAgregar.textContent = "Agregar Horas";
      botonAgregar.id = "agregarHorasBtn";
      infoDiv.appendChild(botonAgregar);
      botonAgregar.addEventListener("click", agregarHoras);
      infoDiv.innerHTML = tablaHtml;

      break;
    case "Eliminar":
      infoDiv.innerHTML = "<p>Contenido para Eliminar</p>";
      break;
    case "Listar Dental":
      infoDiv.innerHTML = "<p>Contenido para Listar Dental</p>";
      break;
    case "Listar Todo":
      infoDiv.innerHTML = "<p>Contenido para Listar Todo</p>";
      break;
    case "Filtar ISAPRE":
      infoDiv.innerHTML = "<p>Contenido para Filtar ISAPRE</p>";
      break;
    case "Filtar FONASA":
      infoDiv.innerHTML = "<p>Contenido para Filtar FONASA</p>";
      break;

    default:
      infoDiv.innerHTML = "<p>Selecciona una opción</p>";
  }
}

// Añadir listener a los enlaces
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    const requerimiento = this.textContent; // Obtener el texto del enlace clickeado
    let finalWord = getFinalWord(requerimiento);
    console.log(requerimiento);
    console.log(finalWord);
    cambiarContenido(finalWord); // Llamar a la función y cambiar el contenido
  });
});

function getFinalWord(variable) {
  return variable.split(".- ").pop(); // pop obtiene el último elemento del array
}

// 1. Agregar las siguientes horas al arreglo de Traumatología.

//Opocion 1 - Push Nos permite agregar uno o más elementos al final de nuestro array

// Asigna el manejador de eventos después de que el DOM esté completamente cargado

function agregarHoras() {
  console.log("si se ejecuta");

  // Agregar nuevos elementos al arreglo de traumatología de forma correcta
  traumatologia.push(
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
    }
  );
  console.log("se agregaron las horas");
  console.log(traumatologia);

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
