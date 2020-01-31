function calculateInsurance() {
             let clientName = document.getElementById('formName').value;
             let clientCountry = document.getElementById('formCountry').value;
             let clientAge = parseInt(document.getElementById('formAge').value);
             let clientHP = parseInt(document.getElementById('formHP').value);
             let insurance = 0;

             if (clientCountry == 'austria') {
                 insurance = clientHP * 100 / clientAge + 50;
             } else if (clientCountry == 'hungary') {
                 insurance = clientHP * 120 / clientAge + 100;
             } else if (clientCountry == 'greece') {
                 insurance = clientHP * 150 / (clientAge + 3) + 50;
             }
             document.getElementById('output').innerHTML = '<p>' + clientName + ', your insurance costs ' + insurance.toFixed(2) + '€</p>';
         }