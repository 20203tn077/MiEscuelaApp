fetch('/data/docentes.json')
.then(res => res.json())
.then(docentes => {
    document.getElementById('ctrDocentes').innerHTML = docentes.reduce((content ,{
        id,
        nombre,
        apellido_paterno,
        apellido_materno,
        fecha_nacimiento,
        correo_electronico,
        division_academica: {nombre: division_academica},
        grados_academicos,
        tipo_plaza_docente
    }) => content + `<tr>
            <td scope="col">${id}</td>
            <td scope="col">${nombre}</td>
            <td scope="col">${apellido_paterno}</td>
            <td scope="col">${apellido_materno}</td>
            <td scope="col">${fecha_nacimiento}</td>
            <td scope="col">${correo_electronico}</td>
            <td scope="col">${division_academica}</td>
            <td scope="col">
                <ul>
                    ${grados_academicos.reduce((content, {
                        titulo,
                        institucion
                    }, i) => content + `<li>
                        <div style="cursor: pointer;" data-bs-toggle="collapse" data-bs-target="#int${id}${i}">${titulo}</div>
                        <small id="int${id}${i}" class="collapse">Obtenido en: ${institucion}</small>
                    </li>`, '')}
                </ul>
            </td>
            <td scope="col">${tipo_plaza_docente}</td>
        </tr>`, ''
    )
})