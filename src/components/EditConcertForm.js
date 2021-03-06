import React, { useState, useEffect } from 'react';

export default function EditConcertForm({ currentConcert, setEditConcert, handleEdit }) {
  
  const [concert, setConcert] = useState(currentConcert);
  const [dateValue, setDateValue] = useState(currentConcert.date);
  const [artistValue, setArtistValue] = useState(currentConcert.artist);
  const [venueValue, setVenueValue] = useState(currentConcert.venue);
  const [notesValue, setNotesValue] = useState(currentConcert.notes);

  useEffect(() => {
    setConcert(currentConcert)
  }, [])

  const update = () => {
    handleEdit({ id: currentConcert.id, date: dateValue, artist: artistValue, venue: venueValue, notes: notesValue });
  }

  return (
    <>
    <div className="mb-2">
      <label className="form-label">Date </label>
      <input type="date" className="form-control" value={dateValue} onChange={(e) => setDateValue(e.target.value)} />
    </div>
    <div className="mb-2">
      <label className="form-label">Artist </label>
      <input type="text" className="form-control" value={artistValue} onChange={(e) => setArtistValue(e.target.value)} />
    </div>
    <div className="mb-2">
      <label className="form-label">Venue </label>
      <input type="text" className="form-control" value={venueValue} onChange={(e) => setVenueValue(e.target.value)} />
    </div>
    <div className="mb-2">
      <label className="form-label">Notes </label>
      <textarea rows='2' className="form-control" value={notesValue} onChange={(e) => setNotesValue(e.target.value)} />
    </div>
    <button onClick={update} className='btn btn-primary btn-sm mb-2' >Update</button>
    <button className='btn btn-warning btn-sm mb-2' type="submit" onClick={() => setEditConcert(false)} >Cancel</button>
    </>
  )
}
