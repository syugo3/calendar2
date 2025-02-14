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
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (password.length < 6) {
            alert('パスワードは6文字以上で入力してください');
            return;
        }

        // Firebase Authenticationを使用してユーザー登録
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('ユーザー登録が完了しました');
                window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('登録エラー:', error);
                if (error.code === 'auth/weak-password') {
                    alert('パスワードは6文字以上で入力してください');
                } else {
                    alert('エラー: ' + error.message);
                }
            });
    });
}); 