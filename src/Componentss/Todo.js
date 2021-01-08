import React from 'react'

const Todo = ({}) => {
  // tasks String[]
  const [tasks, setTasks] = React.useState([])

  const addTask = () => {
    let task = prompt('Please enter the new task...')

    setTasks([
      ...tasks,
      task
    ])
  }

  const removeTask = (index) => {
    console.log(index)

    tasks.splice(index, 1)
    setTasks([ ...tasks ])
  }

  return (
    <div>
      <h1>TODO APP</h1>
      <hr/>

      <div>
        <button
          onClick={ () => addTask() }
        >
          Add Task
        </button>

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 8
          }}
        >
          <div style={{
              width: '40%',
              border: 'solid black',
              borderRadius: 5,
              padding: '8px 8px',
              marginRight: 4
            }}
          >
            <b>Tasks</b>
            <hr />

            {
              tasks && tasks.length > 0 && tasks.map((v, i) => {
                return (
                  <div key={ i }>
                    { v }
                    
                    <span style={{ marginLeft: 4 }}>
                      <button
                        onClick={ () => removeTask(i) }
                      >
                        Done
                      </button>
                    </span>
                  </div>
                )
              })
            }
          </div>
          
          <div style={{
              width: '40%',
              border: 'solid black',
              borderRadius: 5,
              padding: '8px 8px'
            }}
          >
            <b>Done</b>
            <hr/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo