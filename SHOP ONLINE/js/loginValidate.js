
document.getElementById("loginForm").onsubmit = validation;

function validation() {
	
	var contErro = 0;
	//username validation
	var name = document.getElementById("name");
	var error = document.getElementById("UserError");

	if (name.value != "jod.pierre"){
		UserError.innerHTML = "Incorrect user";
		UserError.style.display = 'block';
		contErro+=1;
	}
	else if (name.value ==""){
		UserError.innerHTML = "Please enter your username";
		UserError.style.display = 'block';
		contErro+=1;
	}
	else {
		UserError.style.display = 'none';
	}

	//Password validation
	var psw = document.getElementById("psw");
	var pswE = document.getElementById("pswError");

	if (psw.value == "")  {
		pswError.innerHTML = "Please, enter a password";
		pswError.style.display = 'block';
		contErro+=1;
	}
	else if(psw.value != "123456") {
		pswError.innerHTML = "Incorrect password";
		pswError.style.display = 'block';
		contErro+=1;
	}

	else {
		pswError.style.display = 'none';
	}
	if (contErro > 0) {
		return false;
	}
	
	else{
		alert("Welcome to your login page");// will remove farther
	}
	
	
}