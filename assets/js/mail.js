// $(function() {

// 	// Get the form.
// 	var form = $('#ajax-contact');

// 	// Get the messages div.
// 	var formMessages = $('#form-messages');

// 	// Set up an event listener for the contact form.
// 	$(form).submit(function(e) {
// 		// Stop the browser from submitting the form.
// 		e.preventDefault();

// 		// Serialize the form data.
// 		var formData = $(form).serialize();

// 		// Submit the form using AJAX.
// 		$.ajax({
// 			type: 'POST',
// 			url: $(form).attr('action'),
// 			data: formData
// 		})
// 		.done(function(response) {
// 			// Make sure that the formMessages div has the 'success' class.
// 			$(formMessages).removeClass('error');
// 			$(formMessages).addClass('success');

// 			// Set the message text.
// 			$(formMessages).text(response);

// 			// Clear the form.
// 			$('#name').val('');
// 			$('#email').val('');
// 			$('#company').val('');
// 			$('#message').val('');
// 		})
// 		.fail(function(data) {
// 			// Make sure that the formMessages div has the 'error' class.
// 			$(formMessages).removeClass('success');
// 			$(formMessages).addClass('error');

// 			// Set the message text.
// 			if (data.responseText !== '') {
// 				$(formMessages).text(data.responseText);
// 			} else {
// 				$(formMessages).text('Oops! An error occured and your message could not be sent.');
// 			}
// 		});

// 	});

// });


function thefunc() {
	const email=document.getElementById('mc-email').value; 
	// console.log(JSON.stringify({ email: email }))
	fetch('https://api-treeprite.herokuapp.com/email', {
		method: 'post',
		body: JSON.stringify({email: email }),
		headers:{
			'Content-Type': 'application/json'
		}
	}).then((data)=>{
		if (data.status == 404){
			alert('Please enter a vailid email')
			return false;
		}
		if (data.status ==400) {
			alert("Email not stored")
			return false;
		}
		if(data.status ==401){
			alert('That email has been used already,thanks')
		}
		alert("Thank you,we will be in touch");
	})

}

const mybutton = document.getElementById('mybutton')
mybutton.addEventListener('click',thefunc);

