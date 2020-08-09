var questions = [
            { 
        question : "who is a founder of pakistan?",
        option1:" A : Quaid-e-Azam",
        option2:" B : Liqat Ali khan",
        option3:" C : Allama Iqbal",
        option4:" D : Shoukat Ali",
        answer:"1"
    },{
        question : "What is a capital of pakistan?",
        option1:" A : Karachi",
        option2:" B : Islamabad",
        option3:" C : Peshawer",
        option4:" D : Lahore",
        answer:"2"
    },{
        question : "What is national game of pakistan?",
        option1:" A : Football",
        option2:" B : Cricket",
        option3:" C : Hockey",
        option4:" D : Snooker",
        answer:"3"
    },{
        question : "What is a currency name of pakistan?",
        option1:" A : Riyal",
        option2:" B : Pounds",
        option3:" C : US Dollar",
        option4:" D : Rupees",
        answer:"4"
    },{
        question : "Who is Current president of pakistan?",
        option1:" A : Arif Alvi",
        option2:" B : Rajab Tayyab",
        option3:" C : Shehzada Salman",
        option4:" D : Pervaiz Musharraf",
        answer:"1"
    },{
        question : "Who is current manager of SMIT?",
        option1:" A : sir Basit Khan",
        option2:" B : sir Muhammad Ali Mughal",
        option3:" C : sir Fahad",
        option4:" D : Sir Gaus",
        answer:"2"
    },{
        question : "What is means of HTML?",
        option1:" A : High time mile limit",
        option2:" B : Help to more leaf",
        option3:" C : Hyper text markup language",
        option4:" D : Height to mine lamp",
        answer:"3"
    },{
        question : "What is a means of IBM?",
        option1:" A : Internet byte mega",
        option2:" B : Inter by mine",
        option3:" C : Intenet by mobile",
        option4:" D : Internation business machine",
        answer:"4"
    },{
        question : "Where is a pakistan in world?",
        option1:" A : Asia",
        option2:" B : Eourpe",
        option3:" C : Aalantika",
        option4:" D : South Africa",
        answer:"1"
    },{
        question : "Where is a main center of Faizan-e-Madina in pakistan?",
        option1:" A : Lahore",
        option2:" B : Karachi",
        option3:" C : Peshawar",
        option4:" D : Multan",
        answer:"2"
    }
]



var currentQuestion = 0;
var score = 0;
var totalQuestion = questions.length;

var container = document.getElementById("quizQuestion");
var questionE = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextBtn = document.getElementById("nextButton");
var result = document.getElementById("result");


function LoadQuestion(questionIndex){
    var q = questions[questionIndex];
    question.textContent = (questionIndex +1)+". "+q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;

}

function LoadNextQuestion(){
    var selectOption = document.querySelector("input[type=radio]:checked");
    if(!selectOption){
        alert("please select your answer!")
        return;
    }
    
    var answer1 = selectOption.value;
    if(questions[currentQuestion].answer == answer1){
        score += 1000;
    }
    selectOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totalQuestion -1){
        nextBtn.textContent = "Finish";
    }
    if(currentQuestion == totalQuestion){
        container.style.display = "none";
        result.style.display = "";
        result.textContent = "Congratulation You have Won: $"+ score;
        return;
    }
    LoadQuestion(currentQuestion);
}

LoadQuestion(currentQuestion);
