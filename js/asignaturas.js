const asignaturasContainer = document.getElementById("asignaturasContainer")
fetch('/data/asignaturas.json').then(response=> response.json() ).then(asignaturas=>{
    const content = []
    for(let asignatura of asignaturas){
       content.push(`<tr> 
       <th scope="row">${asignatura.id}</th>
       <td>${asignatura.nombre}</td>
       <td>${asignatura.codigo}</td>
       <td>${asignatura.creditos}</td>
       <td>${asignatura.seriacion ?? ''}</td>
       <td>${asignatura.cuatrimestre}</td>
       <td>${asignatura.carrera.nombre}</td>
       </tr>`)
    }
    asignaturasContainer.innerHTML= content.join('\n')
});

 