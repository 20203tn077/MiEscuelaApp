fetch('/data/nomina.json')
    .then(response => response.json())
    .then(data => {
        let tableBody = document.querySelector("#nominaTable tbody");
        data.forEach(nomina => {
            let row = document.createElement('tr');

            row.innerHTML = `
                <td>${nomina.id}</td>
                <td>${nomina.fecha_pago}</td>
                <td>${nomina.profesor.nombre}</td>
                <td>${nomina.dias_trabajados}</td>
                <td>$${nomina.salario}</td>
                <td>$${nomina.retenciones}</td>
                <td>$${nomina.vales_despensa}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error(error));