import React, { useEffect, useState } from 'react';
import { getConcerts, createConcert, deleteConcert, updateConcert } from './services/ConcertService';
import ConcertForm from './components/ConcertForm';
import ConcertList from './components/ConcertList';
import EditModal from './components/EditModal';
import './App.css';

let tempID;

export default function App() {
  
  const [concerts, setConcerts] = useState([]);
  const [editConcert, setEditConcert] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const refreshConcerts = async () => {
    const freshConcerts = await getConcerts();
    setConcerts((freshConcerts) ? freshConcerts : []);   
  };

  useEffect(() => {
    refreshConcerts();
  }, []);

  const addConcert = async (newConcert) => {
    await createConcert(newConcert);  
    refreshConcerts();
  }

  const handleDelete = async (concert) => {   
    await deleteConcert(concert);
    refreshConcerts();
  }

  const startHandleEdit = (concert) => {
    if(concert === null) {
      tempID = Math.random();
    }
    setEditConcert(concert.id);
    setIsEditModalOpen(true);
  }
  
  const handleEdit = async (concertData) => {
    await updateConcert({...editConcert, date: concertData.date, artist: concertData.artist, venue: concertData.venue, notes: concertData.notes});
    setIsEditModalOpen(false);
    refreshConcerts();
  }

  return (
    <div className='main container'>
      <h1>Concert Journal</h1>
      <br/>
      <div className="row">
        <div className="col-md-3">
        <br/>
        <ConcertForm 
          addConcert={addConcert}  
        />
        </div>
        <div className="col-md-9">
        <ConcertList 
          concerts={concerts}
          onStartEdit={startHandleEdit}
          onDelete={handleDelete}
        />
        </div>
      </div>
      <EditModal
          key={(editConcert) ? editConcert.id : tempID} 
          onEdit={handleEdit}
          isOpen={isEditModalOpen}
          concert={editConcert}
          
      />
    </div>
  );
}