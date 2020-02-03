//Complete the loop, indicate when the game is over//
//Cory workout the timer for these questions///

function quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}
quiz.prototype.getQuestionIndex = function() {
 return this.questions[this.questionIndex]
}
   
};
Quiz.prototype.isEnded = function() {
    return this.questions.length ===this.QuestionIndex;
};

Quiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}
    