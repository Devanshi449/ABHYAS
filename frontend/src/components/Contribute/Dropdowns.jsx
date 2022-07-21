import "bootstrap/dist/css/bootstrap.min.css";

function Dropdowns(props) {
  return (
    <div className="Menu">
      <select
        className="selectpicker btn-primary"
        data-style=""
        value={props.field}
        onChange={(e) => {
          props.setField(e.target.value);
        }}
      >
       <option disabled selected value="0">{props.name}</option>
        {props.options.map((x) => {
          return (
            <option key={x.id} value={x.id}>
              {x.field}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdowns;
