const hello = ['Hello', 'নমস্কার', 'Привет', 'Ciao!', '안녕', 'Hola', '侬好', 'Halau', 'Oi']
const stats = [90, 95, 85, 90, 70]
AOS.init()

$(document).ready(() => {
    //hellos animation
    let word_i = 0
    setInterval(function() {
        $('#header-title').text(hello[word_i])

        word_i++;
        if (word_i >= hello.length) {
            word_i = 0
        }
    }, 300);

    //fetching other projects
    fetch('https://api.github.com/users/turytsia/repos')
        .then((response) => {
            return response.json();
        })
        .then((repos) => {
            for (const repo of repos) {
                $('#projects-slider').append(`<li class = "projects-slider-item">
                    <a target="_blank" href = "${repo.html_url}">
                        <h4 class = "projects-slider-name">${repo.name}<i class="fa-brands fa-github"></i></h4>
                        <p class = "projects-slider-text">${repo.description}</p>
                    </a>
                </li>`)
            }
            $('#feedback-slider').slick({
                infinite: true,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            })

            $('#projects-slider').slick({
                infinite: true,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            })
        }).catch(error => console.log(error));

    //skill slider animation
    let stats_sliders = $('.stats-slider')
    let stats_anim_fl = false
    $(document).scroll(() => {
        if (document.getElementById('skill').scrollHeight <= window.scrollY && !stats_anim_fl) {
            stats_anim_fl = true
            launch_stats()
        }
    })

    function launch_stats() {
        let el_counter = 0
        let percentage_counter = 0
        let i = setInterval(function() {
            if (el_counter < stats_sliders.length) {
                stats_sliders[el_counter].style.width = percentage_counter + '%'
                stats_sliders[el_counter].nextElementSibling.innerHTML = percentage_counter + '%'
                percentage_counter++;
                if (percentage_counter > stats[el_counter]) {
                    percentage_counter = 0
                    el_counter++
                }
            } else {
                clearInterval(i)
            }
        }, 10);
    }
})