let regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z]).{8,12}$/;

const $ = id => document.getElementById(id);

window.addEventListener('load', () => {

    /* validaciones */

    $('title').addEventListener('blur', () => {
        if (!$('title').value.trim()) {
            $('title').classList.remove('is-valid')
            $('title').classList.add('is-invalid')
            $('error-title').innerHTML = "El titulo es obligatorio"
        } else {
            $('title').classList.remove('is-invalid')
            $('title').classList.add('is-valid')
            $('error-title').innerHTML = null
        }
    })

    // calificacion

    $('rating').addEventListener('blur', () => {
        if (!$('rating').value.trim()) {
            $('rating').classList.remove('is-valid')
            $('rating').classList.add('is-invalid')
            $('error-rating').innerHTML = "La calificacion es obligatoria"
        } else if ($('rating').value < 0 || $('rating').value > 10) {
            $('rating').classList.remove('is-valid')
            $('rating').classList.add('is-invalid')
            $('error-rating').innerHTML = "Debe ingresar una calificacion que este comprendida entre cero (0) y diez (10)"
        } else {
            $('rating').classList.remove('is-invalid')
            $('rating').classList.add('is-valid')
            $('error-rating').innerHTML = null
        }
    })

    // premio

    $('awards').addEventListener('blur', () => {
        if (!$('awards').value.trim()) {
            $('awards').classList.remove('is-valid')
            $('awards').classList.add('is-invalid')
            $('error-awards').innerHTML = "La cantidad de Premios es obligatorio"
        } else if ($('awards').value < 0 || $('awards').value > 10) {
            $('awards').classList.remove('is-valid')
            $('awards').classList.add('is-invalid')
            $('error-awards').innerHTML = "Debes ingresar numero comprendido entre cero(0) y el diez (10)"
        } else {
            $('awards').classList.remove('is-invalid')
            $('awards').classList.add('is-valid')
            $('error-awards').innerHTML = null
        }
    })
    $('release_date').addEventListener('blur', () => {
        if (!$('release_date').value.trim()) {
            $('release_date').classList.remove('is-valid')
            $('release_date').classList.add('is-invalid')
            $('error-release_date').innerHTML = "La fecha de Creacion es obligatoria"
        } else {
            $('release_date').classList.remove('is-invalid')
            $('release_date').classList.add('is-valid')
            $('error-release_date').innerHTML = null
        }
    })

    // Duracion 

    $('length').addEventListener('blur', () => {
        if (!$('length').value.trim()) {
            $('length').classList.remove('is-valid')
            $('length').classList.add('is-invalid')
            $('error-length').innerHTML = "La Duracion es obligatoria"
        } else if ($('length').value < 60 || $('length').value > 360) {
            $('length').classList.remove('is-valid')
            $('length').classList.add('is-invalid')
            $('error-length').innerHTML = "La duracion debe estar comprendida entre 60 y 360"
        } else {
            $('length').classList.remove('is-invalid')
            $('length').classList.add('is-valid')
            $('error-length').innerHTML = null
        }
    })

    $('genre_id').addEventListener('blur', () => {
        if (!$('genre_id').value.trim()) {
            $('genre_id').classList.remove('is-valid')
            $('genre_id').classList.add('is-invalid')
            $('error-genre_id').innerHTML = "El genero es obligatorio"
        } else {
            $('genre_id').classList.remove('is-invalid')
            $('genre_id').classList.add('is-valid')
            $('error-genre_id').innerHTML = null
        }
    })



            /* deshabilitar formulario */

$('addMovie-form').addEventListener('submit', e => {
    e.preventDefault();

    let elementos = $('addMovie-form').elements;
    let error = false;
    for (let i = 0; i < elementos.length - 1; i++) {
        // alert(elementos[i])
        if (!elementos[i].value) {
            elementos[i].classList.add('is-invalid')
            $('error-campos-vacios').innerHTML = 'Todos los campos son obligatorios';
            error = true
        }
    }

    if (!error) {
        $('addMovie-form').submit()
        console.log("La película se guardó satisfactoriamente")
        $('msg-addMovie').innerHTML = "La película se guardó satisfactoriamente";
        }

    })

})