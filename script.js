// vanilla JavaScript Fullpage
new fullpage('#fullpage', {
	// options here
	ancres :['home', 'project', 'about', 'contact']
});

// Function burger active
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	nav.classList.toggle('active');
});

// Function disable burger
const disable = document.querySelector('#navLinks');

disable.addEventListener('click', () => {	
	burger.classList.remove('active');
	nav.classList.remove('active');
});

// Ajax form contact
let form = document.getElementById('ajaxReq');

form.addEventListener('submit', function(e){
    e.preventDefault();
		
    let formData = new FormData(form);
    console.log(formData);
	
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "contact.php", true);
    xhr.send(formData);
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 3) {
            console.log("ça charge");
        }
        if (xhr.readyState === 4 && xhr.status === 200) {
            // let datas = JSON.parse(xhr.responseText);
			// console.log(datas);
			const mail = document.getElementById('mail');
			const object = document.getElementById('object');
			const message = document.getElementById('message');
			mail.value = '';   
			object.value = '';        
			message.value = '';        

			const hidden = document.getElementById('hidden');
			hidden.style.display = 'inline';
		}
    });
});
