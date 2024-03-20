import React, { useState } from 'react'

function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        locaion: "",
        experience: "",
        type:""
    })

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const search = async() => {
        await props.fetchJobsCustom(jobCriteria);
    }
    

  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
        <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Job Role</option>
            <option value="Maroon Team">Maroon Team</option>
            <option value="Asisten Lab Web programing">Asisten Lab Web programing</option>
            <option value="Asisten Lab Mobile programing">Asisten Lab Mobile programing</option>
            <option value="Asisten Lab Game Developer">Asisten Lab Game Developer</option>
            <option value="PKM Team Colaboration">PKM Team Colaboration</option>
        </select>
        <select onChange={handleChange} name="semester" value={jobCriteria.semester} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Semester</option>
            <option value="Semester 3">Semester 3</option>
            <option value="Semester 3">Semester 4</option>
            <option value="Semester 3">Semester 5</option>
            
        </select>
        <select onChange={handleChange} name="jangka" value={jobCriteria.jangka} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Jangka Waktu</option>
            <option value="Tetap">Tetap</option>
            <option value="Sementara">Sementara</option>
        </select>
        <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
  )
}

export default SearchBar