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
let form = document.querySelector('#ajaxReq');

form.addEventListener('submit', function(e){
    e.preventDefault();
		
    let formData = new FormData(form);
	
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

// Captcha
function onSubmit(token) {
	var onloadCallback = function() {
		alert("grecaptcha is ready!");
	  };
}

// Maps Custom
function initMap() {
	// Styles a map in night mode.
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 47.25, lng: 6.0333},
	  zoom: 12,
	  styles: [
		{
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#1d2c4d"
			}
		  ]
		},
		{
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#8ec3b9"
			}
		  ]
		},
		{
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#1a3646"
			}
		  ]
		},
		{
		  "featureType": "administrative.country",
		  "elementType": "geometry.stroke",
		  "stylers": [
			{
			  "color": "#4b6878"
			}
		  ]
		},
		{
		  "featureType": "administrative.land_parcel",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#64779e"
			}
		  ]
		},
		{
		  "featureType": "administrative.province",
		  "elementType": "geometry.stroke",
		  "stylers": [
			{
			  "color": "#4b6878"
			}
		  ]
		},
		{
		  "featureType": "landscape.man_made",
		  "elementType": "geometry.stroke",
		  "stylers": [
			{
			  "color": "#334e87"
			}
		  ]
		},
		{
		  "featureType": "landscape.natural",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#023e58"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#283d6a"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#6f9ba5"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#1d2c4d"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "geometry.fill",
		  "stylers": [
			{
			  "color": "#023e58"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#3C7680"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#304a7d"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#98a5be"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#1d2c4d"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#2c6675"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "geometry.stroke",
		  "stylers": [
			{
			  "color": "#255763"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#b0d5ce"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#023e58"
			}
		  ]
		},
		{
		  "featureType": "transit",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#98a5be"
			}
		  ]
		},
		{
		  "featureType": "transit",
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#1d2c4d"
			}
		  ]
		},
		{
		  "featureType": "transit.line",
		  "elementType": "geometry.fill",
		  "stylers": [
			{
			  "color": "#283d6a"
			}
		  ]
		},
		{
		  "featureType": "transit.station",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#3a4762"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#0e1626"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#4e6d70"
			}
		  ]
		}
	  ]
	});
  }
