function Compute() {
    var ShoeSize = document.getElementById('ShoeSize').value;
    var Birthdate = document.getElementById('Birthdate').value;
    var result = (ShoeSize*2+5)*50-Birthdate+1766;
    if (isNaN(ShoeSize) == true) {
        alert("Votre pointure est incorrecte");
    } else {
    	if (isNaN(Birthdate) == true) {
    		alert("Votre date de naissance doit être un nombre");
    	} else {
        alert(result);
	    }
	}
}