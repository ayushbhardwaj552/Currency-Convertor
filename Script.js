let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let btn1 = document.querySelector("#Country1");
let btn2 = document.querySelector("#Country2");
let apikey = "2c0228371ab1401289f74e4e373483b9";
let para = document.querySelector("p");


  async function loadCurrencies() {
    try {
      const res = await fetch(`https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=${apikey}`);
      const data = await res.json();
      const currencies = data.supportedCurrenciesMap;

      // Loop through the currency map and add options
      for (const code in currencies) {
        const option = document.createElement("option");
        option.value = code;
        option.text = `${code} - ${currencies[code].currencyName}`;
        btn1.appendChild(option);
       // btn2.appendChild(option);
      }
    } catch (error) {
      console.error("Error loading currencies:", error);
    }
  }

   async function loadCurrencies1() {
    try {
      const res = await fetch(`https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=${apikey}`);
      const data = await res.json();
      const currencies = data.supportedCurrenciesMap;

      // Loop through the currency map and add options
      for (const code in currencies) {
        const option = document.createElement("option");
        option.value = code;
        option.text = `${code} - ${currencies[code].currencyName}`;
       // btn1.appendChild(option);
        btn2.appendChild(option);
      }
    } catch (error) {
      console.error("Error loading currencies:", error);
    }
  }

  window.addEventListener("DOMContentLoaded", loadCurrencies);
  window.addEventListener("DOMContentLoaded", loadCurrencies1);


function update(data) {
    console.log(btn1.value);
    let val1 = btn1.value;
    let val2 = btn2.value;

    let r1 = parseFloat(data.rates[val1]);
    let r2 = parseFloat(data.rates[val2]);

    let amount = parseFloat(input1.value);

    let answer = (amount / r1) * r2;

    input2.value = answer;  
}


input1.addEventListener("input", async () => {
    try {
        let response = await fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apikey}`);
        let data = await response.json();
        
        console.log(data.rates);
        update(data);

    } catch (error) {
        console.error("Error fetching currency data:", error);
    }
});



btn1.addEventListener("input", async () => {
    try {
        let response = await fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apikey}`);
        let data = await response.json();

        let val1 = btn1.value;
        let val2 = btn2.value;

        let r1 = parseFloat(data.rates[val1]);
        let r2 = parseFloat(data.rates[val2]);

        para.innerText = `1 ${val1} = ${r2} ${val2}`;
        update(data);
    } catch (error) {
        console.error("Error fetching data for btn1 change:", error);
    }
});

btn2.addEventListener("input", async () => {
    try {
        let response = await fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apikey}`);
        let data = await response.json();

        let val1 = btn1.value;
        let val2 = btn2.value;

        let r1 = parseFloat(data.rates[val1]);
        let r2 = parseFloat(data.rates[val2]);

        para.innerText = `1 ${val1} = ${r2} ${val2}`;
        update(data);
    } catch (error) {
        console.error("Error fetching data for btn2 change:", error);
    }
});
