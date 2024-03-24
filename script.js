document.addEventListener("DOMContentLoaded", function() {
    const chatbotIcon = document.getElementById("chatbot-icon");
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const userQueryInput = document.getElementById("user-query");
    const sendBtn = document.getElementById("send-btn");
    const questionBoxes = document.querySelector(".question-boxes");

    let introDisplayed = false; // Flag to track if introduction message has been displayed

    // Predefined questions and answers
    const predefinedQuestions = [
        { question: "What is AIML?", answer: "AIML stands for Artificial Intelligence Markup Language. It's an XML-based markup language used for creating chatbots and conversational agents." },
        { question: "How can I learn AIML?", answer: "You can learn AIML through online courses, tutorials, and documentation available on various platforms." },
        { question: "Are there any online courses for AIML?", answer: "Yes, there are several online courses available for learning AIML. You can explore platforms like Coursera, Udemy, and edX for AIML courses." }
        // Add more predefined questions and answers here
    ];

    // Display predefined questions
    predefinedQuestions.forEach(question => {
        const questionBox = createQuestionBox(question.question);
        questionBoxes.appendChild(questionBox);
    });

    // Send user query to chatbot
    sendBtn.addEventListener("click", function() {
        const userQuery = userQueryInput.value.trim();
        if (userQuery !== "") {
            appendMessage(userQuery, "user");
            handleUserQuery(userQuery);
            userQueryInput.value = "";
        }
    });

    // Handle user query
    function handleUserQuery(query) {
        const predefinedAnswer = predefinedQuestions.find(q => q.question.toLowerCase() === query.toLowerCase());
        if (predefinedAnswer) {
            appendMessage(predefinedAnswer.answer, "chatbot");
        } else {
            appendMessage("Sorry, I couldn't understand your question. Please contact us by email for assistance.", "chatbot");
        }
    }

    // Function to append message to chatbot container
    function appendMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.className = sender === "user" ? "user-message" : "chatbot-message";
        messageElement.innerText = message;
        chatbotMessages.appendChild(messageElement);
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Function to create question box
    function createQuestionBox(question) {
        const questionBox = document.createElement("div");
        questionBox.className = "question-box";
        questionBox.textContent = question;
        questionBox.addEventListener("click", function() {
            appendMessage(question, "user");
            handleUserQuery(question);
        });
        return questionBox;
    }

    // Toggle chatbot container visibility
    chatbotIcon.addEventListener("click", function() {
        chatbotContainer.style.display = chatbotContainer.style.display === "block" ? "none" : "block";
        if (!introDisplayed) {
            appendMessage("Hi! I'm your friendly chatbot. How can I assist you today?", "chatbot");
            introDisplayed = true;
        }
    });
});
