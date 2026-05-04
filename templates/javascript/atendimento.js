
// Elementos do DOM
const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open_btn');
const sideItems = document.querySelectorAll('.side-item');
const logoutBtn = document.getElementById('logout_btn');

// Abrir/Fechar sidebar
openBtn.addEventListener('click', function () {
    sidebar.classList.toggle('open-sidebar');
});

// Fechar sidebar ao clicar em um item (em mobile)
sideItems.forEach(item => {
    item.addEventListener('click', function (e) {
        // Remove classe ativa de todos
        sideItems.forEach(el => el.classList.remove('active'));
        // Adiciona classe ao item clicado
        this.classList.add('active');
        
        // Fecha sidebar em telas pequenas
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open-sidebar');
        }
    });
});

// Logout
logoutBtn.addEventListener('click', function () {
    if (confirm('Tem certeza que deseja sair?')) {
        window.location.href = 'login.html';
    }
});

// Fechar sidebar ao pressionar ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && window.innerWidth <= 768) {
        sidebar.classList.remove('open-sidebar');
    }
});

// Ajustar sidebar em redimensionamento
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open-sidebar');
    }
});