import { useNavigate, useParams } from "react-router-dom"
import Footer from "../components/Footer";
import { MoveLeft } from "lucide-react";

const SingleProject = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-full flex flex-col bg-gradient-to-br from-indigo-50 to-indigo-200">
        <section id="single-project" className="min-h-[60vh] w-full flex flex-col items-center justify-center pb-10 pt-5 px-14 xs:px-4">
          <MoveLeft onClick={() => navigate('/')} className="cursor-pointer duration-400 transition-all scale-125 hover:scale-150 text-indigo-600 relative" />
          <h1 className="font-bold text-5xl xs:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-100 via-indigo-400 to-indigo-600 leading-snug mb-6">{title}</h1>
          <p className="text-lg text-indigo-900 max-w-2xl mb-8 text-center">
            A React project based on an API that lets users search for <span className='text-indigo-700 font-semibold'>drinks</span> and 
            <span className='text-indigo-700 font-semibold'>cocktails</span>, aswell as <span className='text-indigo-700 font-semibold'>create new drinks</span> 
            with custom photos and names
            </p>
          <div className="w-full flex flex-col py-10 xs:px-4 px-14 text-center mx-auto">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-indigo-600 py-5">Tools I used to build</h1>

            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-indigo-600 py-5">Demo</h1>

            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <h3 className="text-3xl font-bold text-indigo-600 py-5">Link</h3>
              <a
                href='https://github.com/MattiaGuggi/bar_service'
                className="w-auto px-12 py-3 rounded-lg text-white bg-indigo-600 cursor-pointer duration-400 transition-all hover:scale-105
                hover:bg-indigo-800 hover:-translate-y-1"
              >
                Github Repo
              </a>
            </div>
          </div>
        </section>
        <Footer />
    </main>
  )
}

export default SingleProject