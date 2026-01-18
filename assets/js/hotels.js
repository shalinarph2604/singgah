const hotelsContainer = document.getElementById('hotelsContainer');

const params = new URLSearchParams(window.location.search);
const destination = params.get('destination');

const priceFormatted = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
};

function displayResults(hotels) {
    hotelsContainer.innerHTML = "";

    if (hotels.length === 0) {
        hotelsContainer.innerHTML = "<p>Penginapan tidak ditemukan</p>";
        return;
    }
    
    hotels.forEach(hotel => {
        hotelsContainer.innerHTML += `
        <a href="detail.html?id=${hotel.id}"
            class="hotel-card"
            style="
                max-width: 320px;
                width: 100%;
                height: 350px;
                overflow: hidden;
                border: 1px solid #ccc; 
                border-radius: 10px; 
                padding: 15px; 
                background-color: #F0EBCE;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                cursor: pointer;
                display: flex;
                flex-direction: column;
            "
        >
            <img  
                src="${hotel.imageUrl}" alt="${hotel.name}"
                style="
                    width:100%;
                    height:200px;
                    object-fit:cover;
                    margin-bottom:8px;
                "
            >
            <h2 class="hotel-name"
                style="
                    color: #AA8B56;
                    font-size: 20px;
                    margin-bottom: 8px;
                "
            >
                ${hotel.name}
            </h2>
            <p class="hotel-desc"
                style="
                    color: #505050;
                    margin-bottom: 8px;
                    font-size: 16px;
                "
            >
                ${hotel.desc}
            </p>
            <div class="hotel-info"
                style="
                    margin-top: auto;
                "
            >
                <p class="hotel-price"
                    style="
                        font-weight: bold;
                        color: #395144;
                        bottom: 0;
                    "
                >
                    <span>${priceFormatted(hotel.price)}</span>/night
                </p>
            </div>
        </a>
    `;})
    }

let dataToRender = hotels;

if (destination) {
    dataToRender = hotels.filter(hotel =>
        hotel.location.toLowerCase().includes(destination.toLowerCase())
    );
}

displayResults(dataToRender);
