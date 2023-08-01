// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [convertFrom, setConvertFrom] = useState("USD");
  const [convertTo, setConvertTo] = useState("EUR");
  const [rate, setRate] = useState("");

  useEffect(
    function () {
      async function fetchConversion() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${convertFrom}&to=${convertTo}`
        );
        const data = await res.json();
        setRate(data.rates[convertTo]);
      }

      if (!amount) return;
      fetchConversion();
    },
    [amount, convertFrom, convertTo]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={convertFrom}
        onChange={(e) => setConvertFrom(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={convertTo} onChange={(e) => setConvertTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{rate}</p>
    </div>
  );
}
