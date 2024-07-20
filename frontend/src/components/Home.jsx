import { useEffect, useState } from 'react'
import Header from './Header'
import SliderComponent from './SlideComponent'
import Card from './Card'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import Recruiter from './Recruiter'
import Placement from './Placement'
import { handleError, handleSuccess } from '../utils'
import { ToastContainer } from 'react-toastify'

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('')
    const [faculty, setFaculty] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token')
        localStorage.removeItem('loggedInUser')
        handleSuccess('User LoggedOut')
        setTimeout(() => {
            navigate('/login')
        }, 1000)
    }

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/products"
            const headers = {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers)
            const result = await response.json()
            setFaculty(result)
        } catch (error) {
            handleError(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    // const data = []

    const handleCardClick = (path) => {
        navigate(path);
    };
    return (
        <>
            <Header />
            {/* log out button */}
            <header className='absolute w-screen flex justify-end p-4'>
                <button className='hover:text-red-600  mr-6 hover:bg-white hover:border-red-600 border-2 text-white p-2 bg-red-600 rounded-lg' onClick={handleLogout}>Logout</button>
                <ToastContainer />
            </header >
            <SliderComponent />
            < div className="container mx-auto py-8" >
                <h1 className="text-2xl font-semibold mb-4">Faculty </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white">
                    {faculty && faculty?.map((item, index) => (
                        <div key={index} className='cursor-pointer' onClick={() => handleCardClick(item.path)}>
                            <Card key={index} title={item.title} content={item.content} className={item.className} />
                        </div>
                    ))}
                </div>
            </div >
            <Placement />
            <h1 className='text-[36px] pt-[7rem] pb-4 font-bold'>
                Top
                <span className='pl-2 font-medium text-[rgb(3,78,162)]'>
                    Recruiters
                </span>
            </h1>
            <Recruiter />
            <Footer />
        </>
    )
}

export default Home