function Button(props) {
    return <button
        className='p-2 rounded-md transition-all font-medium text-white bg-blue-600 hover:brightness-90'
        {...props}
    >
        {props.children}
    </button>
}

export default Button
