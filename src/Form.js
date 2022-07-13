import React, { useState} from 'react'

const Form = () => {
  const [CONSOLE,setConsole] = useState('PS2');
  const [CATEGORY, setCategory] = useState('Action');
  const [RATING, setRating] = useState('T') ;
  const [USER_POINTS, setUserPoint] = useState(0.1);
  const [YEAR, SetYear] = useState(2000);
  const [CRITICS_POINTS, setCritic] = useState(1);
  const [PUBLISHER, setPublisher] = useState('Nintendo');
  const [isPending,setIspending] = useState(false);
  const [valeurFinale,setValeurFinale] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {CONSOLE,RATING,CRITICS_POINTS,CATEGORY,YEAR,PUBLISHER,USER_POINTS};
       console.log(blog);
    setIspending(true);
    fetch('http://127.0.0.1:5000/get_prediction',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify( blog)
    }).then(response=>response.json()
        ).then(data=>{setValeurFinale(data.result)})
    
  }
  
  return (
    <div className=''>
        <form onSubmit={handleSubmit} className='w-full h-full flex flex-cols justify-center items-center'>
            <div  className='w-full max-w-[728px] px-4 grid grid-cols-2 gap-8'>
                <div className=''>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Select console:</label>
                    <div class="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={CONSOLE} onChange={(e) => setConsole(e.target.value)}>
                            <option value="PS2">PS2</option>
                            <option value="X360">X360</option>
                            <option value="PS3">PS3</option>
                            <option value="PC">PC</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                
                <div className='w-full'>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Select category:</label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={CATEGORY} onChange = {(e) => setCategory(e.target.value)}>
                            <option value="Action">Action</option>
                            <option value="Sport">Sport</option>
                            <option value="Shooter">Shooter</option>
                            <option value="Role-palying">Role-playing</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Select rating:</label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={RATING} onChange = {(e) => setRating(e.target.value)}>
                            <option value="T">T</option>
                            <option value="E">E</option>
                            <option value="M">M</option>
                            <option value="E10+">E10+</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Select User point:</label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={USER_POINTS}  onChange = {(e) => setUserPoint(e.target.value)}>
                            <option value="0.1">0.1</option>
                            <option value="0.5">0.5</option>
                            <option value="1.0">1.0</option>
                            <option value="1.5">1.5</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                <div className='w-full '>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Select year:</label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={YEAR} onChange = {(e) => SetYear(parseInt(e.target.value))}>
                            <option value="2000">2000</option>
                            <option value="2005">2005</option>
                            <option value="2010">2010</option>
                            <option value="2020">2020</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Select publisher</label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={PUBLISHER} onChange = {(e) => setPublisher(e.target.value)}>
                            <option value="Electronic Art">Electronic Arts</option>
                            <option value="Activision">Activision</option>
                            <option value="Ubisoft">Ubisoft</option>
                            <option value="Nintendo">Nintendo</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                <div className=''>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Select critic points:</label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={CRITICS_POINTS} onChange = {(e) => setCritic(parseInt(parseInt(e.target.value)))}>
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className='py-8'>
                    { !isPending && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Submit</button>}
                    { isPending && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submiting...</button>}
                </div>
            </div>
        </form>
        <div className='w-full h-full flex flex-cols justify-center items-center'>
            <h5 className='text-2xl'>La prediction est :</h5>
            {valeurFinale}
        </div>
    </div>
  )
}

export default Form;