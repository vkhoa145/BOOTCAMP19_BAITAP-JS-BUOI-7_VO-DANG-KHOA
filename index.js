// Cho người dùng nhập số lượng sô nguyên cần có trong mảng 
// Từ số lượng N đó tạo ra số lượng thẻ input tương ứng 
let a = "34,-556,-34,6,29,2,7";
const aStr = a.split(',').map(Number);
console.log(aStr)
// Tổng các số dương

const tinhTong = aStr.reduce((tong,i) => {
    if (i > 0) {
        tong += i;
    }
    return tong;
},0)
console.log(tinhTong);

// Đếm có bao nhiêu số dương trong mảng 
const demSoDuong = aStr.reduce((count,i) => {
    if (i > 0) {
        count++;
    }
    return count;
},0)
console.log(demSoDuong)


// Tìm số nhỏ nhất trong mảng 
const timSoNhoNhat = aStr.reduce((min,i) => {
    return (min < i)? min:i
},0)

console.log(timSoNhoNhat)

// Tìm số dương nhỏ nhất 
const soDuongNhoNhat = aStr.reduce((maxPositive,i) => {
    if (i > 0) {
        return (maxPositive < i)? maxPositive:i
    }
},0)
console.log(soDuongNhoNhat)
// Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
// hàm xác định số chẵn 
function kiemTraSoChan (n) {
    if (n % 2 == 0) {
        return true;
    }
}
// Hàm xác định vị trí cuối
function viTriCuoi (aStr) {
    for (let i = aStr.length -1; i >= 0; i--) {
        if (kiemTraSoChan(aStr[i]) === true) {
            return aStr[i]
        } else {
            return -1;
        }
    }
}
console.log(viTriCuoi(aStr))

// Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi giá trj)




// Sắp xếp mảng theo thứ tự tăng dần 
const sapXepTangDan = aStr.sort();
console.log(sapXepTangDan)

// Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về -1
// Kiểm tra số nguyên tố 
// function soNguyenTo (n) {
//     let flag = true;
//     if (n < 2) {
//         return flag = false;

//     } else {
//         for (let i = 2; i < n-1;i++) {
//             if (n % i == 0) {
//                 return flag = false;
                
//             }
//         }
//     } 
// }
// function timsoNguyenTo (aStr){
//     for (let i = 0;i < aStr.length;i++) {
//         if (soNguyento(aStr[i])=== true) {
//             return aStr[i];
//         } 
//         return -1;
//     }
// }
// console.log(timsoNguyenTo(aStr));

// Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên ?
let b = "34,-556,-9.03,0.78,0.5,2,7";
const bStr = b.split(',').map(Number);
console.log(bStr)
const demSoNguyen = bStr.reduce((count,i) => {
    if (Number.isInteger(i) === true) {
        count++;
    }
    return count;
},0)
console.log(demSoNguyen)
// So sánh số lượng số dương và sô lượng sô âm xem số nào nhiều hơn 
const demSoChan = aStr.reduce((countSoChan,i) => {
    if (i %2 == 0) {
        countSoChan++;
    }
    return countSoChan;
},0)
const demSoLe = aStr.reduce((countSoLe,i) => {
    if (i %2 !== 0) {
        countSoLe++;
    }
    return countSoLe;
},0)
function soSanh (demSoChan,demSoLe) {
    return (demSoChan > demSoLe)? 'số chẵn lớn hơn số lẻ':'số chẵn nhỏ hơn số lẻ'
}
console.log(soSanh(demSoChan,demSoLe));