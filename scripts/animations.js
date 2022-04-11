$(document).ready(() => {
    document.addEventListener('scroll', () => {
        if (isInViewport('about-title-content')) {
            $('#about-title-content').addClass('animation-fade-in')
        }
        if (isInViewport('about-aside')) {
            $('#about-aside').addClass('animation-fade-in')
        }
        if (isInViewport('skill-title')) {
            $('#skill-title').addClass('animation-fade-in')
        }
        if (isInViewport('projects-title')) {
            $('#projects-title').addClass('animation-fade-in')
        }
        if (isInViewport('projects-list-item-1')) {
            $('#projects-list-item-1').addClass('animation-fade-in')
        }
        if (isInViewport('projects-list-item-2')) {
            $('#projects-list-item-2').addClass('animation-fade-in')
        }
        if (isInViewport('projects-list-item-3')) {
            $('#projects-list-item-3').addClass('animation-fade-in')
        }
    })
})