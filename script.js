document.addEventListener("DOMContentLoaded", function() {
    const chatbotIcon = document.getElementById("chatbot-icon");
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const userQueryInput = document.getElementById("user-query");
    const sendBtn = document.getElementById("send-btn");
    const questionBoxes = document.querySelector(".question-boxes");

    let introDisplayed = false; 

    const predefinedQuestions = [
        { question: "What is AIML?", answer: "AIML stands for Artificial Intelligence Markup Language. It's an XML-based markup language used for creating chatbots and conversational agents." },
        { question: "How can I learn AIML?", answer: "You can learn AIML through online courses, tutorials, and documentation available on various platforms." },
        { question: "Are there any online courses for AIML?", answer: "Yes, there are several online courses available for learning AIML. You can explore platforms like Coursera, Udemy, and edX for AIML courses." },
        { question: "How can I reach you?", answer: "You can reach us through the following contact details:\nPhone: 9676439719\nEmail: learnnew3477@gmail.com\nAddress: Head Quarters, Hyderabad" }
    ];

    predefinedQuestions.forEach(question => {
        const questionBox = createQuestionBox(question.question);
        questionBoxes.appendChild(questionBox);
    });

    sendBtn.addEventListener("click", function() {
        const userQuery = userQueryInput.value.trim();
        if (userQuery !== "") {
            appendMessage(userQuery, "user");
            handleUserQuery(userQuery);
            userQueryInput.value = "";
        }
    });

    function handleUserQuery(query) {
        const predefinedAnswer = predefinedQuestions.find(q => q.question.toLowerCase() === query.toLowerCase());
        if (predefinedAnswer) {
            appendMessage(predefinedAnswer.answer, "chatbot");
        } else {
            appendMessage("Sorry, I couldn't understand your question. Please contact us by email for assistance.", "chatbot");
        }
    }

    function appendMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.className = sender === "user" ? "user-message" : "chatbot-message";
        messageElement.innerText = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

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

    chatbotIcon.addEventListener("click", function() {
        chatbotContainer.style.display = chatbotContainer.style.display === "block" ? "none" : "block";
        if (!introDisplayed) {
            appendMessage("Hi! I'm your friendly chatbot. How can I assist you today?", "chatbot");
            introDisplayed = true;
        }
    });
});
