const depositType = document.getElementById("depositType");
const depositTerm = document.getElementById("depositTerm");


depositType.addEventListener("change", function() {
	const selectedValue = depositType.value;
	if (selectedValue === "Пополняемый") {
		depositTerm.innerHTML = `
		<option value="none" selected disabled hidden>Срок вклада</option>
		<option value="6 месяцев">6 Месяцев (20 %)</option>
		<option value="12 месяцев">12 Месяцев (22 %)</option>
		<option value="18 месяцев">18 Месяцев (15 %)</option>
		<option value="24 месяцев">24 Месяцев (10 %)</option>
		`; 
	} else if (selectedValue ==="Срочный") {
		depositTerm.innerHTML = `
		<option value="none" selected disabled hidden>Срок вклада</option>
		<option value="3 месяца">3 Месяца (20 %)</option>
		<option value="6 месяцев">6 Месяцев (22 %)</option>
		<option value="9 месяцев">9 Месяцев (24 %)</option>
		<option value="12 месяцев">12 Месяцев (24 %)</option>
		<option value="18 месяцев">18 Месяцев (18 %)</option>
		<option value="24 месяцев">24 Месяцев (15 %)</option>
		`;
	}
});

function calculate() {
	const depositType = document.getElementById("depositType").value;
	const depositTerm = document.getElementById("depositTerm").value;
	const depositAmount = document.getElementById("depositAmount").value;

	if (depositType === "none" || depositTerm === "none"){
		alert("Некорретный ввод")
		return
	}
	if (depositAmount < 0)
		alert("Укажите положительное число")
		return
	}

	if (isNaN(depositAmount)){
		alert("Укажите положительное число")
		return
	}
	

	let interestRate;
	let totalAmount;

	if (depositType === "Пополняемый") {
		switch (depositTerm) {
				case "6 месяцев":
					interestRate = 0.2;
					break;
				case "12 месяцев":
					interestRate = 0.22;
					break;
					case "18 месяцев":
						interestRate = 0.15;
						break;
					case
						"24 месяцев":
					interestRate = 0.1;
					break;
				default:
					interestRate = 0;
			}
		} else if (depositType === "Срочный") {
			switch (depositTerm) {
				case "3 месяца":
					interestRate = 0.2;
					break;
				case "6 месяцев":
					interestRate = 0.22;
					break;
				case "9 месяцев":
					interestRate = 0.23;
					break;
				case "12 месяцев":
					interestRate = 0.24;
					break;
				case "18 месяцев":
					interestRate = 0.18;
					break;
				case "24 месяцев":
					interestRate = 0.15;
					break;
				default:
					interestRate = 0;
			}
	}

	totalAmount = depositAmount * (1 + interestRate);

	document.getElementById("result").innerHTML = `Вклад "${depositType}" на срок "${depositTerm}", на сумму ${depositAmount} руб. Процентная ставка ${interestRate * 100}%. Получите ${totalAmount.toFixed(2)} руб.`
}