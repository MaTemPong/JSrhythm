const btns = document.querySelectorAll('.buttonBox button');
const dialog = document.querySelector('dialog');
const sound = document.querySelector('input');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn == btns[0]) {
            console.log('start');
            localStorage.setItem('sound', sound.value/10);
            location.href = 'index.html';
        }
        else if (btn == btns[1]) {
            console.log('setting');
            dialog.showModal();
        }
        else if (btn == btns[2]) {
            console.log('credit');
        }
    });
});

document.querySelector('dialog #modal p').addEventListener('click', () => {
    dialog.close();
});