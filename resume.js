let load_line = document.querySelector('.load-line');
let line_loaded = false;

window.addEventListener('DOMContentLoaded', () => {
    load_line.classList.add('load-line-style');

    setInterval(() => {
        load_line.style.display = 'none'
    }, 1000)
})



// ###### fa-arrow-left
const fa_arrow_left = document.querySelector('.fa-arrow-left');
fa_arrow_left.onclick = () => {
    window.history.back()
}


// ####### show settings
let settings_button = document.querySelector('.settings-button');
let settings = document.querySelector('.settings');
settings_button.addEventListener('click', () => {
    settings.classList.toggle('show-settings')
})




// ############ show copy btn
let copyBtn = document.querySelector('.copyBtn');

document.documentElement.addEventListener('copy', () => {
    copyBtn.classList.add('showCopyBtn');
    copyBtn.textContent = 'Text copied!'
});

document.documentElement.addEventListener('paste', () => {
    copyBtn.classList.add('showCopyBtn');
    copyBtn.textContent = 'Text pasted!'
});

setInterval(() => {
    copyBtn.classList.remove('showCopyBtn');
}, 3000)



// ######### scroll_up_arrow
let scroll_up_arrow = document.querySelector('.scroll_up_arrow');

scroll_up_arrow.addEventListener('click', () => {
    document.querySelector('.indicator').scrollIntoView();
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scroll_up_arrow.classList.add('scroll_up_arrow_show')
    } else {
        scroll_up_arrow.classList.remove('scroll_up_arrow_show')
    }
})




// ad color pick manually
let navigation_btn_active = document.querySelector('.navigation .active');
let colorInput = document.getElementById('colorInput');

colorInput.addEventListener('input', () => {
    localStorage.setItem('theme-color', colorInput.value);
    divs.style.setProperty('--main-color', localStorage.getItem('theme-color'))
})

colorInput.value = localStorage.getItem('theme-color')


// ########### set the page theme on click
let divs = document.querySelector(':root');
let colorBtns = document.querySelectorAll('.color');

colorBtns.forEach( (ele) => {
    ele.addEventListener('click', (e) => {
        let currentColor = e.currentTarget.dataset.color || localStorage.getItem('theme-color')

        // save color to storage
        localStorage.setItem('theme-color', currentColor)
        divs.style.setProperty('--main-color', localStorage.getItem('theme-color'));
        
        // save current color btn id to storage
        localStorage.setItem('current-color', e.currentTarget.id)
        colorBtns.forEach((ele) => {
            ele.style.outline = 'none'
        })
        document.querySelector('#' + localStorage.getItem('current-color')).style.outline = '3px solid #3c3c3c';
    })
})
divs.style.setProperty('--main-color', localStorage.getItem('theme-color'))


// ############ save clicked color button
if (localStorage.getItem('current-color')) {
    document.querySelector('#' + localStorage.getItem('current-color')).style.outline = '3px solid #3c3c3c';
}


// Hide color theme settings of click outside
document.body.addEventListener('click', (e) => {
    let tar = e.target
    if (!tar.classList.contains('settings-button') && !tar.classList.contains('color') && !tar.classList.contains('settings') && !tar.classList.contains('fa-settings') && !tar.classList.contains('select')) {
        settings.classList.remove('show-settings')
    }
})



