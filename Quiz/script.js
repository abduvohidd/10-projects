const quizData = [
    {
        question: "How old is Florin?",
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },{
        question: "What is the most used programming language in 2019?",
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    },{
        question: "Who is he President os US?",
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrel',
        correct: 'b'
    },{
        question: "What does HTML stand for?",
        a: 'HyperText Markup Language',
        b: 'Cascading Style Sheet',
        c: 'JAson Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },{
        question: "What year was JavaScript launched?",
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }
];

// 1chi ish
const questionEl = document.querySelector('#question');
const quiz = document.querySelector('#quiz');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBTn = document.querySelector('#submit');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
// let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    deselectAnswers();
}

function getSelected() {
    

    let answer  = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
        answer = answerEl.id;
        }
    });
    return answer;
}


submitBTn.addEventListener('click',()=>{
    
    const answer = getSelected();
        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
        }
//
        currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
            }else{
                quiz.innerHTML = `<h2>You answer correctly at ${score}/${quizData.length} questions. </h2> <button onclick="location.reload()">Reload</button>`
            }
    
        
        
});


function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}





