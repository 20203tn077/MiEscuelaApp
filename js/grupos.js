const resp = fetch('/data/grupos.json');

resp.then(response => response.json())
.then((json)=>{
    let lisGrupos = json;

    console.log(lisGrupos);

    let tabla = document.getElementById('tablebody');
    
    for(let i =0; i<lisGrupos.length; i++) {
        tabla.innerHTML +=
            "<tr>"+
            "<td>" +lisGrupos[i].id+"</td>"+
            "<td>"+lisGrupos[i].cuatrimestre +"</td>"+
            "<td>"+lisGrupos[i].grupo +"</td>"+
            "<td>"+lisGrupos[i].generacion +"</td>"+
            "<td>"+lisGrupos[i].carrera.nombre +"</td>"+
            "<td>"+lisGrupos[i].jefe_grupo.nombre +"</td>"+
            "<td>"+lisGrupos[i].profesor_tutor.nombre +"</td>"+
            "</tr>";
    }
});
