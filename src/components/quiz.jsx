import { useState } from "react";

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

    const [currentQuestion, setCurrentQuestion] = useState(0);

    function goNext() {
        // if (currentQuestion < questionsList.length - 1) {
        setCurrentQuestion((currentQuestion+1) % questionsList.length );
    }

    function goPrev() {
        setCurrentQuestion((currentQuestion-1 + questionsList.length) % questionsList.length );
    }


    return (
        <div>
            <h2> Pytanie {currentQuestion + 1} </h2>
            <p className="lead"> {questionsList[currentQuestion].question} </p>
            <div className="d-flex flex-column gap-2">
                {questionsList[currentQuestion].options.map((option) => (
                    <button className="btn btn-outline-primary"> {option} </button>
                ))}
            </div>

            <div className="d-flex justify-content-between m-2">
                <button className="btn btn-primary w-25"
                onClick={goPrev}
                disabled={currentQuestion === 0}
                > Prev </button>
                <button
                className="btn btn-primary w-25"
                onClick={goNext}>
                    Next </button>
            </div>

        </div>
    )
}

export default Quiz