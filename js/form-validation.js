// JavaScript Document

// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#reg_form").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      companyName: "required",
    },
    // Specify validation error messages
    messages: {
      companyName: "Please enter your company",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function() {
      //form.submit();
	

			$("#reg_form_submit").click();

		
    }
  });
});