function Form(props) {
  return (
    <form name="myForm" className="form" onSubmit={props.handleSubmit}>
      <input type="text" placeholder="Write your task!" name="myInput" className="inputField" />
      <div className="categories">
      </div>
      <button className="btn" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default Form;
