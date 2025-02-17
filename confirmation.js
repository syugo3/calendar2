// Firebaseの設定を追加（ファイルの先頭に追加）
const firebaseConfig = {
    apiKey: "AIzaSyB1mZnfUrXesUadds4hGzUIK2u_tpCYPlQ",
    authDomain: "calendar-d1047.firebaseapp.com",
    projectId: "calendar-d1047",
    storageBucket: "calendar-d1047.appspot.com",
    messagingSenderId: "584516008910",
    appId: "1:584516008910:web:ee9b37913b85a3c465c99f"
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);

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
        // Firestoreに予約情報を保存
        firebase.firestore().collection('reservations').add({
            name: name,
            email: email,
            phone: phone,
            date: date,
            createdAt: new Date().toISOString()
        })
        .then(() => {
            console.log('予約情報がFirestoreに保存されました');
            alert('予約確定いたしました。');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Firestoreへの保存エラー:', error);
            alert('予約の保存中にエラーが発生しました: ' + error.message);
        });
    });
});