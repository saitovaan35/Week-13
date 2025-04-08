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

