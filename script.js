// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrIP1FjW9zdw5KPwTquRipUMEZYBWfKeA",
  authDomain: "gnade-a66f0.firebaseapp.com",
  databaseURL: "https://gnade-a66f0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gnade-a66f0",
  storageBucket: "gnade-a66f0.firebasestorage.app",
  messagingSenderId: "735901227798",
  appId: "1:735901227798:web:7dce61c9926e76f4420e37"
};
// JavaScript code for waste classification and user data handling

// Waste Classification and Green Points

// Global Data for Countries (Mocked Data)
const countryWasteData = {
  "Afghanistan": 100,
  "Albania": 150,
  "Algeria": 200,
  "Andorra": 50,
  "Angola": 300,
  "Antigua and Barbuda": 75,
  "Argentina": 250,
  "Armenia": 180,
  "Australia": 500,
  "Austria": 400,
  "Azerbaijan": 160,
  "Bahamas": 120,
  "Bahrain": 80,
  "Bangladesh": 250,
  "Barbados": 110,
  "Belarus": 130,
  "Belgium": 450,
  "Belize": 70,
  "Benin": 200,
  "Bhutan": 60,
  "Bolivia": 220,
  "Bosnia and Herzegovina": 140,
  "Botswana": 180,
  "Brazil": 200,
  "Brunei": 50,
  "Bulgaria": 300,
  "Burkina Faso": 50,
  "Burundi": 40,
  "Cabo Verde": 60,
  "Cambodia": 150,
  "Cameroon": 180,
  "Canada": 300,
  "Central African Republic": 50,
  "Chad": 80,
  "Chile": 220,
  "China": 600,
  "Colombia": 300,
  "Comoros": 40,
  "Congo (Congo-Brazzaville)": 150,
  "Congo (Democratic Republic of the Congo)": 200,
  "Costa Rica": 180,
  "Croatia": 200,
  "Cuba": 150,
  "Cyprus": 120,
  "Czech Republic": 350,
  "Denmark": 400,
  "Djibouti": 40,
  "Dominica": 60,
  "Dominican Republic": 230,
  "Ecuador": 250,
  "Egypt": 400,
  "El Salvador": 220,
  "Equatorial Guinea": 100,
  "Eritrea": 40,
  "Estonia": 180,
  "Eswatini": 90,
  "Ethiopia": 250,
  "Fiji": 70,
  "Finland": 500,
  "France": 600,
  "Gabon": 100,
  "Gambia": 40,
  "Georgia": 150,
  "Germany": 400,
  "Ghana": 200,
  "Greece": 300,
  "Grenada": 50,
  "Guatemala": 250,
  "Guinea": 170,
  "Guinea-Bissau": 60,
  "Guyana": 90,
  "Haiti": 150,
  "Honduras": 200,
  "Hungary": 300,
  "Iceland": 80,
  "India": 700,
  "Indonesia": 450,
  "Iran": 400,
  "Iraq": 200,
  "Ireland": 350,
  "Israel": 450,
  "Italy": 500,
  "Jamaica": 120,
  "Japan": 600,
  "Jordan": 150,
  "Kazakhstan": 250,
  "Kenya": 200,
  "Kiribati": 20,
  "Korea, North": 100,
  "Korea, South": 450,
  "Kuwait": 300,
  "Kyrgyzstan": 100,
  "Laos": 150,
  "Latvia": 180,
  "Lebanon": 220,
  "Lesotho": 50,
  "Liberia": 70,
  "Libya": 180,
  "Liechtenstein": 30,
  "Lithuania": 180,
  "Luxembourg": 400,
  "Madagascar": 90,
  "Malawi": 80,
  "Malaysia": 400,
  "Maldives": 60,
  "Mali": 150,
  "Malta": 100,
  "Marshall Islands": 30,
  "Mauritania": 120,
  "Mauritius": 160,
  "Mexico": 450,
  "Micronesia": 40,
  "Moldova": 90,
  "Monaco": 50,
  "Mongolia": 150,
  "Montenegro": 100,
  "Morocco": 300,
  "Mozambique": 200,
  "Myanmar (Burma)": 250,
  "Namibia": 150,
  "Nauru": 40,
  "Nepal": 100,
  "Netherlands": 500,
  "New Zealand": 400,
  "Nicaragua": 200,
  "Niger": 70,
  "Nigeria": 300,
  "North Macedonia": 120,
  "Norway": 500,
  "Oman": 180,
  "Pakistan": 600,
  "Palau": 30,
  "Panama": 150,
  "Papua New Guinea": 120,
  "Paraguay": 180,
  "Peru": 350,
  "Philippines": 400,
  "Poland": 500,
  "Portugal": 350,
  "Qatar": 300,
  "Romania": 300,
  "Russia": 600,
  "Rwanda": 100,
  "Saint Kitts and Nevis": 40,
  "Saint Lucia": 70,
  "Saint Vincent and the Grenadines": 50,
  "Samoa": 40,
  "San Marino": 20,
  "Sao Tome and Principe": 30,
  "Saudi Arabia": 400,
  "Senegal": 200,
  "Serbia": 250,
  "Seychelles": 30,
  "Sierra Leone": 150,
  "Singapore": 500,
  "Slovakia": 250,
  "Slovenia": 200,
  "Solomon Islands": 40,
  "Somalia": 100,
  "South Africa": 500,
  "South Sudan": 50,
  "Spain": 600,
  "Sri Lanka": 250,
  "Sudan": 150,
  "Suriname": 90,
  "Sweden": 600,
  "Switzerland": 450,
  "Syria": 200,
  "Taiwan": 450,
  "Tajikistan": 100,
  "Tanzania": 200,
  "Thailand": 350,
  "Timor-Leste": 60,
  "Togo": 80,
  "Tonga": 20,
  "Trinidad and Tobago": 150,
  "Tunisia": 250,
  "Turkey": 500,
  "Turkmenistan": 150,
  "Tuvalu": 30,
  "Uganda": 180,
  "Ukraine": 400,
  "United Arab Emirates": 500,
  "United Kingdom": 600,
  "United States of America": 500,
  "Uruguay": 250,
  "Uzbekistan": 200,
  "Vanuatu": 30,
  "Vatican City": 10,
  "Venezuela": 300,
  "Vietnam": 450,
  "Yemen": 100,
  "Zambia": 150,
  "Zimbabwe": 200
};

