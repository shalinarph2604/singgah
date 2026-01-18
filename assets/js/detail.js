// Mengambil ID hotel dari parameter URL
const params = new URLSearchParams(window.location.search);
const hotelId = params.get('id');

// Mencari data SATU hotel berdasarkan ID
const hotel = hotels.find(h => h.id === Number(hotelId));

const priceFormatted = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
};

const detailsHotel = document.getElementById('hotelDetailsBody');

detailsHotel.innerHTML = `
    <tr>
        <td>${hotel.name}</td>
        <td>${hotel.location}</td>
        <td>${priceFormatted(hotel.price)}</td>
        <td>${hotel.available}</td>
    </tr>
`;