document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    // ハードコーディングされたユーザー情報
    const validUser = {
        email: 'syugo3@gmail.com',
        password: 'touyama'
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // ローカルで認証チェック
        if (email === validUser.email && password === validUser.password) {
            alert('ログイン成功');
            window.location.href = 'calendar.html'; // 予約カレンダーページに遷移
        } else {
            alert('メールアドレスまたはパスワードが無効です');
        }
    });
});