// Render Bar Chart for Country Leaderboard
function renderCountryChart() {
  const ctx = document.getElementById('countryChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(countryWasteData),
      datasets: [{
        label: 'Waste Sorted (kg)',
        data: Object.values(countryWasteData),
        backgroundColor: [
                    '#66bb6a', '#4caf50', '#388e3c', '#81c784', '#2e7d32', '#1b5e20'
                ],
        borderWidth: 1,
        borderColor: '#2e7d32',
            }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Waste Sorted (kg)',
            color: '#388e3c',
            font: { size: 14, weight: 'bold' }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}


if (window.location.pathname.includes('leaderboard.html')) {
  renderCountryChart(); // Render the bar chart

}

if (window.location.pathname.includes('dashboard.html')) {
  document.getElementById('greenPoints').textContent = localStorage.getItem('point') || 0;
  document.getElementById('divertedWaste').textContent = localStorage.getItem('kg') || 0;
}
// Image Preview Function
function previewImage(event) {
  const preview = document.getElementById('preview');
  preview.src = URL.createObjectURL(event.target.files[0]);
  preview.style.display = 'block';
  preview.onload = () => URL.revokeObjectURL(preview.src);

  encodeImage();
}

let base64Image = null;

function encodeImage() {
  const input = document.querySelector('.file-input');
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = function() {
      // The result will be the Base64 encoded string of the image
      base64Image = reader.result.split(',')[1]; // Remove the data:image part
    };

    // Read the image as a Data URL (Base64)
    reader.readAsDataURL(file);
  } else {
    console.log('No file selected');
  }
}

function proceed() {
  if (base64Image !== null && base64Image !== '' && base64Image !== 'null') {
    localStorage.setItem('img', base64Image);
    window.location.href = `result.html`;
  }
}