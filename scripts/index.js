const hello = ['Hello', 'নমস্কার', 'Привет', 'Ciao!', '안녕', 'Hola', '侬好', 'Halau', 'Oi']
const stats = [90, 95, 85, 90, 70]
AOS.init()

$(document).ready(() => {
    let word_i = 0
    setInterval(function() {
        $('#header-title').text(hello[word_i])

        word_i++;
        if (word_i >= hello.length) {
            word_i = 0
        }
    }, 300);

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
            stats_sliders[el_counter].style.width = percentage_counter + '%'
            stats_sliders[el_counter].nextElementSibling.innerHTML = percentage_counter + '%'
            percentage_counter++;
            if (percentage_counter > stats[el_counter]) {
                percentage_counter = 0
                el_counter++
                if (el_counter > stats_sliders.length) {
                    clearInterval(i)
                }
            }
        }, 10);
    }
})