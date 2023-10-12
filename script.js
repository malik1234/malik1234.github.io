document.getElementById('projects').addEventListener('click', function() {
    const content = document.getElementById('content');
    content.innerHTML = `
       
        <div class="mma-projects">
            <div class="mma-project">
                <h3>Project 1</h3>
                <p>Description of Project 1.</p>
                <a href="https://github.com/malik1234/SlidingEightsSolver" target="_blank" class="project-link">View on GitHub</a>
            </div>

            <div class="mma-project">
                <h3>Project 2</h3>
                <p>Description of Project 2.</p>
                <a href="https://github.com/Haz-ctrl/yahoo-finance-stock-sentiment-analyser" target="_blank" class="project-link">View on GitHub</a>
            </div>
            <div class="mma-project">
            <h3>Project 3</h3>
            <p>Description of Project yasqueen.</p>
            <a href="https://github.com/malik1234/BasketBallChatBot" target="_blank" class="project-link">View on GitHub</a>
        </div>
        </div>

        <div class="mma-skills">
        <p>Skills:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C++</li>
            <!-- Add more skills here -->
        </ul>
    </div>
    `;
});

document.getElementById('contact').addEventListener('click', function() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="mma-contact">
            <p>Feel free to contact me:</p>
            <a href="mailto:malik.morhiby@gmail.com">malik.morhiby@gmail.com</a>
        </div>
    `;
});
