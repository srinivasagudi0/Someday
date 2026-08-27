function bootSequence() {
    const messages = [
        'Initializing...',
        'Loading interface...',
        'Connecting Systems...',
        'Preparing Tomorrow...',
        'Ready.'
    ];

    const colors = [
        "#F53127",
        "brown",
        "orange",
        "pink",
        "violet"
    ]

    let currentMessage = 0;
    let currrentColor = 0;
    let currentScale = 0;
    let currentAngle = 0;

    const bootText = document.getElementById("boot-text");
    function moveOn() {
        bootText.style.color = colors[currrentColor];
        currrentColor++;
        currentScale +=2;
        bootText.style.scale = currentScale;
        currentAngle+=10;
        bootText.style.rotate = currentAngle+"deg";
        bootText.textContent = messages[currentMessage];
        currentMessage++;
        if (currentMessage == messages.length) {
            clearInterval(starter)
            setInterval(500)
        }
    }
    const starter = setInterval(moveOn, 1000);
}

bootSequence();
