let germanEle = document.querySelectorAll('[germanEle]');
let englishEle = document.querySelectorAll('[englishEle]');
let select = document.querySelector('select');

select.addEventListener('input', () => {
    if (select.value === 'german') {
        germanEle.forEach((ele) => {
            localStorage.setItem('language', select.value);

            if (localStorage.getItem('language')) {
                ele.textContent = ele.dataset.german;
            }
        })
    }
})


if (localStorage.getItem('language') === 'german') {
    germanEle.forEach((ele) => {
        ele.textContent = ele.dataset.german;
    })
    select.selectedIndex = 1
}



select.addEventListener('input', () => {
    if (select.value === 'english') {
        englishEle.forEach((ele) => {
            localStorage.setItem('language', select.value);
            
            if (localStorage.getItem('language')) {
                ele.textContent = ele.dataset.english;
            }
        })
    }
})

if (localStorage.getItem('language') === 'english') {
    germanEle.forEach((ele) => {
        ele.textContent = ele.dataset.english;
    })
    select.selectedIndex = 0
}

