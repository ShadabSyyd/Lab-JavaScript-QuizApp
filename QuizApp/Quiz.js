function Question(questionText){
    this.questionText=questionText;
}
const question1=new Question("Javascript Supports");
const question2=new Question("Which language is used for styling web pages ?");
const question3=new Question("Which is not a JavaScript framework ?");
const question4=new Question("Which is used to connect to Database ?");
const question5=new Question("JavaScript is a");

function AnswerOption(answerText){
    this.answerText=answerText;
}
//1
const answerOptionFunctions=new AnswerOption("Functions");
const answerOptionXhtml=new AnswerOption("XHTML");
const answerOptionCss=new AnswerOption("CSS");
const answerOptionHtml=new AnswerOption("HTML");
//2
const answerOptionJquery=new AnswerOption("JQuery");
const answerOptionXml=new AnswerOption("XML");
//3
const answerOptionPythonscript = new AnswerOption("Python Script");
const answerOptionDjango = new AnswerOption("Django");
const answerOptionNodejs = new AnswerOption("Node JS");
//4
const answerOptionPhp = new AnswerOption("PHP");
const answerOptionJs = new AnswerOption("JS");
const answerOptionAll = new AnswerOption("All");
//5
const answerOptionLanguage = new AnswerOption("Language");
const answerOptionProgramminglanguage = new AnswerOption("Programming Language");
const answerOptionDevelopment = new AnswerOption("Development");


const answerOptionsQ1=[answerOptionFunctions,answerOptionXhtml,answerOptionCss,answerOptionHtml];
const answerOptionsQ2=[answerOptionHtml,answerOptionJquery,answerOptionCss,answerOptionXml];
const answerOptionsQ3=[answerOptionPythonscript,answerOptionJquery,answerOptionDjango,answerOptionNodejs];
const answerOptionsQ4=[answerOptionPhp,answerOptionHtml,answerOptionJs,answerOptionAll];
const answerOptionsQ5=[answerOptionLanguage,answerOptionProgramminglanguage,answerOptionDevelopment,answerOptionAll];

function QuestionAnswerOptionsPair(question,answerOptions,correctAnswer){
    this.question=question;
    this.answerOptions=answerOptions;
    this.isCorrectAnswer=function(userSuppliedAnswer){
        if(userSuppliedAnswer==this.correctAnswer.answerText){
            console.log("Correct Answer");
            return tffrue;
        }else{
            console.log("Incorrect Answer");
            return false;
        }
    }
}

const questionAnswerOptionsPair1=new QuestionAnswerOptionsPair(question1,answerOptionsQ1);
const questionAnswerOptionsPair2=new QuestionAnswerOptionsPair(question2,answerOptionsQ2);
const questionAnswerOptionsPair3=new QuestionAnswerOptionsPair(question3,answerOptionsQ3);
const questionAnswerOptionsPair4=new QuestionAnswerOptionsPair(question4,answerOptionsQ4);
const questionAnswerOptionsPair5=new QuestionAnswerOptionsPair(question5,answerOptionsQ5);


const qaPairArray=[questionAnswerOptionsPair1,questionAnswerOptionsPair2,
    questionAnswerOptionsPair3,questionAnswerOptionsPair4,questionAnswerOptionsPair5];
//Quiz Application


function QuizApplication(qaPairArray){
    this.qaPairArray=qaPairArray;
    this.score=0;
    this.pageIndex=0;

    this.getScore=function(){
        return this.score;
    }
    this.incrementScore=function(){
        this.score++;
    }
    this.calculateSuccessPercentage=function(){
        (this.score/this.qaPairArray.length)*100;
    }

    this.isLastQAPair=function(){
        if(this.pageIndex==(this.qaPairArray.length-1)){return true;}
        else{return false;}
    }
    
    this.addListeners = function(){

    for (let index = 0; index <= 3; index ++){

        let buttonId = "btn" + index;
        const answerOptionButton = document.getElementById(buttonId);

        // console.log("Before the onclick")
        // console.log(this);

        let currentQuizAppObject = this;

        answerOptionButton.onclick = function(event){

        const eventTarget = event.currentTarget;

        console.log("Button clicked");
        console.log(eventTarget);

        const userSuppliedAnswer = eventTarget.children[0].innerHTML;
        console.log(userSuppliedAnswer);

        console.log(this);

        const qaOptionsPair = currentQuizAppObject.qaPairArray[currentQuizAppObject.pageIndex];
        
        const outcome = qaOptionsPair.isCorrectAnswer(userSuppliedAnswer) 

        if (outcome){
            console.log("Correct Answer");

            currentQuizAppObject.incrementScore();
        }else{
            console.log("Incorrect Answer");
        }

        currentQuizAppObject.next();

        // Extract the button text - user-suuplied ansewer
        // correctAnswer(user-answer)
        // if (right-answer)
            // increment-score
        // next()
        }

    }
    }

    this.next = function(){

    if (this.isLastQAPair()){

        this.displayResultPage();
    }else{

        this.initNextPage();
    }

    }

    this.initNextPage = function(){

    this.pageIndex ++;
    this.addListeners();
    this.displayQuizPage();
    }

    this.displayQuizPage = function() {

    // this.displayHeader();
    this.displayQASection();
    this.displayFooter();
    }

    this.displayQASection = function(){

    const qaOptionsPair = this.qaPairArray[this.pageIndex]

    const questionHtmlElement = document.getElementById("question");
    questionHtmlElement.innerHTML = qaOptionsPair.question.questionText;
    
    for (let index = 0; index < 4; index ++){

        let answerChoiceButtonId = "choice" + index;

        const answerChoiceHtmlButtonElement = document.getElementById(answerChoiceButtonId);

        answerChoiceHtmlButtonElement.innerHTML = qaOptionsPair.answerOptions[index].answerText;
    }
    }



    this.displayFooter = function(){

    const progressHtmlElement = document.getElementById("progress");
    
    progressHtmlElement.innerHTML = `Question ${this.pageIndex + 1} 
    of ${this.qaPairArray.length}`
    }


    this.displayResultPage = function () {

    const finalScoreHtmlFragment =
        `<h1>Result</h1>
        <h2 id='score'>Your scores: ${this.getScore()}. Percentage is ${this.calculateSuccessPercentage()}</h2>         
        `
    const quizElement = document.getElementById("quiz");
    quizElement.innerHTML = finalScoreHtmlFragment;
    }

    // Create a method for displayQASection
    // Get a reference to qaOptions 

    // Use pageIndex
    // Get refrece to 'question' html object
    // innerHtml property

    // AnswerChoices
    // Get a reference to choice0
    // 



    // Create a method like addListeners
    // Get a reference to each of the button [4 button]
    // Run a for loop [btn + index]
    // add the onclick listener
    // console.log message
}
