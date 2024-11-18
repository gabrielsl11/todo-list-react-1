import CreateNewTask from './components/CreateNewTask'
import ShowAllTasks from './components/ShowAllTasks'
import Title from './components/Title'
import { useEffect, useState } from 'react'
import { Github } from 'lucide-react'

function App() {
  let [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function onCompleteClick(taskId) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        } else { return task }
      })
    )
  }

  function onDeleteClick(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  function onCreateClick(title, description) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title,
        description,
        completed: false,
      }
    ])
  }

  return (
    <div class='h-screen w-screen flex flex-col items-center space-y-8 mt-12 bg-slate-900'>
      <Title>TODO LIST</Title>

      <CreateNewTask onCreateClick={onCreateClick} />

      <ShowAllTasks tasks={tasks} onCompleteClick={onCompleteClick} onDeleteClick={onDeleteClick} />

      <a
        className='flex items-center space-x-1 text-white transition-all hover:brightness-75'
        href='https://github.com/gabrielsl11'
        target='_blank'
      >
        <Github size={18} />
        <span>gabrielsl11</span>
      </a>
    </div>
  )
}

export default App;
