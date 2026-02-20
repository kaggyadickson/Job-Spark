// script.js - Job Spark adaptive test starter

function startTest() {
    const skills = document.getElementById("skills").value.trim();
    const testArea = document.getElementById("testArea");

    if(skills === "") {
        alert("Please enter your skills first!");
        return;
    }

    // Simple adaptive test logic
    testArea.innerHTML = `<h2>Test for ${skills}</h2>`;
    
    // Start with first question
    let questionNumber = 1;
    let score = 0;

    function nextQuestion() {
        if(questionNumber > 3) { // We'll use 3 questions for MVP
            testArea.innerHTML = `<h2>Test completed!</h2>
                                  <p>Your score: ${score}/3</p>
                                  <p>Congratulations! You earned a verified badge.</p>`;
            return;
        }

        // Example questions (later we can make dynamic based on skills)
        testArea.innerHTML = `<p>Question ${questionNumber}: What is 2 + ${questionNumber}?</p>
                              <input type="number" id="answer" placeholder="Your answer">
                              <button onclick="checkAnswer()">Submit</button>`;

        function checkAnswer() {
            const answer = parseInt(document.getElementById("answer").value);
            if(answer === questionNumber + 2) {
                score++;
            }
            questionNumber++;
            nextQuestion();
        }

        // Attach the function to the global scope
        window.checkAnswer = checkAnswer;
    }

    nextQuestion();
    }
