document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});
(function() {
        // Elementos do DOM
        const form = document.getElementById('chamadoForm');
        const tituloInput = document.getElementById('titulo');
        const descricaoTextarea = document.getElementById('descricao');
        const prioridadeSelect = document.getElementById('prioridade');
        const cancelBtn = document.getElementById('cancelarBtn');
        const toastMsgDiv = document.getElementById('toastMessage');
        const toastTextSpan = document.getElementById('toastText');

        // Função auxiliar para mostrar toast que some após 2.5s
        let toastTimeout = null;
        function showToast(message, isError = false) {
            // limpa timeout anterior para evitar conflito
            if(toastTimeout) {
                clearTimeout(toastTimeout);
                toastMsgDiv.classList.remove('show');
            }
            toastTextSpan.innerText = message;
            // ajusta ícone com base no tipo (erro ou sucesso)
            const iconElement = toastMsgDiv.querySelector('i');
            if(isError) {
                iconElement.className = 'fas fa-exclamation-triangle';
                toastMsgDiv.style.backgroundColor = '#b91c1c';
                toastMsgDiv.style.color = '#fff';
            } else {
                iconElement.className = 'fas fa-check-circle';
                toastMsgDiv.style.backgroundColor = '#1e3a4d';
                toastMsgDiv.style.color = '#ffffff';
            }
            toastMsgDiv.classList.add('show');
            toastTimeout = setTimeout(() => {
                toastMsgDiv.classList.remove('show');
            }, 2700);
        }

        // Função para resetar formulário (limpar campos com exceção da prioridade que volta ao padrão "Medida")
        function resetFormulario() {
            tituloInput.value = '';
            descricaoTextarea.value = '';
            prioridadeSelect.value = 'Medida';   // conforme definido no select: "Medida" como padrão
            // remove qualquer estado de erro visual (opcional)
            [tituloInput, descricaoTextarea, prioridadeSelect].forEach(field => {
                field.style.borderColor = '';
            });
            // foco no título após reset
            tituloInput.focus();
            showToast('Formulário limpo. Você pode abrir um novo chamado.', false);
        }

        // Validação personalizada (campos obrigatórios)
        function validarCampos() {
            let isValid = true;
            const tituloVal = tituloInput.value.trim();
            const descricaoVal = descricaoTextarea.value.trim();

            // Reset bordas
            tituloInput.style.borderColor = '';
            descricaoTextarea.style.borderColor = '';
            prioridadeSelect.style.borderColor = '';

            if(tituloVal === '') {
                tituloInput.style.borderColor = '#e03a3a';
                isValid = false;
                showToast('O campo Título é obrigatório.', true);
                tituloInput.focus();
                return false;
            }
            if(tituloVal.length < 3) {
                tituloInput.style.borderColor = '#e03a3a';
                showToast('O título deve ter pelo menos 3 caracteres.', true);
                tituloInput.focus();
                return false;
            }
            if(descricaoVal === '') {
                descricaoTextarea.style.borderColor = '#e03a3a';
                showToast('Por favor, forneça mais detalhes sobre o problema ou solicitação.', true);
                descricaoTextarea.focus();
                return false;
            }
            if(descricaoVal.length < 5) {
                descricaoTextarea.style.borderColor = '#e03a3a';
                showToast('A descrição precisa ter mais detalhes (mínimo 5 caracteres).', true);
                descricaoTextarea.focus();
                return false;
            }
            return true;
        }

        // Função para enviar o chamado (simula envio e mostra dados no console/log)
        function enviarChamado(event) {
            event.preventDefault();
            
            if(!validarCampos()) {
                return; // toast já acionado
            }
            
            // Coleta dados
            const titulo = tituloInput.value.trim();
            const descricao = descricaoTextarea.value.trim();
            const prioridade = prioridadeSelect.value;
            
            // Simulação de requisição (delay apenas para UX)
            const submitButton = document.getElementById('enviarBtn');
            const originalBtnText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Enviando...';
            submitButton.disabled = true;
            
            // Simula um pequeno delay de rede (250ms) – para dar feedback real
            setTimeout(() => {
                // Monta objeto chamado
                const chamadoData = {
                    titulo: titulo,
                    descricao: descricao,
                    prioridade: prioridade,
                    dataAbertura: new Date().toLocaleString('pt-BR'),
                    status: 'Aberto'
                };
                
                // Exibe no console (para debug, como se fosse envio ao servidor)
                console.log('📬 NOVO CHAMADO ENVIADO:', chamadoData);
                
                // Armazenar no localStorage para simular histórico (opcional, mas elegante)
                let historico = localStorage.getItem('chamados_simulados');
                let chamadosArray = historico ? JSON.parse(historico) : [];
                chamadosArray.push(chamadoData);
                localStorage.setItem('chamados_simulados', JSON.stringify(chamadosArray));
                
                // Exibe mensagem de sucesso temática
                let prioridadeTexto = '';
                switch(prioridade) {
                    case 'Baixa': prioridadeTexto = 'baixa prioridade'; break;
                    case 'Medida': prioridadeTexto = 'prioridade média (Medida)'; break;
                    case 'Alta': prioridadeTexto = 'alta prioridade'; break;
                    case 'Crítica': prioridadeTexto = 'prioridade crítica'; break;
                    default: prioridadeTexto = prioridade;
                }
                
                showToast(`✅ Chamado "${titulo}" aberto com sucesso! Prioridade: ${prioridadeTexto}.`, false);
                
                // Limpa o formulário após envio bem-sucedido (comportamento comum)
                resetFormulario();
                
                // restaura botão
                submitButton.innerHTML = originalBtnText;
                submitButton.disabled = false;
                
                // Opcional: dar foco no título
                tituloInput.focus();
                
            }, 280);
        }
        
        // Evento de cancelar: limpa todos os campos e exibe um toast informativo
        function cancelarFormulario() {
            // Checar se há algo preenchido além do padrão (prioridade padrão Medida, título vazio, desc vazia)
            const tituloPreenchido = tituloInput.value.trim() !== '';
            const descPreenchida = descricaoTextarea.value.trim() !== '';
            const prioridadeDiferentePadrao = prioridadeSelect.value !== 'Medida';
            
            if(tituloPreenchido || descPreenchida || prioridadeDiferentePadrao) {
                if(confirm('Tem certeza que deseja cancelar? Todas as informações inseridas serão perdidas.')) {
                    resetFormulario();
                    showToast('Operação cancelada. Campos limpos.', false);
                }
            } else {
                resetFormulario();
                showToast('Formulário reiniciado.', false);
            }
        }
        
        // Adicionar evento de submit ao formulário
        form.addEventListener('submit', enviarChamado);
        cancelBtn.addEventListener('click', cancelarFormulario);
        
        // Opção extra: remove a mensagem de erro visual quando o usuário começa a digitar
        tituloInput.addEventListener('input', function() {
            this.style.borderColor = '';
        });
        descricaoTextarea.addEventListener('input', function() {
            this.style.borderColor = '';
        });
        prioridadeSelect.addEventListener('change', function() {
            this.style.borderColor = '';
        });
        
        // Exibir uma pequena dica inicial não intrusiva (apenas para fins visuais)
        setTimeout(() => {
            showToast('Preencha os campos e envie seu chamado', false);
        }, 500);
    })();