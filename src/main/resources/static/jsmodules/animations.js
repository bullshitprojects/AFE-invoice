const animations = () => {
    const generalConfigs = {
        distance: '80px',
        duration: 2000,
        reset: false
    }

    const animationFromTop = ScrollReveal({
        origin: 'top',
        ...generalConfigs
    })

    animationFromTop.reveal('.info-input', {delay: 200})
    animationFromTop.reveal('.mb-3', {interval: 200})
    animationFromTop.reveal('.table', {delay: 200})
}

export default animations