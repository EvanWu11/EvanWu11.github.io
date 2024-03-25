console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
} else {
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Serialize the form data
    var formData = new FormData(this);

    // Send the form data to Formspree
    fetch('https://formspree.io/f/xbjnanye', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        },
    })
    .then(response => {
        if (response.ok) {
            // Show the dialogue box
            document.getElementById('message-dialogue').style.display = 'block';
            document.getElementById('contact-form').reset(); 
        } else {
            // Handle errors (optional)
            alert('Oops! Something went wrong.');
        }
    })
    .catch(error => console.error('Error:', error));
});
