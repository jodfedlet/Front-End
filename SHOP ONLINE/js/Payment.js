
document.getElementById("buyForm").onsubmit = payment;

function payment() {
	
	var contErro = 0;
	//Card Name validation
	var CN = document.getElementById("CardName");
	var erC = document.getElementById("erCN");

	if (CN.value == ""){
		erC.innerHTML = "Please, enter the card name";
		erC.style.display = 'block';
		contErro+=1;
	}
	
	else {
		erC.style.display = 'none';
	}

	//card Number verification
	var CNb = document.getElementById("CardNumber");
	var erCN = document.getElementById("erCNb");

	if (CNb.value == ""){
		erCN.innerHTML = "Please, enter the card number";
		erCN.style.display = 'block';
		contErro+=1;
	}
	
	else {
		erCN.style.display = 'none';
	}
	//Expiration month validation
	var EM = document.getElementById("ExpM");
	var erEM = document.getElementById("erEM");

	if (EM.value == ""){
		erEM.innerHTML = "Please, enter the expiration month";
		erEM.style.display = 'block';
		contErro+=1;
	}
	
	else {
		erEM.style.display = 'none';
	}

	//CVV validation
	
	var CVV = document.getElementById("Cvv");
	var erCvv = document.getElementById("erCvv");

	if (CVV.value == ""){
		erCvv.innerHTML = "Please, enter the CVV";
		erCvv.style.display = 'block';
		contErro+=1;
	}
	
	else {
		erCvv.style.display = 'none';
	}

	//Expiration year validation
	var EY = document.getElementById("expY");
	var erEY = document.getElementById("erEY");

	if (EY.value == ""){
		erEY.innerHTML = "Please, enter the expiration year";
		erEY.style.display = 'block';
		contErro+=1;
	}
	
	else {
		erEY.style.display = 'none';
	}

	if (contErro > 0) {
		return false;
	}
	
	else{
		alert("Buy accepted");// will remove farther
	}
	
	
}