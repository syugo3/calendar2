document.addEventListener('DOMContentLoaded', () => {
    const confirmationDetails = document.getElementById('confirmation-details');
    const confirmationSelect = document.getElementById('confirmation-select');

    // URLからパラメータを取得
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const date = urlParams.get('date');

    // パラメータが正しく取得できているか確認
    console.log('名前:', name);
    console.log('メールアドレス:', email);
    console.log('電話番号:', phone);
    console.log('日付:', date);

    // 予約の詳細を表示
    if (name && email && phone && date) {
        confirmationDetails.innerHTML = `
            <p>名前: ${name}</p>
            <p>メールアドレス: ${email}</p>
            <p>電話番号: ${phone}</p>
            <p>日付: ${date}</p>
        `;
    } else {
        confirmationDetails.innerHTML = `<p>予約情報が正しく取得できませんでした。</p>`;
    }

    // 予約確定ボタンのイベントリスナー
    document.getElementById('confirmReservation').addEventListener('click', () => {
        alert('予約確定いたしました。');
        // ここで必要に応じてサーバーに予約情報を送信する処理を追加
        window.location.href = 'index.html';
    });
}); 