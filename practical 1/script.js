const votes = {
    'JavaScript': 0,
    'Python': 0,
    'Java': 0
};

function updateVotes() {
    document.getElementById('js-votes').textContent = votes['JavaScript'];
    document.getElementById('py-votes').textContent = votes['Python'];
    document.getElementById('java-votes').textContent = votes['Java'];
}

function vote(language) {
    if (votes.hasOwnProperty(language)) {
        votes[language]++;
        updateVotes();
    }
}

// Remove or comment out the real-time simulation below:
// setInterval(() => {
//     const langs = Object.keys(votes);
//     const randomLang = langs[Math.floor(Math.random() * langs.length)];
//     votes[randomLang]++;
//     updateVotes();
// }, 2000);

updateVotes();