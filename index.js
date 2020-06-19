const addBtn = document.querySelector('.list__form-btn');
const inputName = document.querySelector('.list__form-name');
const inputText = document.querySelector('.list__form-text');
const itemText = document.querySelector('.list__item-heading');
const itemTemplate = document.querySelector('.list__item-template').content;
const list = document.querySelector('.list__items-container');
const form = document.querySelector('.list__form');

function itemCreate () {
    const newItem = itemTemplate.querySelector('.list__item').cloneNode(true);
    newItem.querySelector('.list__item-name').textContent = inputName.value;
    newItem.querySelector('.list__item-text').textContent = inputText.value;
    newItem.addEventListener('click', (evt) => clickHandler(evt));
    list.append(newItem);
}

function itemDelete (evt) {
    evt.target.closest('.list__item').remove();
}

function itemCopy (evt) {
    const copiedItem = evt.target.closest('.list__item').cloneNode(true);
    copiedItem.addEventListener('click', (evt) => clickHandler(evt));
    list.append(copiedItem);
}

function itemEdit (evt) {
    if (inputName.value.length >= 1) {
        evt.target.closest('.list__item').querySelector('.list__item-name').textContent = inputName.value;
        evt.target.closest('.list__item').querySelector('.list__item-text').textContent = inputText.value;
        inputText.value = '';
        inputName.value = '';
    }
}

function itemTextThrough (evt) {
    if(evt.target.classList.contains('list__item-done')) {
        evt.target.closest('.list__item').querySelector('.list__item-name').classList.toggle('list__item-heading_line');
        evt.target.closest('.list__item').querySelector('.list__item-text').classList.toggle('list__item-heading_line');
    }
}

function clickHandler (evt) {
    if (evt.target.classList.contains('list__item-copy')) {
        itemCopy(evt);
    }
    if (evt.target.classList.contains('list__item-edit')) {
        itemEdit(evt);
    }
    if (evt.target.classList.contains('list__item-delete')) {
        itemDelete(evt);
    }
    if(evt.target.classList.contains('list__item-done')) {
        itemTextThrough(evt);
    }
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    itemCreate();
    inputName.value = '';
    inputText.value = '';
})