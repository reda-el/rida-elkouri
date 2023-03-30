// ############ show nav bar
let bar = document.querySelector('.fa-bars');
let fa_times = document.querySelector('.fa-times');
let links = document.querySelector('.links');
bar.addEventListener('click', () => {
    links.classList.toggle('show-nav-bar');
    bar.classList.toggle('bar-click-style');
});

// hide bnav if click outside
document.body.addEventListener('click', (e) => {
    let tar = e.target
    if (!tar.classList.contains('fa-bars') && !tar.classList.contains('link_link') && !tar.classList.contains('links')) {
        links.classList.remove('show-nav-bar');
    }
})


fa_times.addEventListener('click', () => {
    links.classList.remove('show-nav-bar');
    bar.classList.remove('bar-click-style');
});

// ####### load_line
let load_line = document.querySelector('.load-line');
let line_loaded = false;

window.addEventListener('DOMContentLoaded', () => {
    load_line.classList.add('load-line-style');

    setInterval(() => {
        load_line.style.display = 'none'
    }, 1000)
})



// ######### scroll_up_arrow
let scroll_up_arrow = document.querySelector('.scroll_up_arrow');

scroll_up_arrow.addEventListener('click', () => {
    document.querySelector('.header').scrollIntoView();
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scroll_up_arrow.classList.add('scroll_up_arrow_show')
    } else {
        scroll_up_arrow.classList.remove('scroll_up_arrow_show')
    }
})


// Hide bar is we scroll up or down
window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0 || e.deltaY < 0) {
        links.classList.remove('show-nav-bar');
        bar.classList.remove('bar-click-style');
    }
})



// ############ ad actibe to links
let headerLinks = document.querySelectorAll('header a');

window.addEventListener('scroll', () => {

    if (window.scrollY >= document.querySelector('header').offsetTop) {
        headerLinks.forEach((link) => {
            link.classList.remove('active');
        })
        document.querySelector('.link0').classList.add('active');
    } else {
        document.querySelector('.link0').classList.remove('active');
    }

    if (window.scrollY >= document.querySelector('#about').offsetTop) {
        headerLinks.forEach((link) => {
            link.classList.remove('active');
        })
        document.querySelector('.link1').classList.add('active');
    } else {
        document.querySelector('.link1').classList.remove('active');
    }

    if (window.scrollY >= document.querySelector('#skills').offsetTop) {
        headerLinks.forEach((link) => {
            link.classList.remove('active');
        })
        document.querySelector('.link2').classList.add('active');
    } else {
        document.querySelector('.link2').classList.remove('active');
    }

    if (window.scrollY >= document.querySelector('#education').offsetTop - 10) {
        headerLinks.forEach((link) => {
            link.classList.remove('active');
        })
        document.querySelector('.link3').classList.add('active');
    } else {
        document.querySelector('.link3').classList.remove('active');
    }

    if (window.scrollY >= document.querySelector('#slider').offsetTop) {
        headerLinks.forEach((link) => {
            link.classList.remove('active');
        })
        document.querySelector('.link4').classList.add('active');
    } else {
        document.querySelector('.link4').classList.remove('active');
    }

    if (window.scrollY >= document.querySelector('#contact').offsetTop) {
        headerLinks.forEach((link) => {
            link.classList.remove('active');
        })
        document.querySelector('.link6').classList.add('active');
    } else {
        document.querySelector('.link6').classList.remove('active');
    }
})


// ############ paralx
let paralax = document.querySelector('.paralax');
window.addEventListener('scroll', () => {
    paralax.style.backgroundPositionY = window.pageYOffset * 0.05 + 'px'
})

// ######### header-scroll-down-style
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        header.classList.add('header-scroll-down-style')
    } else {
        header.classList.remove('header-scroll-down-style')
    }
})


// ############ dev langs animation
let levels = document.querySelectorAll('.level span');

window.addEventListener('scroll', () => {
    if (window.scrollY > document.querySelector('.skills-and-langauges').offsetTop) {
        levels.forEach((ele) => {
            ele.style.width = ele.dataset.langlevel
        })
    }
})

// ############ dev langs animation
let language = document.querySelectorAll('.lang');

let rotationStarted = false;

