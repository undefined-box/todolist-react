import Task from "./Task";

function TaskContainer(props) {
  let source = props.source;

 

  const preppedSource = source.map((item) => (
    <Task name={item.name} key={item.id} source = {source} callback = {props.callback} />
  ));



  return (
    <div className="tasks">
      {preppedSource}
    </div>
  );
}

export default TaskContainer;
