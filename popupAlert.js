
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

