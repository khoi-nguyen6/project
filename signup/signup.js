// alert("noi dung muon thong bao")
document.getElementById("btnSignUp").addEventListener('click', function () {
    let fullname = document.getElementById("fullname").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Xử lý phần đăng kí tài khoản
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', '[]');
    }
    let users = JSON.parse(localStorage.getItem('users'));
    users.push({
        fullname: fullname,
        username: username,
        password: password
    });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Đăng ký tài khoản thành công!")
});

/*
localStorage.getItem('users') : Lấy dữ liệu từ key users trong localStorage
localStorage.setItem('users', JSON.stringify(users)) : Gán dữ liệu vào key users trong localStorage dữ liệu sẽ được lưu dưới dạng chuỗi.
JSON.parse(localStorage.getItem('users')) : Chuyển dữ liệu từ chuỗi sang đối tượng
JSON.stringify(users) : Chuyển dữ liệu từ đối tượng sang chuỗi
users.push : Thêm 1 tài khoản nữa
*/
