function Task(props) {
  return (
    <li onClick={props.callback} className="task" id={props.id}>
      {props.name}
    </li>
  );
}

export default Task;

