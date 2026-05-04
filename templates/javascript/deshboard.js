 function togglegrafico() {
  const ctx = document.getElementById('myChart');
  
  // Destruir gráfico anterior se existir
  if (window.myChartInstance) {
    window.myChartInstance.destroy();
  }

  window.myChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Chamados abertos', 'Em andamento', 'Concluídos', 'Contratos ativos'],
      datasets: [{
        label: '# de Chamados',
        data: [2, 5, 2, 3,],
        backgroundColor: [
          '#f54a00',
          '#155dfc',
          '#00a63e',
          
        ],
        borderColor: [
          '#f54a00',
          '#155dfc',
          '#00a63e',
        ],
        borderWidth: 1,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      indexAxis: 'x',
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: '#e3e9f7'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            font: {
              family: "'Poppins', sans-serif",
              size: 12
            },
            padding: 15,
            color: '#524f4f'
          }
        }
      }
    }
  });
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', togglegrafico);
} else {
  togglegrafico();
}


let resizeTimeout;
window.addEventListener('resize', function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (window.myChartInstance) {
      window.myChartInstance.resize();
    }
  }, 250);
});

const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open_btn');
const sideItems = document.querySelectorAll('.side-item');
const logoutBtn = document.getElementById('logout_btn');


openBtn.addEventListener('click', function () {
    sidebar.classList.toggle('open-sidebar');
});


sideItems.forEach(item => {
    item.addEventListener('click', function (e) {
        
        sideItems.forEach(el => el.classList.remove('active'));
        
        this.classList.add('active');
        
        
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
