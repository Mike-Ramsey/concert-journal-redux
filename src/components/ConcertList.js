import React from 'react';

function Concert({ concert, onDelete, onStartEdit}) {
  return (
    <tr key={concert.id}>
      <td key={`date-${concert.id}`}>{concert.date}</td>
      <td key={`artist-${concert.id}`}>{concert.artist}</td>
      <td key={`venue-${concert.id}`}>{concert.venue}</td>
      <td key={`notes-${concert.id}`}>{concert.notes}</td>
      <td><button className='btn btn-sm btn-success' onClick={() => onStartEdit(concert)}>Edit</button></td>
      <td><button className='btn btn-sm btn-danger' onClick={() => onDelete(concert)}>Delete</button></td>
    </tr>
  )
}

export default function ConcertList({ concerts, onDelete, onStartEdit }) {
  
  const concertElements = concerts.map(concert => <Concert key={concert.id} concert={concert} onDelete={onDelete} onStartEdit={onStartEdit}/> );
  
  return (
    <div>
      <table className="concert-table">
        <thead>
          <tr>
            <th scope='col'>Date</th>
            <th scope='col'>Artist</th>
            <th scope='col'>Venue</th>
            <th scope='col'>Notes</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {concertElements}
        </tbody>
      </table>
    </div>
  )
}
