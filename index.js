// Hiển thị mảng nhập vào lên web page
const arrayDisplayEl = document.getElementById("arrayDisplay").onclick = function (arrayEve) {
    console.log(arrayEve.target);
    
    // Lấy dữ liệu từ người dùng nhập vào 
    const arrayDefaultEl = document.getElementById("defaultArray").value; 
    // Chuyển đổi kiểu dữ liệu từ text thành mảng
    const Arr = arrayDefaultEl.split(',').map(Number);
    
   
    // Hiển thị kết quả ra màn hình
    const defaultWrapperEl = document.getElementById("default-wrapper");
    defaultWrapperEl.style.display = "block";

    const defaultResultEl = document.getElementById("defaultArray-result");
    defaultResultEl.innerHTML = JSON.stringify(Arr)

}


// 1.Tổng các số dương
const bai1El = document.getElementById("bai1-click").onclick = function (bai1Eve) {
    console.log(bai1Eve.target);
    
    // Lấy dữ liệu từ người dùng nhập vào 
    const arrayDefaultEl = document.getElementById("defaultArray").value; 
    // Chuyển đổi kiểu dữ liệu từ text thành mảng
    const Arr = arrayDefaultEl.split(',').map(Number);
    // Tính tổng số dương trong mảng 
    const tinhTong = Arr.reduce((tong,i) => {
        if (i > 0) {
            tong += i;
        }
        return tong;
    },0)
    // Hiển thị kết quả ra màn hình
    const bai1WrapperEl = document.getElementById("bai1-wrapper");
    bai1WrapperEl.style.display = "block";

    const bai1ResultEl = document.getElementById("bai1-result");
    bai1ResultEl.innerHTML = tinhTong.toLocaleString();

}

// 2.Đếm có bao nhiêu số dương trong mảng 
const bai2El = document.getElementById("bai2-click").onclick = function (bai2Eve) {
    console.log(bai2Eve.target);
    
    // Lấy dữ liệu từ người dùng nhập vào 
    const arrayDefaultEl = document.getElementById("defaultArray").value; 
    // Chuyển đổi kiểu dữ liệu từ text thành mảng
    const Arr = arrayDefaultEl.split(',').map(Number);
    // Đếm số dương trong mảng 
    const demSoDuong = Arr.reduce((count,i) => {
        if (i > 0) {
            count++;
        }
        return count;
    },0)
    // Hiển thị kết quả ra màn hình
    const bai2WrapperEl = document.getElementById("bai2-wrapper");
    bai2WrapperEl.style.display = "block";

    const bai2ResultEl = document.getElementById("bai2-result");
    bai2ResultEl.innerHTML = demSoDuong.toLocaleString();

}

// 3.Tìm số nhỏ nhất trong mảng 
const bai3El = document.getElementById("bai3-click").onclick = function (bai3Eve) {
    console.log(bai3Eve.target);
    
    // Lấy dữ liệu từ người dùng nhập vào 
    const arrayDefaultEl = document.getElementById("defaultArray").value; 
    // Chuyển đổi kiểu dữ liệu từ text thành mảng
    const Arr = arrayDefaultEl.split(',').map(Number);
    // Số nhỏ nhất trong mảng 
    const timSoNhoNhat = Arr.reduce((min,i) => {
        return (min < i)? min:i
    },0)
    // Hiển thị kết quả ra màn hình
    const bai3WrapperEl = document.getElementById("bai3-wrapper");
    bai3WrapperEl.style.display = "block";

    const bai3ResultEl = document.getElementById("bai3-result");
    bai3ResultEl.innerHTML = timSoNhoNhat.toLocaleString();

}
// 4.Tìm số dương nhỏ nhất 
const bai4El = document.getElementById("bai4-click").onclick = function (bai4Eve) {
    console.log(bai4Eve.target);
    
    // Lấy dữ liệu từ người dùng nhập vào 
    const arrayDefaultEl = document.getElementById("defaultArray").value; 
    // Chuyển đổi kiểu dữ liệu từ text thành mảng
    const Arr = arrayDefaultEl.split(',').map(Number);
    // Số dương nhỏ nhất trong mảng 
    const soDuongNhoNhat = Arr.reduce((maxPositive,i) => {
        if (i > 0) {
            return (maxPositive < i)? maxPositive:i
        }
    },0)
    // Hiển thị kết quả ra màn hình
    const bai4WrapperEl = document.getElementById("bai4-wrapper");
    bai4WrapperEl.style.display = "block";

    const bai4ResultEl = document.getElementById("bai4-result");
    bai4ResultEl.innerHTML = soDuongNhoNhat.toLocaleString();

}

// 5.Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
const bai5El = document.getElementById("bai5-click").onclick = function (bai5Eve) {
    console.log(bai5Eve.target);
    
    // Lấy dữ liệu từ người dùng nhập vào 
    const arrayDefaultEl = document.getElementById("defaultArray").value; 
    // Chuyển đổi kiểu dữ liệu từ text thành mảng
    const Arr = arrayDefaultEl.split(',').map(Number);
    // hàm kiểm tra số chẵn 
    function kiemTraSoChan (n) {
        if (n % 2 == 0) {
            return true;
        }
    }
    // Hàm xác định vị trí cuối
    const viTriCuoi = function (Arr) {
        
        for (let i = Arr.length -1; i >= 0; i--) {
             if (kiemTraSoChan(Arr[i]) === true) {
                 return Arr[i]
            } else {
                return -1;
            }
        }
    }
    // Hiển thị kết quả ra màn hình
    const bai5WrapperEl = document.getElementById("bai5-wrapper");
    bai5WrapperEl.style.display = "block";

    const bai5ResultEl = document.getElementById("bai5-result");
    bai5ResultEl.innerHTML = viTriCuoi(Arr).toLocaleString();

}

