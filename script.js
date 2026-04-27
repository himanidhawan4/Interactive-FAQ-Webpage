class QAItem {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }

    // Method to create and return <details> with <summary>
    render() {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        summary.textContent = this.question;

        const answerPara = document.createElement("p");
        answerPara.textContent = this.answer;

        details.appendChild(summary);
        details.appendChild(answerPara);

        return details;
    }
}

// Array of QAItem objects
const qaList = [
    new QAItem(
        "What is Web Development?",
        "Web development is the process of creating, designing, and maintaining websites or web applications. It involves working on the layout, structure, and functionality using technologies like HTML, CSS, and JavaScript. It can be divided into front-end development (what users see) and back-end development (server-side logic and databases). The goal is to make websites visually appealing, user-friendly, and responsive across devices."
    ),
    new QAItem(
        "What is HTML?",
        "HTML (HyperText Markup Language) is the standard language used to create the structure of web pages. It uses elements like headings, paragraphs, and links to define content."
    ),
    new QAItem(
        "What is CSS?",
        "CSS (Cascading Style Sheets) is used to style and design HTML elements. It controls layout, colors, fonts, and responsiveness."
    )
];

const container = document.getElementById("faq-container");

// Loop through qaList and add each item to container
qaList.forEach(item => {
    container.appendChild(item.render());
});
