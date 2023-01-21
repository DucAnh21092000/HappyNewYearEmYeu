//          Tác giả : Đinh Đức Anh
//          Mail    : anh.dd182330@sis.hust.edu.vn
//                    dinhanh21092000@gmail.com

// Object chứa giá trị cần hiển thị
let initialValue = {
    year: "2023",
    content: "Happy New Year !!",
    icon: " ❤❤❤❤",
    mess: "Chúc mừng năm mới bé yêu! /" +
        "Chúc bé năm mới vui vẻ, luôn mỉm cười, gặp nhiều thành công trong cuộc sống."
        +"/ Cùng nhau khắc phục những gì chưa tốt nhé,hạ cái tôi xuống, bớt nóng giận, lắng nghe nhau nhiều hơn,..."
        + "/ Hi vọng em sẽ yêu và quan tâm anh nhiều hơn. Anh yêu em ❤️ "

}

const year = document.querySelector('.year')
const content = document.querySelector('.content')
const icon = document.querySelector('.icon')
const mess = document.querySelector('.mess')

let arrYear = initialValue.year.split('')
let arrContent = (initialValue.content.split(""))
let arrIcon = initialValue.icon.split('')
let arrMess = initialValue.mess.split('')

let arrYearResult = []
let arrContentResult = []
let arrIconResult = []
let arrMessResult = []

// Hiển thị tin nhắn muốn hiển thị
const displayMess = () => {
    setTimeout(() => {
        const timeOut = setInterval(() => {
            let arrShift = arrMess.shift()
            if (arrShift == '/') {
                arrMessResult.push('<br>')
            }
            else {
                arrMessResult.push(arrShift)
            }
            mess.innerHTML = arrMessResult.join("")
            if (arrMess.length == 0) {
                clearInterval(timeOut)
                displayIcon()
            }
        }, 300) // thời gian lấy ra từng chữ 1 và hiển thị
    }, 1000) // thời gian delay
}

// Hiển thị nội dung lời chúc
const displayContent = () => {
    setTimeout(() => {
        const timeOut = setInterval(() => {
            arrContentResult.push(arrContent.shift())
            content.innerHTML = arrContentResult.join("")

            if (arrContent.length == 0) {
                clearInterval(timeOut)
                displayMess()
            }
        }, 500)
    }, 1000)
}

// hiển thị icon
const displayIcon = () => {
    setTimeout(() => {
        const timeOut = setInterval(() => {
            arrIconResult.push(arrIcon.shift())
            icon.innerHTML = arrIconResult.join("")

            if (arrIcon.length == 0) {
                clearInterval(timeOut)

            }
        }, 100)
    }, 600)
}

// function chạy đầu tiên
function display() {
    setTimeout(() => {
        const timeOut = setInterval(() => {
            arrYearResult.push(arrYear.shift())
            year.classList.add('.animation')
            year.innerHTML = arrYearResult.join("")
            year.classList.remove('.animation')
            if (arrYear.length == 0) {
                clearInterval(timeOut)
                displayContent()
            }
        }, 1000)
    }, 2000)


}

