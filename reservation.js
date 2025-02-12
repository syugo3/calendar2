document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservation-form');
    const selectedDateInput = document.getElementById('selected-date');

    // URLから日付を取得
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDate = urlParams.get('date');
    selectedDateInput.value = selectedDate;

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reservation-name').value;
        const email = document.getElementById('reservation-email').value;
        const phone = document.getElementById('reservation-phone').value;

        // 予約確認ページに遷移
        window.location.href = `reservation-confirmation.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&date=${encodeURIComponent(selectedDate)}`;
    });
}); 