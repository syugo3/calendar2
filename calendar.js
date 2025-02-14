document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('calendar-container');
    const calendarTitle = document.getElementById('calendar-title');
    let currentDate = new Date();
    let reservations = {}; // 日付の予約状況を管理するオブジェクト

    function updateCalendar() {
         // 現在の月と年を取得
         const year = currentDate.getFullYear();
         const month = currentDate.getMonth();
         const firstDay = new Date(year, month - 1, 1);
         const lastDay = new Date(year, month, 0);

        let calendarHTML = '<table class="calendar">'; // テーブルの開始
        calendarHTML += '<tr><th colspan="7">' + year + '年 ' + month + '月</th></tr>';
        calendarHTML += '<tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>';

        // 空のセルを追加
        for (let i = 0; i < firstDay.getDay(); i++) {
            calendarHTML += '<td></td>'; // 空のセル
        }

        // 日付を表示
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const dateString = `${year}-${month}-${day}`;
            const dateObj = new Date(year, month - 1, day);
            const dayOfWeek = dateObj.toLocaleString('ja-JP', { weekday: 'short' }); // 曜日を取得（短縮形）

            // 曜日によってクラスを変更
            let dayClass = '';
            if (dayOfWeek === '日') {
                dayClass = 'sunday'; // 日曜日のクラス
            } else if (dayOfWeek === '土') {
                dayClass = 'saturday'; // 土曜日のクラス
            }

            calendarHTML += `
                <td class="calendar-day" data-date="${dateString}">
                    ${day}<br>
                    <span class="day-of-week ${dayClass}">(${dayOfWeek})</span><br> <!-- 曜日を表示 -->
                    <span class="select-buttons" onclick="selectDate('${dateString}')">⭕️</span> <!-- ⭕️だけを表示 -->
                </td>`;
            
            // 週の終わりで改行
            if ((day + firstDay.getDay()) % 7 === 0) {
                calendarHTML += '</tr><tr>'; // 週の終わりで改行
            }
        }

        calendarHTML += '</tr></table>'; // テーブルの終了
        calendarContainer.innerHTML = calendarHTML; // カレンダーを追加
    }
   

    // 日付を選択する関数
    window.selectDate = function(date) {
        window.location.href = `reservation.html?date=${date}`; // 予約フォームページに遷移
    };

    function showReservationForm(date) {
        const reservationForm = document.getElementById('reservation-form');
        const selectedDateInput = document.getElementById('selected-date');
        selectedDateInput.value = date; // 選択した日付をフォームに設定
        reservationForm.style.display = 'block'; // フォームを表示
    }
    // 初期表示
    updateCalendar();
});