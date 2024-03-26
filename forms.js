function validForm() {
    var name = document.getElementById("Nome").value;
    var idade = document.getElementById("Idade").value;
    var email = document.getElementById("Email").value;

    if (!name || !idade || !email) {
        document.getElementById("alert").style.visibility = "visible";
        return;
    }

    document.getElementById("alert").style.visibility = "hidden";

    // Adiciona os dados na tabela
    var table = document.getElementById("infoTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = idade;
    row.insertCell(2).innerHTML = email;

    // Salva os dados no localStorage
    var data = JSON.parse(localStorage.getItem('tableData')) || [];
    data.push({name: name, idade: idade, email: email});
    localStorage.setItem('tableData', JSON.stringify(data));

    alert("Seus dados foram cadastrados com sucesso !");

    document.getElementById("form").reset();
}

// Função para limpar a tabela
function clearTable() {
    var table = document.getElementById("infoTable").getElementsByTagName('tbody')[0];
    table.innerHTML = '';

    // Limpa os dados do localStorage
    localStorage.removeItem('tableData');
}

// Adiciona o evento de clique ao botão de limpar
document.getElementById('clearButton').addEventListener('click', clearTable);

// Carrega os dados do localStorage quando a página é carregada
window.onload = function() {
    var data = JSON.parse(localStorage.getItem('tableData')) || [];
    var table = document.getElementById("infoTable").getElementsByTagName('tbody')[0];

    for (var i = 0; i < data.length; i++) {
        var row = table.insertRow();
        row.insertCell(0).innerHTML = data[i].name;
        row.insertCell(1).innerHTML = data[i].idade;
        row.insertCell(2).innerHTML = data[i].email;
    }
}
