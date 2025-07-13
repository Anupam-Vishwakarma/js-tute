const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if (isNaN(height) || height <= 0) {
    result.innerHTML = 'Please enter valid height.';
    }
    else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = 'Please enter valid weight.';
    }
    else {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `<span> Under Weight: ${bmi} </span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `<span> Normal: ${bmi} </span>`;
         } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML = `<span> Over Weight: ${bmi} </span>`;
        } else {
            result.innerHTML = `<span> Obese: ${bmi} </span>`;
        }
  
    }

})