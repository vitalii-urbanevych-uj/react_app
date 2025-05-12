import { use, useState } from "react";
import Results from "./results";

function Quiz() {
    const questionsList = [
        {
            "question": "Które z poniższych państw NIE graniczy z Polską?",
            "options": ["Czechy", "Słowacja", "Węgry", "Niemcy"],
            "answer": "Węgry"
        },
        {
            "question": "Która planeta w Układzie Słonecznym jest największa pod względem objętości?",
            "options": ["Saturn", "Uran", "Jowisz", "Neptun"],
            "answer": "Jowisz"
        },
        {
            "question": "Kto zagrał główną rolę w filmie Forrest Gump z 1994 roku?",
            "options": ["Tom Cruise", "Tom Hanks", "Brad Pitt", "Leonardo DiCaprio"],
            "answer": "Tom Hanks"
        },

    ]

    const initialAnswers = Array(questionsList.length).fill(null);

    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [isQuizFinished, setFinished] = useState(false);

    function goNext() {
        if (currentQuestion < questionsList.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinished(true);
        }
    }

    function goPrev() {
        setCurrentQuestion((currentQuestion - 1 + questionsList.length) % questionsList.length);
    }

    function setUserAnswer(option) {
        var tmpUserAnswers = [...userAnswers];
        tmpUserAnswers[currentQuestion] = option;

        setUserAnswers(tmpUserAnswers);
    }

    function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setFinished(false);
    }

    if (isQuizFinished) {
        return <Results userAnswers={userAnswers}
                        questionsList={questionsList}
                        restartQuiz={restartQuiz}/>
    }

    console.log(userAnswers);


    return (
        <div>
            <h2> Pytanie {currentQuestion + 1} </h2>
            <p className="lead"> {questionsList[currentQuestion].question} </p>
            <div className="d-flex flex-column gap-2">
                {questionsList[currentQuestion].options.map((option) => (
                    <button
                    className={"btn btn-outline-primary" + (userAnswers[currentQuestion] === option ? " active" : "" )}
                    onClick={() => setUserAnswer(option)}> {option} </button>
                ))}
            </div>

            <div className="d-flex justify-content-between m-2">
                <button className="btn btn-primary w-25"
                    onClick={goPrev}
                    disabled={currentQuestion === 0}
                > Prev </button>
                <button
                    className="btn btn-primary w-25"
                    onClick={goNext}
                    disabled={!userAnswers[currentQuestion]}>
                    {currentQuestion === questionsList.length -1 ? "Finish" : "Next"} </button>
            </div>

        </div>
    )
}

export default Quiz