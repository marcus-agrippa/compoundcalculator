// DOM Handlers
const calBtn = document.getElementById('calc-btn');
const principal = document.getElementById('principal');
const time = document.getElementById('time-period');
const interestRate = document.getElementById('interest-rate');
const finalBalance = document.getElementById('final-balance');

// Event Listener
calBtn.addEventListener('click', futureValue);

// Calculate future value based on user input
function futureValue(e) {
  p = parseFloat(principal.value);
  r = parseFloat(interestRate.value);
  t = parseFloat(time.value);
  fv = p*(Math.pow((1 + r / 100), t));
  total = fv.toFixed(2);
  console.log(total);

  if(isFinite(total)) {
    finalBalance.innerHTML = `$${total}`;
  } else {
    showError('Please check your numbers')
  }
  
  e.preventDefault();
} 

// Show error if all fields are not completed
function showError(error) {
  finalBalance.innerHTML = 'Please check your numbers';
  finalBalance.style.color = 'red';

}
