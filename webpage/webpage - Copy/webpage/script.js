

document.addEventListener('DOMContentLoaded', function () {
    const text = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"; // Replace with your desired text
    const gradientTextElement = document.getElementById('gradientText');

    let index = 0;

    function type() {
        if (index < text.length) {
            gradientTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            gradientTextElement.style.width = 'auto'; // Show the full text once typed
        }
    }

    type();
});