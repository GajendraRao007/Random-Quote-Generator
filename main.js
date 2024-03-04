let randomQuotes = ["The only way to achieve the impossible is to believe it is possible.","Your time is limited, don't waste it living someone else's life.","Success is not final, failure is not fatal: It is the courage to continue that counts.","Believe you can and you're halfway there.","The only limit to our realization of tomorrow will be our doubts of today.", "The only person you are destined to become is the person you decide to be.", "Success is stumbling from failure to failure with no loss of enthusiasm.", "The only way to do great work is to love what you do.","Don't watch the clock; do what it does. Keep going.","It always seems impossible until it's done."]

document.getElementById('btn').addEventListener('click', generateQuote)

function generateQuote(){
    let randomIndex = Math.floor(Math.random() * randomQuotes.length);
    document.getElementById('display').textContent = randomQuotes[randomIndex]
}

function copy(){   
    let copyQuote = document.getElementById('display');
    let range = document.createRange();
    range.selectNode(copyQuote);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Text copied to clipboard');
    } catch (error) {
        console.error('Unable to copy text to clipboard', error);
    }
}