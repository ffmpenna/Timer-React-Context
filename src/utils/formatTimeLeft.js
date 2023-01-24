function formatSeconds(seconds) {
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return seconds
}

function setCircleDashArray(value) {
    const rawTimeFraction = value/60;
    const timeFraction = rawTimeFraction - (1/60) *(1 - rawTimeFraction)

        const circleDasharray = `${(timeFraction * 283).toFixed(0)} 283`
        const array = document.querySelectorAll(".base-timer__path-remaining");
        array.forEach(element => {
            element.setAttribute("stroke-dasharray", circleDasharray);
        });

}

export { formatSeconds, setCircleDashArray }