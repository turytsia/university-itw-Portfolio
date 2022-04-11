$(document).ready(() => {

    //navigation click handling
    $("#about_btn").click(about_scroll_handler);
    $("#skill_btn").click(skill_scroll_handler);
    $("#projects_btn").click(projects_scroll_handler);
    $("#feedback_btn").click(feedback_scroll_handler);

    //hellos animation
    setInterval(hello_random, 300);

    const body = document.body;
    const main = document.getElementById('inertia');

    let sx = 0, // For scroll positions
        sy = 0;
    let dx = sx, // For container positions
        dy = sy;


    body.style.height = main.clientHeight + 'px';


    main.style.position = 'fixed';
    main.style.top = 0;
    main.style.left = 0;

    // Bind a scroll function
    $(document).scroll(easeScroll)

    function easeScroll() {

        sx = window.pageXOffset;
        sy = window.pageYOffset;
    }


    window.requestAnimationFrame(render);

    function render() {
        const last_dy = dy
            //We calculate our container position by linear interpolation method
        dx = li(dx, sx, 0.07);
        dy = li(dy, sy, 0.07);
        dx = Math.floor(dx * 100) / 100;
        dy = Math.floor(dy * 100) / 100;
        if (last_dy !== dy) {
            const footer_offset = footer.getBoundingClientRect().top
                //header parallax
            const speed = -dy

            // for loops below suppose to move background
            for (let i = 0; i < parallax_header.length; i++) {
                parallax_header[i][0].style.transform = `translateY(${speed/(i+4)}px)`
            }

            for (const element of parallax_elements) {
                element.css('transform', `translateY(${speed/5}px)`)
            }

            const footer_speed = -(footer_offset - window.innerHeight / 2)

            parallax_elements[0].css('transform', `translateY(${footer_speed/25}px)`)
            parallax_elements[1].css('transform', `translateY(${footer_speed/20}px)`)
            parallax_elements[2].css('transform', `translateY(${footer_speed/10}px)`)
            parallax_elements[3].css('transform', `translateY(${footer_speed/7}px)`)

            // changing navigation panel
            if (isInViewport('about') || isInViewport('project_slider_init')) {
                $("#nav button").css('color', colors.light_purple)
            } else if ((!isInViewport('skill') && !isInViewport('projects')) || isInViewport('feedback_slider_init')) {
                $("#nav button").css('color', 'white')
            } else {
                $("#nav button").css('color', colors.purple)
            }
        }

        main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
        window.requestAnimationFrame(render);
    }

    function li(a, b, n) {
        return (1 - n) * a + n * b;
    }
})