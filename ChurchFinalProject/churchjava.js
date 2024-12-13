// Dynamic Greeting
const welcomeMessage = document.getElementById("welcome-message");
const currentHour = new Date().getHours();

if (currentHour < 12) {
    welcomeMessage.textContent = "Good morning! We're blessed to have you here.";
} else if (currentHour < 18) {
    welcomeMessage.textContent = "Good afternoon! Welcome to our community.";
} else {
    welcomeMessage.textContent = "Good evening! May peace be with you.";
}

// Google Map Integration
function initMap() {
    const churchLocation = { lat: 40.7128, lng: -74.0060 }; // Use actual location coordinates

    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 15,
        center: churchLocation,
    });

    const marker = new google.maps.Marker({
        position: churchLocation,
        map: map,
        title: "Southern Baptist Church",
    });
    
    // Real-time Event Updates (Example using Google Places API)
    const service = new google.maps.places.PlacesService(map);
    const request = {
        location: churchLocation,
        radius: '5000',  // 5km radius for nearby events/services
        type: ['church']
    };
    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach(function(place) {
                new google.maps.Marker({
                    position: place.geometry.location,
                    map: map,
                    title: place.name
                });
            });
        }
    });
}

// Donation Cart Logic
const donationAmountField = document.getElementById("donation-amount");
const totalAmountField = document.getElementById("total-amount");

donationAmountField.addEventListener('input', function() {
    const amount = donationAmountField.value;
    totalAmountField.textContent = amount || 0;
});

// Form Validation (Enhanced Real-Time Validation)
const donationForm = document.getElementById("donation-form");

donationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const donationAmount = donationAmountField.value;

    if (donationAmount < 1) {
        alert("Donation amount must be greater than zero.");
    } else {
        alert(`Thank you for your donation of $${donationAmount}!`);
    }
});

// Search Filter for Content
const searchBar = document.getElementById("search-bar");

function searchContent() {
    const query = searchBar.value.toLowerCase();

    // Filtering Sermons, Events, and Testimonies
    const contentSections = document.querySelectorAll(".content");
    contentSections.forEach(section => {
        const textContent = section.textContent.toLowerCase();
        if (textContent.includes(query)) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}
