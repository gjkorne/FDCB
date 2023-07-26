function calculateLoan() {
    const loanAmount = document.getElementById('loanAmount').value;
    const interestRate = document.getElementById('interestRate').value / 100 / 12;
    const loanTerm = document.getElementById('loanTerm').value * 12;
    
    const x = Math.pow(1 + interestRate, loanTerm);
    const monthlyPayment = (loanAmount * x * interestRate) / (x - 1);
    
    if (isFinite(monthlyPayment)) {
        document.getElementById('result').innerHTML = 'Monthly Payment: $' + monthlyPayment.toFixed(2);
    } else {
        document.getElementById('result').innerHTML = 'Please check your input.';
    }
}
