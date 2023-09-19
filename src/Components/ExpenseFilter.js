import "./Filter.css";
const ExpenseFilter = (props) => {
  const dropDownHandler = (event) => {
    props.OnChangeFilter(event.target.value);
  };

  return (
    <div className="filter-select select">
      <div className="filter-container">
        <label className="filter-label">
          <h2>filter by year</h2>
        </label>
        <select value={props.selected} onChange={dropDownHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
