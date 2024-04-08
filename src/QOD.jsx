// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "How do you know what type or designation of harness to wear?",
                choices: [
                    "Always wear a multi-purpose harness.", "Selection of a harness to carry out a specific task is determined in the Fall Protection Plan or by consulting your supervisor.", "Always wear a Class A harness.", "When carrying out any task, always wear a type of harness that allows hand free operations."
                ],
                correctAnswer: "Selection of a harness to carry out a specific task is determined in the Fall Protection Plan or by consulting your supervisor."
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "Carrying tools or materials by hand or down a ladder is not permitted. Workers must maintain:",
                choices: [
                    "Visual contact", "Rung and rail contact", "3-point contact", "One-foot contact"
                ],
                correctAnswer: "3-point contact"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "What is the most common target force for a personal fall arrest system?",
                choices: [
                    "2 kN (450 lbs)", "4 kN (900 lbs)", "8 kN (1800 lbs)", "12 kN (2700 lbs)"
                ],
                correctAnswer: "4 kN (900 lbs)"
            },{
                type: "radiogroup",
                name: "question4",
                title: "What does MAF mean?",
                choices: [
                    "Mean Arrest Force", "Maximum Arresting Force", "Minimum Arrest Force", "Maximum Available Force"
                ],
                correctAnswer: "Maximum Arresting Force"
            },{
                type: "radiogroup",
                name: "question5",
                title: "Which of the following statements best describe a swing fall?",
                choices: [
                    "Begins with the failure of a worker's secondary attachment.", "Occurs once the primary system tightens and the fall accelerates.", "Begins with the worker moving vertically from the anchor position.", "A fall followed by a pendulum swing with possibly greater impact when the worker hits an obstruction."
                ],
                correctAnswer: "A fall followed by a pendulum swing with possibly greater impact when the worker hits an obstruction."
            },{
                type: "radiogroup",
                name: "question6",
                title: "Which of the following is a correct statement concerning the force of gravity?",
                choices: [
                    "The force of gravity causes increasing velocity by accelerating a falling body.", "The force of gravity is caused by the air resistance slowing you down.", "The force of gravity keeps you attached to the structure.", "The force of gravity can cause you to trip or slip."
                ],
                correctAnswer: "The force of gravity causes increasing velocity by accelerating a falling body."
            },{
                type: "radiogroup",
                name: "question7",
                title: "What are some common causes of falls from heights?",
                choices: [
                    "Missing or defective guardrails", "Lack of training", "Poorly erected or maintained ladders or scaffolds", "All the above"
                ],
                correctAnswer: "All the above"
            },{
                type: "radiogroup",
                name: "question8",
                title: "Where should you look for the minimum strength and design requirements for guardrails?",
                choices: [
                    "Regulations for Construction Projects", "Blueprint drawings", "Building Code", "Supervisor's logbook"
                ],
                correctAnswer: "Regulations for Construction Projects"
            },{
                type: "radiogroup",
                name: "question9",
                title: "Posts, top rails, and mid-rails of a wooden guardrail shall each have minimum dimensions of:",
                choices: [
                    "19 mm by 89 mm (1 inches by 4 inches)", "38 mm by 89 mm (2 inches by 4 inches)", "38 mm by 133 mm (2 inches by 6 inches)", "89 mm by 89 mm (4 inches by 4 inches)"
                ],
                correctAnswer: "38 mm by 89 mm (2 inches by 4 inches)"
            },{
                type: "radiogroup",
                name: "question10",
                title: "Which is a fundamental rule for safe ladder use?",
                choices: [
                    "Safety goggles", "The ladder HAS to be metal", "Secured ladder", "Gloves"
                ],
                correctAnswer: "Secured ladder"
            }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Fall Protection Plan",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on the Fall Protection Plan. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}
