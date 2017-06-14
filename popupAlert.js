/*var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}*/

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/
var popUp = {
	modal : document.getElementById('myModal'),
	btn : document.getElementById("myBtn"),
	span : document.getElementsByClassName("close")[0],
	boton :  function(){
		popUp.btn.addEventListener('click',function() {
    			popUp.modal.style.display = "block";
		})
	},
	spanBoton : function(){
		popUp.span.addEventListener('click',function(){
				popUp.modal.style.display = "none";	
		})
	},
	windowClick : function(){
		window.onclick = function(event){
			if (event.target == popUp.modal){
				popUp.modal.style.display = "none";
			}
		}
	}
	
}
popUp.boton();
popUp.spanBoton();
popUp.windowClick();

