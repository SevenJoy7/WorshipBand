// ẩn hiện active
var navLinks = document.getElementsByClassName("nav-link");

function hienNav () {
    modal.classList.add('active');
}

for (const navLink of navLinks) {
    navLinks.addEventListener('click', hienNav);
}

function anNav() {
    navLinks.classList.remove('active');
}

//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;

function showSlides() { // Khai bào hàm hiển thị slide
    var i;
    var slides = document.getElementsByClassName("slidershow");
    var dots = document.getElementsByClassName("dot-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    slideIndex++; //chuyển đến slide tiếp theo
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    setTimeout(showSlides, 4000); //tự động chuyển đổi slide sau 5s
}

showSlides(slideIndex = 0); //mặc định hiển thị slide đầu tiên 
//nhấn nút dot nào sẽ hiện hình đó
function currentSlide(n) {
    showSlides(slideIndex = n);
}



//  mobile-menu
var header = document.querySelector('#header');
var mobileMenu = document.querySelector('.mobile-menu');
var headerHeight = header.clientHeight;
//đóng mở menu
mobileMenu.onclick = function() {
        var isClosed = header.clientHeight === headerHeight;
        if (isClosed) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
    }
//tự động đóng menu khi chọn
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}

// modal buy-tickets
const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.js-modal-container');
const closeModal = document.querySelector('.js-modal-close');

function showModalTicket() {
    modal.classList.add('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModalTicket);
}

function hiddenBuyTicket() {
    modal.classList.remove('open');
}

closeModal.addEventListener('click', hiddenBuyTicket);
modal.addEventListener('click', hiddenBuyTicket);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation(); //ngăn chặn nổi bột
});