function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else if (bmi >= 30 && bmi < 34.9) {
            category = 'Obese (Class 1)';
        } else if (bmi >= 35 && bmi < 39.9) {
            category = 'Obese (Class 2)';
        } else {
            category = 'Extremely obese';
        }

        document.getElementById('bmi-value').textContent = bmi;
        document.getElementById('bmi-category').textContent = category;
    } else {
        alert('Please enter valid height and weight values.');
    }
}
