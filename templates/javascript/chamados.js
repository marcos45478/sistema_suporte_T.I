   const chamadosData = [
    { id: "T001", titulo: "Erro no sistema de ponto eletrônico", cliente: "Prefeitura Municipal de Santos", status: "Em Andamento", prioridade: "urgente", responsavel: "João Silva", data: "25/04/2026" },
    { id: "T002", titulo: "Solicitação de novo usuário no sistema", cliente: "Câmara Municipal de Guarujá", status: "Aberto", prioridade: "media", responsavel: "Maria Santos", data: "26/04/2026" },
    { id: "T003", titulo: "Relatório mensal de folha de pagamento", cliente: "Prefeitura Municipal de Praia Grande", status: "Aberto", prioridade: "alta", responsavel: "Carlos Oliveira", data: "27/04/2026" },
    { id: "T004", titulo: "Backup do servidor", cliente: "Prefeitura Municipal de Santos", status: "Concluído", prioridade: "baixa", responsavel: "João Silva", data: "20/04/2026" },
    { id: "T005", titulo: "Impressora não funciona", cliente: "Câmara Municipal de Guarujá", status: "Concluído", prioridade: "media", responsavel: "Maria Santos", data: "24/04/2026" }
  ];

  // Função para formatar prioridade
  function formatPrioridade(prio) {
    if (prio === "urgente") return "Urgente";
    if (prio === "alta") return "Alta";
    if (prio === "media") return "Média";
    if (prio === "baixa") return "Baixa";
    return prio;
  }

  // Função para gerar badge de status com classe correta
  function getStatusBadge(statusText) {
    const lowerStatus = statusText.toLowerCase();
    if (lowerStatus === "em andamento") {
      return `<span class="status-badge status-em-andamento">Em Andamento</span>`;
    } else if (lowerStatus === "aberto") {
      return `<span class="status-badge status-aberto">Aberto</span>`;
    } else if (lowerStatus === "concluído") {
      return `<span class="status-badge status-concluido">Concluído</span>`;
    } else {
      return `<span class="status-badge">${statusText}</span>`;
    }
  }

  function getPriorityBadge(priorityRaw) {
    const p = priorityRaw.toLowerCase();
    if (p === "urgente") {
      return `<span class="priority-badge priority-urgente">Urgente</span>`;
    } else if (p === "alta") {
      return `<span class="priority-badge priority-alta">Alta</span>`;
    } else if (p === "media") {
      return `<span class="priority-badge priority-media">Média</span>`;
    } else if (p === "baixa") {
      return `<span class="priority-badge priority-baixa">Baixa</span>`;
    } else {
      return `<span class="priority-badge">${priorityRaw}</span>`;
    }
  }

  // Renderizar tabela baseada no filtro (status)
  let currentFilter = "todos"; // "todos", "Em Andamento", "Aberto", "Concluído"

  function renderTable() {
    const tbody = document.getElementById("tableBody");
    const filteredData = currentFilter === "todos" 
      ? chamadosData 
      : chamadosData.filter(chamado => chamado.status === currentFilter);
    
    if (filteredData.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:2rem;">Nenhum chamado encontrado com o status selecionado.</td></tr>`;
      document.getElementById("totalCountSpan").innerText = "0";
      return;
    }

    let htmlRows = "";
    for (let chamado of filteredData) {
      const statusBadge = getStatusBadge(chamado.status);
      const priorityBadge = getPriorityBadge(chamado.prioridade);
      // ação "Ver" com dataset para passar id
      htmlRows += `
        <tr data-id="${chamado.id}" data-titulo="${chamado.titulo}" data-cliente="${chamado.cliente}" data-status="${chamado.status}" data-prioridade="${chamado.prioridade}" data-responsavel="${chamado.responsavel}" data-data="${chamado.data}">
          <td style="font-weight:600;">${chamado.id}</td>
          <td>${chamado.titulo}</td>
          <td>${chamado.cliente}</td>
          <td>${statusBadge}</td>
          <td>${priorityBadge}</td>
          <td>${chamado.responsavel}</td>
          <td>${chamado.data}</td>
          <td><button class="btn-ver action-view" data-id="${chamado.id}">Ver</button></td>
        </tr>
      `;
    }
    tbody.innerHTML = htmlRows;
    document.getElementById("totalCountSpan").innerText = filteredData.length;

    // adicionar event listeners para todos os botões "Ver" que foram recém-criados
    document.querySelectorAll('.action-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const row = btn.closest('tr');
        if (row) {
          const id = row.getAttribute('data-id') || btn.getAttribute('data-id');
          const titulo = row.getAttribute('data-titulo');
          const cliente = row.getAttribute('data-cliente');
          const statusTicket = row.getAttribute('data-status');
          const prioridadeTicket = row.getAttribute('data-prioridade');
          const responsavelTicket = row.getAttribute('data-responsavel');
          const dataTicket = row.getAttribute('data-data');
          showModalDetails(id, titulo, cliente, statusTicket, prioridadeTicket, responsavelTicket, dataTicket);
        } else {
          // fallback usando dataset id
          const ticketId = btn.getAttribute('data-id');
          const chamadoEncontrado = chamadosData.find(c => c.id === ticketId);
          if(chamadoEncontrado) {
            showModalDetails(chamadoEncontrado.id, chamadoEncontrado.titulo, chamadoEncontrado.cliente, chamadoEncontrado.status, chamadoEncontrado.prioridade, chamadoEncontrado.responsavel, chamadoEncontrado.data);
          } else {
            showModalDetails(ticketId, "Detalhe", "Cliente não identificado", "---", "---", "---", "---");
          }
        }
      });
    });
  }

  // função de modal com informações detalhadas (simulando visualização)
  function showModalDetails(id, titulo, cliente, status, prioridade, responsavel, dataStr) {
    const modal = document.getElementById("infoModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");
    modalTitle.innerText = `Chamado ${id}`;
    modalMessage.innerHTML = `
      <strong>📌 Título:</strong> ${titulo}<br>
      <strong>🏢 Cliente:</strong> ${cliente}<br>
      <strong>⚙️ Status:</strong> ${status}<br>
      <strong>⚠️ Prioridade:</strong> ${prioridade.toUpperCase()}<br>
      <strong>👤 Responsável:</strong> ${responsavel}<br>
      <strong>📅 Data:</strong> ${dataStr}<br><br>
      <span style="font-size:0.8rem; background:#f8fafc; padding:0.2rem 0.5rem; border-radius:12px;">🔍 Visualização completa do chamado</span>
    `;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = document.getElementById("infoModal");
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  // Filtro por select
  const filterSelect = document.getElementById("statusFilterSelect");
  filterSelect.addEventListener("change", (e) => {
    currentFilter = e.target.value;
    renderTable();
    // Atualizar o chip "Todos os Status" dependendo do filtro:
    const allStatusChipSpan = document.querySelector("#allStatusChip span:first-child");
    if (currentFilter === "todos") {
      allStatusChipSpan.innerHTML = "📌 Todos os Status";
    } else {
      allStatusChipSpan.innerHTML = `📌 ${currentFilter}`;
    }
  });

  // event listener do botão "Ver" no rodapé (exibe uma mensagem genérica ou o total atualizado)
  const viewAllBtn = document.getElementById("viewAllBtn");
  viewAllBtn.addEventListener("click", () => {
    const total = document.getElementById("totalCountSpan").innerText;
    const filterText = currentFilter === "todos" ? "todos os chamados" : `chamados com status "${currentFilter}"`;
    alert(`🔎 Visualizando ${total} ${filterText}. (Simulação de ação "Ver" no rodapé)`);
  });

  // Botão novo chamado (simula criação)
  const newBtn = document.getElementById("newTicketBtn");
  newBtn.addEventListener("click", () => {
    alert("Novo Chamado: funcionalidade simulada. (Interface idêntica à foto)");
  });

  // inicializar renderização
  renderTable();

  // modal close ações
  document.getElementById("closeModalBtn").addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    const modal = document.getElementById("infoModal");
    if (e.target === modal) closeModal();
  });

  // Atualiza o chip do rodapé quando filtro mudar manualmente
  const updateFooterChip = () => {
    const chipSpan = document.querySelector("#allStatusChip span:first-child");
    if (currentFilter === "todos") chipSpan.innerHTML = "📌 Todos os Status";
    else chipSpan.innerHTML = `📌 ${currentFilter}`;
  };
  // chamar a cada filtro alterado
  const origChange = filterSelect.onchange;
  filterSelect.addEventListener("change", updateFooterChip);
  updateFooterChip();