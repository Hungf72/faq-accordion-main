document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.Question-text').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.question-icon');
            
            // Toggle the active class for the answer
            answer.classList.toggle('active');
            answer.style.display = answer.classList.contains('active') ? 'block' : 'none';
            
            // Toggle the icon rotation
            icon.classList.toggle('active');
            
            // Change icon source
            const iconSrc = icon.classList.contains('active') 
                ? './assets/images/icon-minus.svg'
                : './assets/images/icon-plus.svg';
            icon.src = iconSrc;
        });
    });
});