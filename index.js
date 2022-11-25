//BÀI TẬP 1: TÍNH TIỀN LƯƠNG

// hàm tính lương
function tinhLuong(){
    //Bước 1: lấy và gán giá trị nhập vào biến giaTriNum
    var giaTriNum = document.getElementById("ngayCong");
    //Bước 2: tính số tiền lương;
    var tienLuong = giaTriNum.value * 100000; 
    //Bước 3: hiển thị số tiền lương ra màn hình
    document.getElementById("showArea").innerHTML = tienLuong;
}



//BÀI TẬP 2: TÍNH GIÁ TRỊ TRUNG BÌNH

//Hàm tính trung bình cộng
function trungBinhCong() {
    //Bước 1: tạo 5 biến chứa 5 giá trị
    var so1 = null;
    var so2 = null;
    var so3 = null;
    var so4 = null;
    var so5 = null;
    //Bước 2: Lưu giá trị của từng số vào các biến từ so1 tới so5
    so1 = document.getElementById("so1").value * 1;
    so2 = document.getElementById("so2").value * 1;
    so3 = document.getElementById("so3").value * 1;
    so4 = document.getElementById("so4").value * 1;
    so5 = document.getElementById("so5").value * 1;
    //Bước 3: xuất ra console để kiểm tra các số có được nhập vào hay không
    console.log(so1 , so2 , so3 , so4 , so5);
    //Bước 4: Hiển thị trung bình cộng ra màn hình
    document.getElementById("showArea2").innerHTML = Math.floor((so1 + so2 + so3 + so4 + so5) / 5);
}



//BÀI TẬP 3: QUY ĐỔI TIỀN

//Hàm quy đổi tiền
function doiTien(){
    //Bước 1: lấy và gán giá trị nhập vào biến giaTriNum
    var giaTriNum = document.getElementById("soTien");
    //Bước 2: quy đổi sang VND
    var quydoi = giaTriNum.value * 23500;
    //Bước 3: hiển thị số tiền đã được quy đổi ra màn hình
    document.getElementById("showArea3").innerHTML = quydoi;
}



//BÀI TẬP 4: TÍNH CHU VI HÌNH CHỮ NHẬT

//Hàm tính chu vi hình chữ nhật
function chuVi() {
    //Bước 1: tạo 2 biến chieuDai và chieuRong
    var chieuDai = null;
    var chieuRong = null;
    //Bước 2: lưu giá trị được nhập vào 2 biến chieuDai và chieuRong
    chieuDai = document.getElementById("chieuDai").value * 1;
    chieuRong = document.getElementById("chieuRong").value * 1;
    //Bước 3: in ra console để kiểm tra lại giá trị đã nhập vào
    console.log("chieu dai:", chieuDai);
    console.log("chieu rong:", chieuRong);
    //Bước 4: hiển thị chu vi ra màn hình
    document.getElementById("showArea4").innerHTML = (chieuDai + chieuRong) * 2;
}


//BÀI TẬP 5: TÍNH TỔNG 2 KÝ SỐ

//Hàm tính tổng 2 ký số
function tinhTong() {
    //Bước 1: tạo 2 biến donVi và chuc
    var donVi = null;
    var chuc = null;
    //Bước 2: lưu giá trị hàng đơn vị và chục vào 2 biến đã tạo
    donVi = (document.getElementById("soLieu").value * 1) % 10;
    chuc = ((document.getElementById("soLieu").value * 1) - donVi) / 10;
    //Bước 3: in ra console để kiểm tra giá trị đã nhập
    console.log("chữ số hàng chục là: ",chuc);
    console.log("chữ số hàng đơn vị là: ",donVi);
    //Bước 4: hiển thị tổng 2 ký số ra màn hình
    document.getElementById("showArea5").innerHTML = donVi + chuc;
}