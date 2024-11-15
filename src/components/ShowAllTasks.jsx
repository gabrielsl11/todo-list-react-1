import { ChevronRight, Check, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function ShowAllTasks({ tasks, onCompleteClick, onDeleteClick }) {
    let navigate = useNavigate()

    function onDetailsClick(task) {
        navigate(`/details?title=${task.title}&description=${task.description}`)
    }

    return (
        < main className='flex flex-col justify-center w-1/3 p-4 space-y-4 rounded-md bg-slate-50' >
            <h2 className='text-xl text-center font-semibold text-slate-900'>Show All Tasks</h2>

            <ul className='flex flex-col space-y-2'>
                {tasks.map((task) => {
                    return (
                        <li key={task.id} className='flex space-x-1'>
                            <button
                                title={task.description}
                                onClick={() => onCompleteClick(task.id)}
                                className='flex items-center gap-1 text-start p-2 rounded-md transition-all bg-slate-200 cursor-pointer hover:brightness-105 w-full'
                            >
                                {task.completed ? <Check size={18} className='text-green-600' /> : <X size={18} className='text-red-600' />}
                                <span className={`${task.completed ? 'line-through text-slate-500' : ''}`}>{task.title}</span>
                            </button>

                            <button
                                onClick={() => onDetailsClick(task)}
                                className='p-2 rounded-md transition-all bg-slate-200 cursor-pointer hover:brightness-105 hover:text-blue-600'
                            ><ChevronRight />
                            </button>

                            <button
                                onClick={() => onDeleteClick(task.id)}
                                className='p-2 rounded-md transition-all bg-slate-200 cursor-pointer hover:brightness-105 hover:text-red-600'
                            ><X />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </main >
    )
}

export default ShowAllTasks