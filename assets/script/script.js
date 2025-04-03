
// if 
// alert('Введите дату рождения в формате ДД.ММ.ГГГГ');
// let date = prompt('Введите дату рождения в формате ДД.ММ.ГГГГ');
const currentYear = new Date().getFullYear();
        // Формируем минимальную и максимальную дату в текущем году
        const minDate = `${currentYear}-01-01`;
        const maxDate = `${currentYear}-12-31`;

const birthdateInput = document.getElementById('birthdate');
birthdateInput.setAttribute('min',minDate);
birthdateInput.setAttribute('max', maxDate);

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Дни до дня рождения</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        #error {
            color: red;
            display: none;
        }
    </style>
</head>
<body>
    <h1>Дни до дня рождения</h1>
    <label for="birthdate">Выберите дату рождения:</label>
    <input type="date" id="birthdate">
    <button onclick="calculateDays()">Рассчитать</button>
    <p id="error">Пожалуйста, введите дату рождения!</p>
    <p id="result"></p>

    <script>
        function calculateDays() {
            const birthdateInput = document.getElementById("birthdate");
            const result = document.getElementById("result");
            const error = document.getElementById("error");
            
            if (!birthdateInput.value) {
                error.style.display = "block";
                result.textContent = "";
                return;
            }
            
            error.style.display = "none";
            
            const today = new Date();
            const birthdate = new Date(birthdateInput.value);
            birthdate.setFullYear(today.getFullYear());
            
            if (birthdate < today) {
                birthdate.setFullYear(today.getFullYear() + 1);
            }
            
            const diffTime = birthdate - today;
            const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            result.textContent = `До вашего дня рождения осталось ${daysLeft} дней!`;
        }
        
        document.getElementById("birthdate").addEventListener("input", function() {
            document.getElementById("error").style.display = "none";
        });
    </script>
</body>
</html>
