import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    // APPWRITE CONFIGURATION




    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [state, setState] = useState('');
    const [gender, setGender] = useState('');
    const [discipline, setDiscipline] = useState('');
    const [city, setCity] = useState('');
    const [qualification, setQualification] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };


    return (
        <div className=' mt-10 ml-5 p-2 border-2 border-green-700 w-[556.838px] h-[474.725px]'>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className='border-none flex justify-between flex-row'>
                    < input
                        type="text"
                        placeholder='Name*'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        // onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        className="px-4 outline-none shadow py-2 border border-gray-300 rounded"

                    />

                    <input
                        type="email"
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded"
                    />
                </div >
                <div className='justify-between flex flex-row'>
                    <input
                        type="tel"
                        placeholder="Mobile Number*"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        // onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded"
                    />
                </div>
                <div className='justify-between flex flex-row'>
                    <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded"
                    >
                        <option value="">State*</option>
                        <option value="gujarat">Gujarat</option>
                        {/* Add options for states here */}
                    </select>
                    <input
                        type="text"
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded"
                    />
                </div>
                <div className='justify-between flex flex-row'>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded"
                    >
                        <option value="">Gender*</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="transgender">Transgender</option>
                        {/* Add options for genders here */}
                    </select>
                    <select
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded"
                    >
                        <option value="">Qualification*</option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="diploma">Diploma or Certificate</option>
                        <option value="iti">ITI</option>
                        <option value="graduation">Graduation</option>
                        <option value="post">Post Graduation</option>
                        {/* Add options for qualifications here */}
                    </select>
                </div>
                {/* Select Discipline */}
                <select
                    value={discipline}
                    onChange={(e) => setDiscipline(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded"
                >
                    <option value="">Select Discipline</option>
                    <option value="student">Student</option>
                    {/* Add options for disciplines here */}
                </select>

                <div className="flex  items-center">
                    <input
                        type="checkbox"
                        id="authorize"
                        className="mr-2"
                    />
                    <label htmlFor="authorize" className="text-sm">
                        I authorize PU to contact me with updates/notifications via Email/SMS/Whatsapp/ Call, which overrides DND/NDNC registration.
                    </label>
                </div>
                <button
                    type="submit"
                    // onClick={register}
                    className="px-4 py-2 ml-[8rem] text-center w-[14rem] bg-blue-600 text-white rounded"
                >
                    REGISTER
                </button>
                <Link to='/login'>
                    < p className='text-center' >Login</p>
                </Link>
            </form >
        </div >
    );
};

export default Register;