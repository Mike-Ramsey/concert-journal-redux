import React, { useState } from 'react';

export default function ConcertForm({ concert, addConcert }) {

  const [dateValue, setDateValue] = useState((concert) ? concert.date : "");
  const [artistValue, setArtistValue] = useState((concert) ? concert.artist : "");
  const [venueValue, setVenueValue] = useState((concert) ? concert.venue : "");
  const [notesValue, setNotesValue] = useState((concert) ? concert.notes : "");

  const handleAddConcert = () => {
    addConcert({
      date: dateValue,
      artist: artistValue,
      venue: venueValue,
      notes: notesValue
    });
    console.log(artistValue);
    setDateValue('');
    setArtistValue('');
    setVenueValue('');
    setNotesValue('');
  };

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
    <button onClick={handleAddConcert} className='btn btn-primary btn-sm' >Update</button>
    </>
  )
}
