function FormValidation(){

	// Error for all mandatory fields
/*
	$('.required').each(function(i,obj){
		if($(obj).val().length() == 0){
			label = $(obj).prev().text();
			error_wrapper = $(obj).nextAll('.error').first();
			$(error_wrapper).html(label+ " is required !").show();
		}
	});
*/	
	// Set maximum number of possible errors
	error_count = 9;

	// Assigning variables to form elements
	var firstname = $('#first_name');
	var secondname = $('#second_name');
	var email = $('#email');
	var dob = $('#datepicker');
	var password = $('#password');
	var confirm_password = $('#confirm_password');
	var phone = $('#phone');
	var state = $('#state');
	var city = $('#city');
	var offers = $('#offers');

	// Assigning regular expressions to variables
	var name_regex = /^[A-Za-z]+$/;
	var email_regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var date_regex = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
	var password_regex = /((?=.*\d)(?=.*[A-Z])(?=.*[@#$%!]).)/;
	var phone_regex = /^[0-9]*$/;
	var city_regex = /^[A-Za-z]*$/;

	// Check first name
	var error = firstname.nextAll('.error').first();
	if(firstname.val().length == 0)
	{
		error.html('First name is required !').show();
	}	
	else if (!firstname.val().match(name_regex)) {
		error.html('Only alphabets are allowed !').show();
	}
	else {
		error.hide();
		error_count--;
	}

	// Check second name
	var error = secondname.nextAll('.error').first();
	if(secondname.val().length == 0)
	{
		error.html('Second name is required !').show();
	}	
	else if (!secondname.val().match(name_regex)) {
		error.html('Only alphabets are allowed !').show();
	}
	else {
		error.hide();
		error_count--;
	}

	// Check email
	var error = email.nextAll('.error').first();
	if(email.val().length == 0)
	{
		error.html('Email is required !').show();
	}	
	else if (!email.val().match(email_regex)) {
		error.html('Enter a valid email !').show();
	}
	else {
		error.hide();
		error_count--;
	}

	// Check DOB
	var error = dob.nextAll('.error').first();
	if(dob.val().length == 0)
	{
		error.html('Date of birth is required !').show();
	}	
	else if (!dob.val().match(date_regex)) {
		error.html('Enter a valid date !').show();
	}
	else {
		error.hide();
		error_count--;
	}

	// Check password
	var error = password.nextAll('.error').first();
	if(password.val().length == 0) {
		error.html('Password is required !').show();
	}	
	else if(password.val().length < 6) {
		error.html('Password should contain atleast 6 characters !').show();
	}
	else if (!password.val().match(password_regex)) {
		error.html('Password should contain atleast one uppercase letter and number !').show();
	}
	else {
		error.hide();
		error_count--;
	}

	// Check confirm password
	var error = confirm_password.nextAll('.error').first();
	if(password.val() != confirm_password.val()) {
		error.html('Passwords do not match !').show();
	}
	else {
		error.hide();
		error_count--;
	}

	// Check phone number
	var error = phone.nextAll('.error').first();
	if(phone.val().length == 0)
	{
		error.html('Phone number is required !').show();
	}	
	else if (!phone.val().match(phone_regex)) {
		error.html('Enter a valid phone number !').show();
	}
	else {
		error.hide();
		error_count--;
	}

	// Check state
	var error = state.nextAll('.error').first();
	if($("#state option:selected").index() == 0) {
		error.html('Choose state !').show();
	}
	else {
		error.hide();
		error_count--;
	}

	// Check city
	var error = city.nextAll('.error').first();
	if(city.val().length == 0)
	{
		error.html('City is required !').show();
	}	
	else if (!city.val().match(city_regex)) {
		error.html('Only alphabets are allowed!').show();
	}
	else {
		error.hide();
		error_count--;
	}


	//check form completion

	if (error_count == 0) {
		$(".form-container").hide();
		$(".summary-container").show();

		//Summmary values
		$("#first_name_cell").html(firstname.val());
		$("#second_name_cell").html(secondname.val());
		$("#email_cell").html(email.val());
		$("#dob_cell").html(dob.val());
		$("#phone_cell").html(phone.val());
		$("#state_cell").html(state.val());
		$("#city_cell").html(city.val());

		if(offers.is(':checked')) {
		    $("#offers_cell").html('Yes');
		} else {
		    $("#offers_cell").html('No');
		}
	}
}

function editForm(){
	$(".summary-container").hide();
	$(".form-container").show();
}