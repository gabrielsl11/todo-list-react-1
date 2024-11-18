function onDeleteButton(props) {
    return <button
        className='p-2 rounded-md transition-all bg-slate-200 cursor-pointer hover:brightness-105 hover:text-red-600'
        {...props}
    >
        {props.children}
    </button>
}

export default onDeleteButton