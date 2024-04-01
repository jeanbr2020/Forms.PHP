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
  

  window.addEventListener('load', () => {
    const body = document.body;
    const darkSwitch = document.getElementById('darkSwitch');

    // Carrega o tema salvo no localStorage ao recarregar a página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        darkSwitch.checked = savedTheme === 'dark';
    }

    function switchTheme(e) {
        if (e.target.checked) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    if (darkSwitch) {
        darkSwitch.addEventListener('change', switchTheme, false);
    } else {
        console.log("darkSwitch element not found");
    }
});


// completar o email quando o caractere “@” for inserido

document.getElementById('Email').addEventListener('input', function (e) {
  var input = e.target,
      val = input.value;
  
  if (val.includes('@')) {
    var list = ['gmail.com', 'outlook.com'];
    var datalist = document.getElementById('email-options');
    
    if (!datalist) {
      datalist = document.createElement('datalist');
      datalist.id = 'email-options';
      document.body.appendChild(datalist);
    }
    
    datalist.innerHTML = '';
    list.forEach(function(item) {
      var option = document.createElement('option');
      option.value = val + item;
      datalist.appendChild(option);
    });
    
    input.setAttribute('list', 'email-options');
  }
});

document.getElementById('Email').addEventListener('change', function (e) {
  e.target.removeAttribute('list');
});
