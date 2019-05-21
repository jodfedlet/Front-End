
document.getElementById("EmailVerification").onsubmit = emVerifyVerif;

function emVerifyVerif() {
	var contErro = 0;
	// emVerify verification
	var emVerify = document.getElementById("emVerify");
	var erV = document.getElementById("erEm");

	
	
	//Serão trocados  com o uso de um server
	if ((emVerify.value == "") || (emVerify.value.indexOf("@") == -1)) {
		erV.innerHTML = "Please, enter your email verification";
		erV.style.display = 'block';
		contErro+=1;
	}
	else {
		erV.style.display = 'none';
	}

	
	if (contErro > 0) {
		return false;
	}
	else{
		alert("A automatically email has been sent to your inbox");// sera removido posteriomente
	}
	
}
