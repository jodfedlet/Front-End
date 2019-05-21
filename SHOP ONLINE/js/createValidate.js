
document.getElementById("createUser").onsubmit = Create;

function Create() {
	var contErro = 0;
	//name validation
	var name = document.getElementById("CreateName");
	var erroN = document.getElementById("erName");

	if ((name.value == "") || (name.value.indexOf(" ") == -1)) {
		erroN.innerHTML = "Please, enter your complete name";
		erroN.style.display = 'block';
		contErro+=1;
	}
	else {
		erroN.style.display = 'none';
	}
	//sex validation
	var male = document.getElementById("male");
	var female = document.getElementById("female");
	var other = document.getElementById("other");
	var erroSex = document.getElementById("gender");
	if(!male.checked || !female.checked || !other.checked){
		erroSex.innerHTML = "Please, select your sexe";
		erroSex.style.display = 'block';
		erroSex+=1;
	}
	else{
		erroSex.style.display = 'none';
	}		
	//Email validation
	var email = document.getElementById("CreateEmail");
	var erroEm = document.getElementById("erEmail");

	if ((email.value == "") || (email.value.indexOf("@") == -1)) {
		erroEm.innerHTML = "Please, enter your email";
		erroEm.style.display = 'block';
		contErro+=1;
	}
	else if (email.value.indexOf("@") == -1){
		erroEm.innerHTML = "Enter a correct email";
		erroEm.style.display = 'block';
		contErro+=1;
	}
	else {
		erroEm.style.display = 'none';
	}

	//password
	var psw = document.getElementById("CreatePsw");
	var erPsw = document.getElementById("erPsw");

	if (psw.value == "")  {
		erPsw.innerHTML = "Enter a password";
		erPsw.style.display = 'block';
		contErro+=1;
	}
	else if(psw.value < 8) {
		erPsw.innerHTML = "Permited 8 caracters";
		erPsw.style.display = 'block';
		contErro+=1;
	}
	else {
		erPsw.style.display = 'none';
	}

	//Password confirmation
	var confirPsw = document.getElementById("ConfirmPsw");
	var erCP = document.getElementById("erCP");

	if (psw.value != "" && confirPsw.value =="")  {
		erCP.innerHTML = "Please, confirm your password!";
		erCP.style.display = 'block';
		contErro+=1;
	}
	
	else if(confirPsw.value != psw.value)  {
		erCP.innerHTML = "Password is different!";
		erCP.style.display = 'block';
		contErro+=1;
	}
	
	else {
		erCP.style.display = 'none';
	}

	//Neighborhood validation
	var NBH = document.getElementById("CreateNBH");
	var erNB = document.getElementById("erNBH");

	if (NBH.value == "") {
		erNB.innerHTML = "Please, enter your neighborhood";
		erNB.style.display = 'block';
		contErro+=1;
	}
	else {
		erNB.style.display = 'none';
	}

	//street validation
	var street = document.getElementById("CreateStreet");
	var erStr = document.getElementById("erStr");

	if (street.value == "") {
		erStr.innerHTML = "Please, enter your address";
		erStr.style.display = 'block';
		contErro+=1;
	}
	
	else {
		erStr.style.display = 'none';
	}
	//Address number validation
	var addN = document.getElementById("CreateAddNum");
	var erN = document.getElementById("erN");

	if (addN.value == "") {
		erN.innerHTML = "Please, enter your address number";
		erN.style.display = 'block';
		contErro+=1;
	}
	else {
		erN.style.display = 'none';
	}
	//Cep validation
	var addC = document.getElementById("AddCEP");
	var erC = document.getElementById("erCEP");

	if (addC.value == "") {
		erC.innerHTML = "Please, enter the CEP";
		erC.style.display = 'block';
		contErro+=1;
	}
	else {
		erC.style.display = 'none';
	}
	

	if (contErro > 0) {
		return false;
	}
	else{
		alert("Account created with succesful");// sera removido posteriomente
	}
	
}
