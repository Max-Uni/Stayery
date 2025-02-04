// script.js

document.addEventListener('DOMContentLoaded', () => {
    const roomType = document.getElementById('roomType');

    roomType.addEventListener('change', () => {
        alert(`Sie haben ${roomType.value} gewählt.`);
    });
});