// 6.Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi giá trj)
const bai6El = document.getElementById("bai6-click").onclick = function (bai6Eve) {
    console.log(bai6Eve.target);
    
    // Lấy dữ liệu từ người dùng nhập vào 
    const arrayDefaultEl = document.getElementById("defaultArray").value; 
    // Chuyển đổi kiểu dữ liệu từ text thành mảng
    const Arr = arrayDefaultEl.split(',').map(Number);
    // Nhập vào vị trí 1 
    const firstPositionEl = +document.getElementById("first-position").value; 
    const secondPositionEl = +document.getElementById("second-position").value; 
    // Hàm đổi vị trí 

    [Arr[firstPositionEl],Arr[secondPositionEl]]=[Arr[firstPositionEl]=Arr[secondPositionEl]];

    // Hiển thị kết quả ra màn hình
    const bai6WrapperEl = document.getElementById("bai6-wrapper");
    bai6WrapperEl.style.display = "block";

    const bai6ResultEl = document.getElementById("bai6-result");
    bai6ResultEl.innerHTML = JSON.stringify(Arr)

}
// 7.Sắp xếp mảng theo thứ tự tăng dần
const bai7El = document.getElementById("bai7-click").onclick = function (bai7Eve) {
    console.log(bai7Eve.target);
    
    // Lấy dữ liệu từ người dùng nhập vào 
    const arrayDefaultEl = document.getElementById("defaultArray").value; 
    // Chuyển đổi kiểu dữ liệu từ text thành mảng
    const Arr = arrayDefaultEl.split(',').map(Number);
    // Sắp xếp theo thứ tự từ nhỏ tới lớn 
    const sapXepTangDan = Arr.sort();

    // Hiển thị kết quả ra màn hình
    const bai7WrapperEl = document.getElementById("bai7-wrapper");
    bai7WrapperEl.style.display = "block";

    const bai7ResultEl = document.getElementById("bai7-result");
    bai7ResultEl.innerHTML = sapXepTangDan.toLocaleString();

}

// 8.Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về -1
const bai8El = document.getElementById("bai8-click").onclick = function (bai8Eve) {
    console.log(bai8Eve.target);
    
    // Lấy dữ liệu từ người dùng nhập vào 
    const arrayDefaultEl = document.getElementById("defaultArray").value; 
    // Chuyển đổi kiểu dữ liệu từ text thành mảng
    const Arr = arrayDefaultEl.split(',').map(Number);
    // Tìm số nguyên tố nhỏ nhất của mảng 
    function soNguyenTo (n) {
        let flag = true;
        if (n < 2) {
            return flag = false;
    
        } else {
            for (let i = 2; i < n-1;i++) {
                if (n % i == 0) {
                    return flag = false;
                    
                }
            }
        } 
    }
    function timsoNguyenTo (Arr){
        for (let i = 0;i < Arr.length;i++) {
            if (soNguyento(Arr[i])=== true) {
                return Arr[i];
            } 
            return -1;
        }
    }

    // Hiển thị kết quả ra màn hình
    const bai8WrapperEl = document.getElementById("bai8-wrapper");
    bai8WrapperEl.style.display = "block";

    const bai8ResultEl = document.getElementById("bai8-result");
    bai8ResultEl.innerHTML = timsoNguyenTo(Arr).toLocaleString();

}

// 9.Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên ?
const bai9El = document.getElementById("bai9-click").onclick = function (bai9Eve) {
    console.log(bai9Eve.target);
    
    // Lấy dữ liệu từ người dùng nhập vào 
    const newArrayEl = document.getElementById("real-array").value; 
    // Chuyển đổi kiểu dữ liệu từ text thành mảng
    const NewArr = newArrayEl.split(',').map(Number);
    // Sắp xếp theo thứ tự từ nhỏ tới lớn 
    const demSoNguyen = bStr.reduce((count,i) => {
        if (Number.isInteger(i) === true) {
            count++;
        }
        return count;
    },0)

    // Hiển thị kết quả ra màn hình
    const bai9WrapperEl = document.getElementById("bai9-wrapper");
    bai9WrapperEl.style.display = "block";

    const bai9ResultEl = document.getElementById("bai9-result");
    bai9ResultEl.innerHTML = demSoNguyen.toLocaleString();

}
//10. So sánh số lượng số dương và sô lượng sô âm xem số nào nhiều hơn 
const bai10El = document.getElementById("bai10-click").onclick = function (bai10Eve) {
    console.log(bai10Eve.target);
    
    // Lấy dữ liệu từ người dùng nhập vào 
    const arrayDefaultEl = document.getElementById("defaultArray").value; 
    // Chuyển đổi kiểu dữ liệu từ text thành mảng
    const Arr = arrayDefaultEl.split(',').map(Number);
    // Sắp xếp theo thứ tự từ nhỏ tới lớn 
    const demSoChan = Arr.reduce((countSoChan,i) => {
        if (i %2 == 0) {
            countSoChan++;
        }
        return countSoChan;
    },0)
    const demSoLe = Arr.reduce((countSoLe,i) => {
        if (i %2 !== 0) {
            countSoLe++;
        }
        return countSoLe;
    },0)
    function soSanh (demSoChan,demSoLe) {
        return (demSoChan > demSoLe)? 'số chẵn lớn hơn số lẻ':'số chẵn nhỏ hơn số lẻ'
    }

    // Hiển thị kết quả ra màn hình
    const bai10WrapperEl = document.getElementById("bai10-wrapper");
    bai10WrapperEl.style.display = "block";

    const bai10ResultEl = document.getElementById("bai10-result");
    bai10ResultEl.innerHTML = soSanh(demSoChan,demSoLe).toLocaleString();

}




