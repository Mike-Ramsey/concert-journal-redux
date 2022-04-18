import React, { useState, useEffect } from 'react';

export default function EditConcertForm({ currentConcert, setEditConcert, handleEdit }) {
  
  const [concert, setConcert] = useState(currentConcert);

  useEffect(() => {
    setConcert(currentConcert)
  }, [])

  const handleChange = e => {
    const {name, value} = e.target;
    setConcert({...concert, [name]: value});
  };

  return (
    <>
    <div className="mb-2">
      <label className="form-label">Date </label>
      <input type="date" className="form-control" name='date' value={concert.date} onChange={handleChange} />
    </div>
    <div className="mb-2">
      <label className="form-label">Artist </label>
      <input type="text" className="form-control" name='artist' value={concert.artist} onChange={handleChange} />
    </div>
    <div className="mb-2">
      <label className="form-label">Venue </label>
      <input type="text" className="form-control" name='venue' value={concert.venue} onChange={handleChange} />
    </div>
    <div className="mb-2">
      <label className="form-label">Notes </label>
      <textarea rows='2' className="form-control" name='notes' value={concert.notes} onChange={handleChange} />
    </div>
    <button onClick={handleEdit} className='btn btn-primary btn-sm mb-2' >Update</button>
    <button className='btn btn-warning btn-sm mb-2' type="submit" onClick={() => setEditConcert(false)} >Cancel</button>
    </>
  )
}
