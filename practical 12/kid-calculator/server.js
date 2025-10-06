const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route to serve the main calculator page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route to handle calculator operations
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    
    // Validate inputs
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Calculator Error</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <div class="calculator">
                    <h1>⚠️ Oops!</h1>
                    <p style="text-align: center; color: #e53e3e; font-size: 18px;">Please enter valid numbers!</p>
                    <div style="text-align: center;">
                        <a href="/" style="display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Try Again</a>
                    </div>
                </div>
            </body>
            </html>
        `);
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    // Perform calculation
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                return res.send(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Calculator Error</title>
                        <link rel="stylesheet" href="/style.css">
                    </head>
                    <body>
                        <div class="calculator">
                            <h1>⚠️ Oops!</h1>
                            <p style="text-align: center; color: #e53e3e; font-size: 18px;">Cannot divide by zero!</p>
                            <div style="text-align: center;">
                                <a href="/" style="display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Try Again</a>
                            </div>
                        </div>
                    </body>
                    </html>
                `);
            }
            result = number1 / number2;
            break;
        default:
            return res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Calculator Error</title>
                    <link rel="stylesheet" href="/style.css">
                </head>
                <body>
                    <div class="calculator">
                        <h1>⚠️ Oops!</h1>
                        <p style="text-align: center; color: #e53e3e; font-size: 18px;">Invalid operation!</p>
                        <div style="text-align: center;">
                            <a href="/" style="display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Try Again</a>
                        </div>
                    </div>
                </body>
                </html>
            `);
    }

    // Send result page
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Calculator Result</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="calculator">
                <h1>🎉 Result!</h1>
                <div style="text-align: center; font-size: 24px; margin: 20px 0; padding: 20px; background: #f7fafc; border-radius: 10px;">
                    ${number1} ${operation === 'add' ? '+' : operation === 'subtract' ? '−' : operation === 'multiply' ? '×' : '÷'} ${number2} = <strong>${result}</strong>
                </div>
                <div style="text-align: center;">
                    <a href="/" style="display: inline-block; background: #48bb78; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Calculate Again</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
