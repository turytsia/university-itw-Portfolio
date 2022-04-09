const levels_header = [document.getElementById('bg-level-4'),
    document.getElementById('bg-level-3'),
    document.getElementById('bg-level-2'),
    document.getElementById('bg-level-1'),
    document.getElementById('bg-level-0')
]
const levels_footer = [document.getElementById('bg-level-4-footer'),
    document.getElementById('bg-level-3-footer'),
    document.getElementById('bg-level-2-footer'),
    document.getElementById('bg-level-1-footer')
]
const about = document.getElementById('about')
const skill = document.getElementById('skill')
const projects = document.getElementById('projects')
const transition = document.getElementById('header-transition')
const footer = document.getElementById('footer')
const footer_section = document.getElementById('footer-section')
document.addEventListener('scroll', () => {
    //header parallax
    levels_header[0].style.transform = `translateY(${-window.scrollY/3}px)`
    levels_header[1].style.transform = `translateY(${-window.scrollY/3.5}px)`
    levels_header[2].style.transform = `translateY(${-window.scrollY/4}px)`
    levels_header[3].style.transform = `translateY(${-window.scrollY/5.5}px)`
    levels_header[4].style.transform = `translateY(${-window.scrollY/8}px)`
        //body
    about.style.transform = `translateY(${-window.scrollY/5}px)`
    skill.style.transform = `translateY(${-window.scrollY/5}px)`
    transition.style.transform = `translateY(${-window.scrollY/5}px)`
    projects.style.transform = `translateY(${-window.scrollY/5}px)`
    footer.style.transform = `translateY(${-window.scrollY/4.5}px)`
        //footer parallax
    levels_footer[0].style.transform = `translateY(${-window.scrollY/1.65}px)`
    levels_footer[1].style.transform = `translateY(${-window.scrollY/2.75}px)`
    levels_footer[2].style.transform = `translateY(${-window.scrollY/4.5}px)`
    levels_footer[3].style.transform = `translateY(${-window.scrollY/6}px)`
    footer_section.style.transform = `translateY(${-window.scrollY/5}px)`
})