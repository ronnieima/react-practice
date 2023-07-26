export default function Calculator({
  onSetGender,
  onSetAgeRange,
  ageRange,
  gender,
}) {
  return (
    <div>
      <form className="calculator">
        <label>Gender</label>
        <select value={gender} onChange={(e) => onSetGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label>Age Range</label>
        <select
          value={ageRange}
          onChange={(e) => onSetAgeRange(e.target.value)}
        >
          <option value="<25">&lt;25</option>
          <option value="25-29">25-29</option>
          <option value="30-34">30-34</option>
          <option value="35-39">35-39</option>
          <option value="40-45">40-44</option>
          <option value="45-49">45-49</option>
          <option value="50-54">50-54</option>
          <option value="55-59">55-59</option>
          <option value=">60">&gt;60</option>
        </select>
        <div className="run-time">
          <label>Run Time</label>
          <div className="time">
            <label>Hours</label>
            <input type="number" min="0" max="5" />

            <label>Minutes</label>
            <input type="number" min="0" max="60" />

            <label>Seconds</label>
            <input type="number" min="0" max="60" />
          </div>
        </div>

        <label>Pushups</label>
        <input type="number" />

        <label>Situps</label>
        <input type="number" />

        <button>Submit</button>
      </form>
    </div>
  );
}
