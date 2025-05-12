export default function Results(props) {

    var correctAnswers = 0;

    props.userAnswers.map(
        (answer, index) => {
            if (answer === props.questionsList[index].answer) {
                correctAnswers ++;
            }
        }
    )

    return (
        <div> 
            <h1> Quiz jest skończony </h1>
            <p> Twój wynik to {correctAnswers}/{props.userAnswers.length} </p>
            <button className="btn btn-primary w-25"
                    onClick={props.restartQuiz}
                > Restart </button>
        </div>
    )
}