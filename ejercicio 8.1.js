const items = document.querySelectorAll('#lista li');

items.forEach(item => {
    item.addEventListener('click', function() {
        console.log(this.textContent);
    });
});