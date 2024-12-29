// alert("noi dung muon thong bao")
document.getElementById("btnLogin").addEventListener('click', function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Xử lý phần login
    if (!localStorage.getItem('users')) {
        alert("Đăng nhập thất bại!")
    } 
    let users = JSON.parse(localStorage.getItem('users'));
    let dem = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            alert("Đăng nhập thành công!");
            window.location.href = "home/home.html"; 
        } else {
            dem = dem + 1;
        }
    }
    if (dem == users.length) {
        alert("Đăng nhập thất bại!")
    }
});
document.getElementById('btnLogin').addEventListener('click', function () {
    // Chuyển hướng sang trang home
    window.location.href = "../home/home.html";
});
