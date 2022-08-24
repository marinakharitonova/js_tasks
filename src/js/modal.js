document.getElementById('modal-open').addEventListener('click', openModal)

document.getElementById('modal').addEventListener('click', closeModal, false)

function closeModal(e) {
    const target = e.target;
    if (!target.closest('.modal__content') || target.id === 'modal-close') {
        document.getElementById('modal').classList.remove('active');
        document.getElementById('modal-overlay').classList.remove('active');
        document.body.classList.remove('modal-open')
    }
}

function openModal() {
    document.getElementById('modal').classList.add('active');
    document.getElementById('modal-overlay').classList.add('active');
    document.body.classList.add('modal-open')
}