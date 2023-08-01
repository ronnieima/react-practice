// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [convertFrom, setConvertFrom] = useState("USD");
  const [convertTo, setConvertTo] = useState("EUR");
  const [rate, setRate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchConversion() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${convertFrom}&to=${convertTo}`,
            { signal: controller.signal }
          );
          const data = await res.json();
          setRate(data.rates[convertTo]);
        } catch (err) {
          if (err === "AbortError") {
            return;
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (convertTo === convertFrom) return setRate(amount);
      fetchConversion();

      return function () {
        controller.abort();
      };
    },
    [amount, convertFrom, convertTo]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={convertFrom}
        onChange={(e) => setConvertFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={convertTo}
        disabled={isLoading}
        onChange={(e) => setConvertTo(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {rate} {convertTo}
      </p>
    </div>
  );
}
