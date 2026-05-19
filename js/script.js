document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function openSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    const settingsToggle = document.getElementById('settingsToggle');
    const settingsPanel = document.getElementById('settingsPanel');
    const closeSettingsBtn = document.getElementById('closeSettings');
    const settingsOverlay = document.getElementById('settingsOverlay');

    function openSettings() {
        settingsPanel.classList.add('open');
        settingsOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeSettings() {
        settingsPanel.classList.remove('open');
        settingsOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (settingsToggle) settingsToggle.addEventListener('click', openSettings);
    if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', closeSettings);
    if (settingsOverlay) settingsOverlay.addEventListener('click', closeSettings);

    // ===== DARK MODE TOGGLE =====
    const darkModeCheckbox = document.getElementById('darkModeCheckbox');
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        if (darkModeCheckbox) darkModeCheckbox.checked = true;
    }

    if (darkModeCheckbox) {
        darkModeCheckbox.addEventListener('change', () => {
            if (darkModeCheckbox.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    window.addEventListener('scroll', () => {
        const header = document.getElementById('mainHeader');
        if (header) header.classList.toggle('scrolled', window.scrollY > 30);
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    document.querySelectorAll('.sidebar a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


function handleLogin(e) {
    e.preventDefault();
    alert('✅ Đăng nhập thành công! (Demo)');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function handleRegister(e) {
    e.preventDefault();
    alert('✅ Đăng ký thành công! Chào mừng bạn đến với Wanderlust.');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function handleContact(e) {
    e.preventDefault();
    alert('📨 Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
    e.target.reset();
}
function handleLogin(e) {
    e.preventDefault();
    alert('✅ Đăng nhập thành công! (Demo)');
    
    // Đóng sidebar nếu đang mở
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    // 👉 Chuyển hướng về trang chủ
    window.location.href = 'index.html';
}

let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides((slideIndex += n));
        }

        function currentSlide(n) {
            showSlides((slideIndex = n));
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName('slidefade');
            let dots = document.getElementsByClassName('dot');
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(' active', '');
            }
            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].className += ' active';
        }

        setInterval(() => {
            plusSlides(1);
        }, 2000);