var count = 0;
window.addEventListener('scroll', () => {
    if (window.scrollY >= document.querySelector('.languages').offsetTop - 210) {

        language.forEach((ele) => {
            let rotateDegree = ele.dataset.rotation

            let h6 = ele.querySelector('.level')
            console.log(h6)
            
            if (!rotationStarted) {
                let intervall = setInterval(() => {
                    ele.style.setProperty('--rotation', `${count++}%`);
        
                    if (rotateDegree <= count) {
                        clearInterval(intervall)
                    }
                    h6.textContent = count 
                }, 60)    
            }
        })
        rotationStarted = true
    }
})



// ############### scroll dwon arrow and links
let scroll_btn = document.querySelector('.scroll_btn');
let about = document.querySelector('.about');

scroll_btn.addEventListener('click', () => {
    about.scrollIntoView();
});



// ########### setting the slider
let slides = document.querySelectorAll('.slide')
let slideBtns = document.querySelectorAll('.navigation .btn')
let currentSlide = 1;

let manualNav = function (manual) {

    slides.forEach((slide) => {
        slide.classList.remove('active');

        slideBtns.forEach((btn) => {
            btn.classList.remove('active')
        })
    })

    slides[manual].classList.add('active')
    slideBtns[manual].classList.add('active')
}

slideBtns.forEach((btn, indx) => {
    btn.addEventListener('click', () => {
        manualNav(indx);
        currentSlide = indx
    })
})



// ############## validating the contact form
let form = document.querySelector('form');
let submitBtn = document.querySelector('.submitBtn');

let name_input = document.getElementById('name')
let subject = document.getElementById('subject')
let mail = document.getElementById('mail')
let message = document.getElementById('message')
let validation_output = document.querySelector('.validation_output');



form.onsubmit = (ev) => {
    if (name_input.value === '' || subject.value === '' || mail.value === '' || message.value === '') {
        ev.preventDefault();
        validation_output.textContent = 'make sure to fill all the fields'
    }
}


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




// ####### show settings
let settings_button = document.querySelector('.settings-button');
let settings = document.querySelector('.settings');
settings_button.addEventListener('click', () => {
    settings.classList.toggle('show-settings')
});


document.body.addEventListener('click', (e) => {
    let tar = e.target
    if (!tar.classList.contains('settings-button') && !tar.classList.contains('color') && !tar.classList.contains('settings') && !tar.classList.contains('fa-settings')) {
        settings.classList.remove('show-settings')
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
    if (!tar.classList.contains('settings-button') && !tar.classList.contains('color') && !tar.classList.contains('settings') && !tar.classList.contains('fa-settings')) {
        settings.classList.remove('show-settings')
    }
})



// ########## hide pop up
let popUp_overlay = document.querySelector('.popUp_overlay');

window.addEventListener('DOMContentLoaded', () => {
    setInterval( () => {
        popUp_overlay.classList.add('show_popup')

        if (localStorage.getItem('pop')) {
            popUp_overlay.classList.remove('show_popup');
        }

    }, 10000)
})




popUp_overlay.querySelector('.fa').onclick = () => {
    localStorage.setItem('pop', true);
    popUp_overlay.classList.remove('show_popup');
    disablescroll()
}


// hide popup if click outside
document.body.onclick = function(e) {
    if (e.target.className === 'popUp_overlay show_popup') {
        popUp_overlay.classList.remove('show_popup')
        localStorage.setItem('pop', true);
    }
}


// Setting background slider
let img_slide = document.querySelector('.img-slide'),
    images = ['img/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg', 'img/htoel ipad.jpg', 'img/khtna.jpg', 'img/phot.jpg', 'img/kelsey-curtis--27u_GzlAFw-unsplash.jpg'],
    sliderCount = 0;

setInterval( () => {
    sliderCount++
    
    if (sliderCount > images.length - 1) {
        sliderCount = 0;
    }

    if (sliderCount < 0) {
        sliderCount = images.length - 1
    }

    img_slide.src = images[sliderCount];
}, 8000)



let cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    let x = e.clientX
    let y = e.clientY
    cursor.style.left = (x - 15) + 'px';
    cursor.style.top = (y - 15) + 'px';
})

window.addEventListener('click', (e) => {
    cursor.style.display = 'block';
    // cursor.classList.add('style');
    
    setInterval(() => {
        cursor.classList.remove('style');
        cursor.style.display = 'none';
    }, 200)
})
