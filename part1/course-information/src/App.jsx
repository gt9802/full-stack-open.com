const App = ()=>{
  const course = {
    name: 'Half Stack application development',
    parts:[
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  
  }
  


  return <div>
    <Header course={course.name}></Header>
    <Content parts={course.parts}></Content>

    <Total parts={course.parts}></Total>

  </div>
}

const Header = (props)=>{
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props)=>{
  return (
    <div>
      <Part parts={props.parts[0].name} exercise={props.parts[0].exercises}></Part>
      <Part parts={props.parts[1].name} exercise={props.parts[1].exercises}></Part>
      <Part parts={props.parts[2].name} exercise={props.parts[2].exercises}></Part>
    </div>
  )
    
}

const Total = (props)=>{
  return <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>

}

const Part = (props)=>{
  return <p>
    {props.parts} {props.exercise}
    </p>
}

export default App