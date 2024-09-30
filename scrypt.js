const form = document.getElementById('form-curso');
const listaCursos = document.getElementById('lista-cursos');

document.addEventListener('DOMContentLoaded', cargarCursos);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const profesor = document.getElementById('profesor').value;
    const fecha = document.getElementById('fecha').value;
    const duracion = document.getElementById('duracion').value;
    const descripcion = document.getElementById('descripcion').value;

    const curso = {
        nombre,
        profesor,
        fecha,
        duracion,
        descripcion
    };

    agregarCurso(curso);

    guardarCursoLocalStorage(curso);

    form.reset();
});

function agregarCurso(curso) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${curso.nombre}</strong> - ${curso.profesor} <br>
        Inicio: ${curso.fecha} | Duración: ${curso.duracion} semanas
        <button class="ver-detalles">Ver más detalles</button>
        <div class="detalles" style="display: none;">
            <p>${curso.descripcion}</p>
        </div>
    `;
    listaCursos.appendChild(li);

    const botonDetalles = li.querySelector('.ver-detalles');
    botonDetalles.addEventListener('click', function() {
        const detalles = li.querySelector('.detalles');
        detalles.style.display = detalles.style.display === 'none' ? 'block' : 'none';
    });
}

function cargarCursos() {
    const cursos = JSON.parse(localStorage.getItem('cursos')) || [];
    cursos.forEach(curso => agregarCurso(curso));
}

function guardarCursoLocalStorage(curso) {
    const cursos = JSON.parse(localStorage.getItem('cursos')) || [];
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}
