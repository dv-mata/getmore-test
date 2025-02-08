const header = document.querySelector('header')

document.addEventListener('DOMContentLoaded', function () {
    initMenuSticky()

    const swiperLeftProduct = new Swiper('.productLeftSwiper', {
        slidesPerView: '1',
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        loop: false,
    })

    const swiperProducts = new Swiper('.productsSwiper', {
        slidesPerView: '3',
        spaceBetween: 31,
        centeredSlides: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        grabCursor: true,
        loop: true,
    })
})

function initMenuSticky() {
    let lastScrollY = window.scrollY
    const menuToggle = document.getElementById('menuToggle')
    const dropdown = document.getElementById('dropdown')

    window.addEventListener('scroll', function () {
        let currentScrollY = window.scrollY

        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active')
        }

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            header.classList.add('hidden')
        } else {
            header.classList.remove('hidden')
        }

        if (currentScrollY <= 50) {
            header.classList.remove('sticky', 'hidden')
        } else {
            header.classList.add('sticky')
        }

        lastScrollY = currentScrollY
    })

    // Dropdown menu
    menuToggle.addEventListener('click', function (e) {
        dropdown.classList.toggle('active')
        e.stopPropagation()
    })

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target) && !menuToggle.contains(event.target)) {
            dropdown.classList.remove('active')
        }
    })
}
