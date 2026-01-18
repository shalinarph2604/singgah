document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');

    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const destination = document.getElementById('destination').value.trim();
        window.location.href = `hotels.html?destination=${encodeURIComponent(destination)}`;
});
});