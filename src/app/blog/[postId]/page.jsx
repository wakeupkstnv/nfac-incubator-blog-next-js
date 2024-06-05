import Footer from "../../components/Footer"
import data from '../../data/data.json';
import Navbar from "../../components/Navbar";

export default function Page({ params }) {
    const postId = parseInt(params.postId); 
    const postData = data[postId - 1];
  
    return (
        <main>
            <Navbar />
            <div className='py-10 md:py-20 flex flex-col items-center justify-center px-4 py-[8rem] md:py-[10rem]'>
                <div className='shadow-2xl w-full sm:w-3/4 max-w-4xl h-auto flex flex-col items-center justify-center p-5 md:p-10 bg-white rounded-lg'>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 font-mono text-center"><strong>{postData.title}</strong></h1>
                    <p className="text-lg md:text-xl font-medium font-mono text-center">{postData.description}</p>
                    <br></br>
                    <p className="font-mono">{postData.author}</p>
                </div>
            </div>
            <Footer />
        </main>
    )
}
