class Calculator {
    static calcTip(total, percent, people) {
        parseFloat(total);
        parseFloat(percent);
        parseFloat(people);

        const calc = (total * (percent / 100)) / people;
        const tip = calc.toFixed(2);

        return tip;
    }

    static displayTip(tip) {
        const form = document.querySelector('#tip-form');
        const div = document.createElement('div');

        div.innerHTML = `
        <h5 class="text-center pt-4">Tip:</h5>
        <h5 class="text-center">${tip}</h5>
        `

        form.appendChild(div);
    }
 }

document.querySelector('#tip-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    const total = document.querySelector('#total').value;
    const percent = document.querySelector('#percent').value;
    const people = document.querySelector('#people').value;

    const tip = Calculator.calcTip(total, percent, people);

    Calculator.displayTip(tip);
});
