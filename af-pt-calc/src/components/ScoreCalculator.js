import { useState } from "react";
import Title from "./Title";
import Calculator from "./Calculator";
import Score from "./Score";

export default function ScoreCalculator() {
  const [gender, setGender] = useState("male");
  const [ageRange, setAgeRange] = useState("<25");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [pushups, setPushups] = useState("");
  const [situps, setSitups] = useState("");

  return (
    <div>
      <Title />
      <Calculator
        onSetGender={setGender}
        onSetAgeRange={setAgeRange}
        gender={gender}
        ageRange={ageRange}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        setPushups={setPushups}
        setSitups={setSitups}
        situps={situps}
        pushups={pushups}
      />
      <Score />
    </div>
  );
}
