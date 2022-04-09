const levels = [document.getElementById('bg-level-4'),
    document.getElementById('bg-level-3'),
    document.getElementById('bg-level-2'),
    document.getElementById('bg-level-1'),
    document.getElementById('bg-level-0')
]
const about = document.getElementById('about')
const skill = document.getElementById('skill')
const transition = document.getElementById('header-transition')
document.addEventListener('scroll', () => {
    levels[0].style.transform = `translateY(${-window.scrollY/3}px)`
    levels[1].style.transform = `translateY(${-window.scrollY/3.5}px)`
    levels[2].style.transform = `translateY(${-window.scrollY/4}px)`
    levels[3].style.transform = `translateY(${-window.scrollY/5.5}px)`
    levels[4].style.transform = `translateY(${-window.scrollY/8}px)`
    about.style.transform = `translateY(${-window.scrollY/5}px)`
    skill.style.transform = `translateY(${-window.scrollY/5}px)`
    transition.style.transform = `translateY(${-window.scrollY/5}px)`
})