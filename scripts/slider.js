class Slider {
    constructor(id, timer = 2000) {
        this.timer = timer
        this.id = id
    }

    run() {
        const slides = `${this.id} li`
        const slider_length = $(slides).length
        const slide_margins = parseInt($(slides).css('marginRight')) + parseInt($(slides).css('marginLeft'))
        let current_slide = 1;
        let slide_left = $(slides).offset().left

        let slide_length = $(slides).outerWidth() + slide_margins
        let spin = current_slide * (slide_length + slide_left / 2)
        $(this.id).css('transform', `translateX(-${spin}px)`)

        setInterval(() => {
            if (current_slide > 0) {
                $(this.id).css('transform', `translateX(-${slide_length+spin}px)`)
                $(slides).get(current_slide - 1).classList.remove('slide-current')
            }
            $(slides).get(current_slide).classList.add('slide-current')
            current_slide++
            spin += slide_length

            if (current_slide >= slider_length - 1) {
                current_slide = 1
                spin = current_slide * (slide_length + slide_left / 2)
                $(slides).get(current_slide).classList.add('slide-current')
            }
        }, this.timer)
    }
}