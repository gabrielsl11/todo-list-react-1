import { Github } from 'lucide-react'
import Title from '../components/Title'

function Details() {
    return (
        <div class='h-screen w-screen flex flex-col items-center space-y-8 mt-12 bg-slate-900'>
            <Title>TODO LIST</Title>

            <main className='flex flex-col justify-center w-1/3 p-4 space-y-2 rounded-md bg-slate-50'>
                <h2 className='text-xl text-center font-medium text-slate-900'>Homework</h2>
                <h3 className='text-lg text-center text-slate-900'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde autem ad excepturi vero dignissimos laudantium iure veniam illum natus, molestiae ea omnis mollitia laborum molestias? Explicabo impedit nobis vel aspernatur.</h3>
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
