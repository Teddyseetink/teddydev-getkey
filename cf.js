// --- CẤU HÌNH ---
const LINK_1 = "https://google.com";
const LINK_2 = "https://youtube.com";
const FINAL_KEY = "TEDDY-HUB-VIP-2026";

const msg = document.getElementById("message");
const btn = document.getElementById("action-btn");
const keyBox = document.getElementById("key-container");
const keyInput = document.getElementById("key-value");
const copyBtn = document.querySelector(".copy-btn"); // Lấy nút copy

let step = 1;

function startProcess() {
    // Hiệu ứng âm thanh khi bấm (nếu muốn sau này thêm vào)
    
    if (step === 1) {
        btn.disabled = true;
        btn.style.opacity = "0.7";
        btn.style.cursor = "not-allowed"; // Đổi con trỏ chuột
        
        let time = 5;
        msg.innerHTML = `Đang kiểm tra dữ liệu... <br>Vui lòng chờ <b style='color:#b026ff; font-size: 20px'>${time}s</b>`;

        let timer = setInterval(() => {
            time--;
            msg.innerHTML = `Đang kiểm tra dữ liệu... <br>Vui lòng chờ <b style='color:#b026ff; font-size: 20px'>${time}s</b>`;

            if (time <= 0) {
                clearInterval(timer);
                window.open(LINK_1, '_blank');
                
                step = 2;
                msg.innerText = "Hoàn thành bước 1. Bấm nút để tiếp tục!";
                btn.innerText = "TIẾP TỤC BƯỚC 2";
                btn.disabled = false;
                btn.style.opacity = "1";
                btn.style.cursor = "pointer";
                
                // Hiệu ứng rung nhẹ nút bấm để gây chú ý
                btn.style.animation = "shake 0.5s";
                setTimeout(() => { btn.style.animation = ""; }, 500);
            }
        }, 1000);
    } 
    else if (step === 2) {
        btn.disabled = true;
        btn.style.opacity = "0.7";
        btn.style.cursor = "not-allowed";
        
        let time = 5;
        msg.innerHTML = `Đang lấy Key từ Server... <br>Vui lòng chờ <b style='color:#b026ff; font-size: 20px'>${time}s</b>`;

        let timer = setInterval(() => {
            time--;
            msg.innerHTML = `Đang lấy Key từ Server... <br>Vui lòng chờ <b style='color:#b026ff; font-size: 20px'>${time}s</b>`;

            if (time <= 0) {
                clearInterval(timer);
                window.open(LINK_2, '_blank');
                finish();
            }
        }, 1000);
    }
}

function finish() {
    step = 3;
    msg.innerHTML = "<b style='color:#00ffcc; font-size: 18px'>XÁC MINH THÀNH CÔNG!</b>";
    btn.style.display = "none";
    keyBox.style.display = "block";
    keyInput.value = FINAL_KEY;
}

function copyKey() {
    // 1. Copy text
    keyInput.select();
    keyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(keyInput.value);
    
    // 2. Hiệu ứng đổi nút
    const originalText = copyBtn.innerText;
    
    copyBtn.innerText = "ĐÃ COPY!";
    copyBtn.style.background = "#00ffcc";
    copyBtn.style.color = "black";
    copyBtn.style.boxShadow = "0 0 15px #00ffcc"; // Phát sáng xanh khi copy
    
    // 3. Trả về bình thường sau 2 giây
    setTimeout(() => {
        copyBtn.innerText = "COPY";
        copyBtn.style.background = "#333";
        copyBtn.style.color = "white";
        copyBtn.style.boxShadow = "none";
    }, 2000);
}
