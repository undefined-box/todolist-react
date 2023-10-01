function Task(props) {
  return (
    <li onClick={props.callback} className="task">
      {props.name}
    </li>
  );
}

export default Task;
