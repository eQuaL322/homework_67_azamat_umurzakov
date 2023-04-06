let input = document.getElementById('add-item-btn');
input.addEventListener('click', function () {
    let div = document.createElement('div');
    div.innerHTML = '<p class="not-text">This is notification!</p><button id="btn-close" class="close-btn">Закрыть</button>'
    div.className = 'notification';
    document.body.style.backgroundColor = 'gray'
    let container = document.getElementById('container');
    container.append(div);
    let button = document.getElementById('btn-close');
    button.addEventListener('click', function () {
        div.remove()
    })
    setTimeout(() => div.remove(), 5000);
})