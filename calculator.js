let displayValue = '';
        
        function appendToDisplay(value) {
            displayValue += value;
            document.getElementById('display').value = displayValue;
        }

        function clearDisplay() {
            displayValue = '';
            document.getElementById('display').value = '';
        }

        function deleteSingle() {
            var display = document.getElementById('display');
            var currentValue = displayValue;
                displayValue = currentValue.slice(0, -1);
                document.getElementById('display').value = displayValue;
            
        }

        function calculateResult() {
            var currentValue = displayValue;
            currentValue = currentValue.replace(/(\d+)%/g, function(match, p1) {
                return parseFloat(p1) / 100;
            });
        
            try {
                displayValue = eval(currentValue);
                document.getElementById('display').value = displayValue;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }