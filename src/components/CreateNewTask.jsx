import { useState } from 'react'
import Input from './Input'
import Button from './Button'

function CreateNewTask(props) {
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')

    return (
        <section className="flex flex-col justify-center w-1/3 p-4 space-y-4 rounded-md bg-slate-50">
            <h2 className="text-xl text-center font-semibold text-slate-900">Create New Task</h2>

            <div className="flex flex-col  space-y-2">
                <Input type="text" name="title" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Input type="text" name="description" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <Button onClick={
                    () => {
                        if (!title.trim() || !description.trim()) {
                            return alert('Type valid text')
                        } else {
                            setTitle('')
                            setDescription('')
                            props.onCreateClick(title, description)
                        }
                    }
                }
                >
                    Create
                </Button>
            </div>
        </section>
    )
}

export default CreateNewTask