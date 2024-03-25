let questions = document.getElementsByClassName('question');
let answers = document.getElementsByClassName('answer');
let currAnswer = -1;
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('mouseenter', () => {
        questions[i].style.backgroundColor = "rgb(65,65,65)";
        questions[i].style.cursor = 'pointer';
    });
    
    questions[i].addEventListener('mouseleave', () => {
        questions[i].style.backgroundColor = "rgb(45,45,45)";
        questions[i].style.cursor = 'default';
    });
    questions[i].addEventListener('click', () => {
        if (currAnswer >= 0) {
            answers[currAnswer].style.display = 'none';
            questions[currAnswer].getElementsByTagName('img')[0].style.transform = 'none';
        }
        if (currAnswer != i) {
            questions[i].getElementsByTagName('img')[0].style.transform = 'rotate(45deg)';
            answers[i].style.display = 'block';
            currAnswer = i;
        }
        else
        currAnswer=-1;
    })
};