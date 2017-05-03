# popupAlert
### Mostrar una ventana de alerta con el texto que queramos

![Muestra de lo que hace][img1]

[img1]: popupAlert.PNG "Así funciona"

Este el texto que tenemos que tener en nuestro código

    '<div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
    <span class="close">&times;</span>
    <p>El texto que queramos que salga en el popup</p>
    </div>
    </div>'

Y el código CSS

    '/* Estilo div que contiene nuestro alert y que engloba toda la ventana */
    .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Estilo de la ventana emergente */
    .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    }

    /* Le damos estilo al close de la ventana */
    .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    }

    /* Para poder cerrar la ventana popup */
    .close:hover,.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    }'
