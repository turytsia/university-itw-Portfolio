    // scroll functions
    const scroll_time = 1200

    function about_scroll_handler() {
        $('html, body').stop(true, false).animate({
            scrollTop: $("#about").offset().top
        }, scroll_time);
    }

    function skill_scroll_handler() {
        $('html, body').stop(true, false).animate({
            scrollTop: $("#skill").offset().top
        }, scroll_time);
    }

    function projects_scroll_handler() {
        $('html, body').stop(true, false).animate({
            scrollTop: $("#projects").offset().top
        }, scroll_time);
    }

    function feedback_scroll_handler() {
        $('html, body').stop(true, false).animate({
            scrollTop: $("#feedback").offset().top
        }, scroll_time);
    }
    // header 
    const hello_time = 300
    let word_i = 0

    function hello_random() {
        $('#header-title').text(hello[word_i])

        word_i++;
        if (word_i >= hello.length) {
            word_i = 0
        }
    }

    // create project item

    function create_project_slide({ name, description, html_url, created_at }) {
        const time = created_at.replace(/-/g, '.').slice(0, 10)
        return `<li class = "projects-slider-item">
    <a target="_blank" href = "${html_url}">
        <h4 class = "projects-slider-name">${name}<i class="fa-brands fa-github"></i></h4>
        <p class = "projects-slider-text">${description}</p>
    </a>
    <span class = "projects-slider-time">${time}</span>
</li>`
    }

    // create feedback item

    function create_feedback_slide({ name = 'Some guy', message = 'Here could be your feedback!', rating = 5, img_url = './i/some_man.jpg' }) {
        let rating_starts = ''
        for (let i = 0; i < rating; i++) {
            rating_starts += '<i class="fa-solid fa-star"></i>'
        }
        return `<li class="feedback-item">
    <div class="feedback-img" style="background-image: url(${img_url});">
    </div>
    <div class="feedback-content">
        <h4 class="feedback-name">${name}</h4>
        <p class="feedback-message">${message}</p>
    </div>
    <div class="feedback-rating">
        ${rating_starts}
    </div>
</li>`
    }

    // checks if the element is in a view

    function isInViewport(id) {
        const el_top = document.getElementById(id)
        return el_top.getBoundingClientRect().top - window.innerHeight + 100 < 0 && el_top.getBoundingClientRect().top + el_top.scrollHeight + 600 > window.innerHeight
    }

    $(document).ready(() => {

        //fetching other projects
        fetch('https://api.github.com/users/turytsia/repos')
            .then((response) => {
                return response.json();
            })
            .then((repos) => {
                // project slider init
                for (const repo of repos) {
                    $('#projects-slider').append(create_project_slide(repo))
                }
                const projects_slider = new Slider('#project_slider_init', 1600)
                projects_slider.run()
            }).catch(error => console.log(error));
        // feedback slider init
        for (const feedback of feedbacks) {
            $('#feedback-slider').append(create_feedback_slide(feedback))
        }
        const feedback_slider = new Slider('#feedback_slider_init', 1600)
        feedback_slider.run()

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