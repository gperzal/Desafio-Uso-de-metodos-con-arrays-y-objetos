// document.addEventListener("DOMContentLoaded", listaCitas);

// function listaCitas() {
//   //Tabla Citas radiologia
//   var html = radiologia
//     .map(function (cita) {
//       return `<tr>
//               <td>${cita.hora}</td>
//               <td>${cita.especialista}</td>
//               <td>${cita.paciente}</td>
//               <td>${cita.rut}</td>
//               <td>${cita.prevision}</td>
//             </tr>`;
//     })
//     .join("");

//   document.getElementById("tabla-cita-radiologia").innerHTML = html;

//   //Tabla Citas traumatologia
//   var html = traumatologia
//     .map(function (cita) {
//       return `<tr>
//           <td>${cita.hora}</td>
//           <td>${cita.especialista}</td>
//           <td>${cita.paciente}</td>
//           <td>${cita.rut}</td>
//           <td>${cita.prevision}</td>
//         </tr>`;
//     })
//     .join("");

//   document.getElementById("tabla-cita-traumatologia").innerHTML = html;

//   //Tabla Citas Dental
//   var html = dental
//     .map(function (cita) {
//       return `<tr>
//             <td>${cita.hora}</td>
//             <td>${cita.especialista}</td>
//             <td>${cita.paciente}</td>
//             <td>${cita.rut}</td>
//             <td>${cita.prevision}</td>
//           </tr>`;
//     })
//     .join("");

//   document.getElementById("tabla-cita-dental").innerHTML = html;
// }

document.addEventListener("DOMContentLoaded", listaCitas);

function listaCitas() {
  // Tabla Citas Radiología
  var htmlRadiologia = radiologia
    .map(function (cita) {
      return `<tr class="table-info">
              <td class="table-primary">${cita.hora}</td>
              <td class="table-warning">${cita.especialista}</td>
              <td class="table-primary">${cita.paciente}</td>
              <td class="table-warning">${cita.rut}</td>
              <td class="table-primary">${cita.prevision}</td>
            </tr>`;
    })
    .join("");
  document.getElementById("tabla-citas-radiologia").innerHTML = htmlRadiologia;

  // Tabla Citas Traumatología
  var htmlTraumatologia = traumatologia
    .map(function (cita) {
      return `<tr class="table-info">
              <td class="table-secondary">${cita.hora}</td>
              <td class="table-secondary">${cita.especialista}</td>
              <td class="table-secondary">${cita.paciente}</td>
              <td class="table-secondary">${cita.rut}</td>
              <td class="table-secondary">${cita.prevision}</td>
            </tr>`;
    })
    .join("");
  document.getElementById("tabla-citas-traumatologia").innerHTML =
    htmlTraumatologia;

  // Tabla Citas Dental
  var htmlDental = dental
    .map(function (cita) {
      return `<tr class="table-info">
              <td class="table-primary">${cita.hora}</td>
              <td class="table-info">${cita.especialista}</td>
              <td class="table-primary">${cita.paciente}</td>
              <td class="table-info">${cita.rut}</td>
              <td class="table-primary">${cita.prevision}</td>
            </tr>`;
    })
    .join("");
  document.getElementById("tabla-citas-dental").innerHTML = htmlDental;
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
