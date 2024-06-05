        function registrarEstudante(x){
    x.preventDefault();
    const nome = document.getElementById('nome').value;
    
    const matricula = document.getElementById('matricula').value;
    
    const nota1 = parseFloat(document.getElementById('nota1').value);
    
    const nota2 = parseFloat(document.getElementById('nota2').value);
    

    const media = (nota1 + nota2) / 2;
    const final = media >= 5 ? "Aprovado" : "Reprovado";
    
    const linha = adicionarLinha(nome, matricula, nota1, nota2, media, final);
    aidicionarlinhaTabela(linha);
    clearForm();
}

        function adicionarLinha(nome, matricula, nota1, nota2, media, final){
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${media.toFixed(2)}</td>
        <td>${final}</td>
    `;
    return linha;
}

        function aidicionarlinhaTabela(linha){
    const tbody = document.querySelector('#res tbody');
    tbody.appendChild(linha);
}



document.getElementById('form').addEventListener('submit', registrarEstudante);
