import { ChevronLeftIcon, Github } from 'lucide-react'
import Title from '../components/Title'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Details() {
    let navigate = useNavigate()
    let [searchParams] = useSearchParams()
    let title = searchParams.get("title")
    let description = searchParams.get("description")

    return (
        <div class='h-screen w-screen flex flex-col items-center space-y-8 mt-12 bg-slate-900'>
            <div className='flex items-center justify-center relative w-1/3'>
                <Title>TODO LIST</Title>
                <ChevronLeftIcon
                onClick={() => navigate(-1)}
                className='absolute left-0 top-1/5 cursor-pointer text-slate-100'
                />
            </div>  

            <main className='flex flex-col justify-center w-1/3 p-4 space-y-2 rounded-md bg-slate-50'>
                <h2 className='text-xl text-center font-medium text-slate-900'>{title}</h2>
                <h3 className='text-lg text-center text-slate-900'>{description}</h3>
            </main>

            <a
                className='flex items-center space-x-1 text-white transition-all hover:brightness-75'
                href='https://github.com/gabrielsl11'
            >
                <Github size={18} />
                <span>gabrielsl11</span>
            </a>
        </div>
    )
}

export default Details
