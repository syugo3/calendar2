// Firebaseの設定
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
    const loginForm = document.getElementById('loginForm');
    const signupButton = document.getElementById('signupButton');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Firebase Authenticationを使用してログイン
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('ログイン成功');
                window.location.href = 'calendar.html';
            })
            .catch((error) => {
                console.error('ログインエラー:', error);
                alert('メールアドレスまたはパスワードが無効です');
            });
    });

    // 新規登録ボタンのクリックイベント
    signupButton.addEventListener('click', () => {
        console.log('新規登録ボタンがクリックされました'); // デバッグ用
        window.location.href = 'signup.html'; // 新規登録画面に遷移
    });
});
