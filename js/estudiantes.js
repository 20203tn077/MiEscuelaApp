fetch("data/estudiantes.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); 
    const tabla = document.querySelector(".table.table-striped tbody");
    data.forEach((estudiante) => {
      const fila = document.createElement("tr");
      const idCelda = document.createElement("td");
      idCelda.textContent = estudiante.id;
      fila.appendChild(idCelda);

      const nombreCelda = document.createElement("td");
      nombreCelda.textContent = estudiante.nombre;
      fila.appendChild(nombreCelda);

      const apellidoPaternoCelda = document.createElement("td");
      apellidoPaternoCelda.textContent = estudiante.apellido_paterno;
      fila.appendChild(apellidoPaternoCelda);

      const apellidoMaternoCelda = document.createElement("td");
      apellidoMaternoCelda.textContent = estudiante.apellido_materno;
      fila.appendChild(apellidoMaternoCelda);

      const telefonoCelda = document.createElement("td");
      telefonoCelda.textContent = estudiante.telefono;
      fila.appendChild(telefonoCelda);

      const carreraCelda = document.createElement("td");
      carreraCelda.textContent = estudiante.carrera.nombre;
      fila.appendChild(carreraCelda);

      tabla.appendChild(fila);
    });
  })
  .catch((error) => {
    console.log(error);
  });