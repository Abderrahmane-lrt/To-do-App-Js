function ajouter() {
    const input = document.getElementById('value');
    let value = input.value;

    if (value === '') {
        return;
    }

    let completeBtn = document.createElement('button');
    completeBtn.textContent = "✓";
    completeBtn.className = 'btn-success btn-sm';
    completeBtn.onclick = function () {
        div.classList.toggle('completed');
    }

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.className = 'btn-danger btn-sm';
    deleteBtn.onclick = function () {
        div.remove();
    }

    let taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = value;

    let actionDiv = document.createElement('div');
    actionDiv.className = 'task-actions';
    actionDiv.append(completeBtn, deleteBtn);

    let div = document.createElement('div');
    div.className = 'c1';
    div.append(taskText, actionDiv);

    document.getElementById('result').append(div);
    input.value = '';
    input.focus();
}

document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('result').replaceChildren();
});

document.getElementById('value').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        ajouter();
    }
});
