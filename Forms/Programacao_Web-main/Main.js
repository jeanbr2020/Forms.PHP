document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form');
    const nome = document.getElementById('Nome');
    const idade = document.getElementById('Idade');
    const email = document.getElementById('Email');
    const infoTable = document.getElementById('infoTable');
    const clearButton = document.getElementById('clearButton');
  
    // Função para validar o formulário
    function validForm(event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
      }
      const row = document.createElement('tr');
      row.innerHTML = `<td>${nome.value}</td><td>${idade.value}</td><td>${email.value}</td>`;
      infoTable.appendChild(row);
      const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
      tableData.push({ nome: nome.value, idade: idade.value, email: email.value });
      localStorage.setItem('tableData', JSON.stringify(tableData));
      form.reset();
    }
  
    // Função para limpar o localStorage
    function clearLocalStorage() {
      localStorage.removeItem('tableData');
      while (infoTable.firstChild) {
        infoTable.removeChild(infoTable.firstChild);
      }
    }
  
    // Adiciona evento de clique ao botão de envio
    form.addEventListener('submit', validForm);
  
    // Adiciona evento de clique ao botão de limpar
    clearButton.addEventListener('click', clearLocalStorage);
  
    // Carrega os dados da tabela do localStorage ao recarregar a página
    const savedTableData = JSON.parse(localStorage.getItem('tableData'));
    if (savedTableData) {
      savedTableData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${data.nome}</td><td>${data.idade}</td><td>${data.email}</td>`;
        infoTable.appendChild(row);
      });
    }
  });
  

//modo claro e escuro
window.addEventListener('load', () => {
    const body = document.getElementById('body');
    const footer = document.querySelector('.footer');
    const textFooter = document.querySelector('.text_footer');
    const darkSwitch = document.getElementById('darkSwitch');
  
    // Função para alternar entre o modo claro e escuro
    function switchTheme(e) {
      if (e.target.checked) {
        body.setAttribute('data-theme', 'dark');
        footer.setAttribute('data-theme', 'dark');
        textFooter.setAttribute('data-theme', 'dark');
      } else {
        body.setAttribute('data-theme', 'light');
        footer.setAttribute('data-theme', 'light');
        textFooter.setAttribute('data-theme', 'light');
      }
    }
  
    // Adiciona evento de mudança ao botão de alternância
    darkSwitch.addEventListener('change', switchTheme, false);
  });
  