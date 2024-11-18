function TaskButton(props) {
    return <button
        className='flex items-center gap-1 text-start p-2 rounded-md transition-all bg-slate-200 cursor-pointer hover:brightness-105 w-full'
        {...props}
    >
        {props.children}
    </button>
}

export default TaskButton