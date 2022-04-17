import React, { useEffect, useState } from 'react';
import { getConcerts, createConcert, deleteConcert, updateConcert } from './services/ConcertService';
import ConcertForm from './components/ConcertForm';
import ConcertList from './components/ConcertList';
import './App.css'

export default function App() {
  
  const [concerts, setConcerts] = useState([]);

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

  const handleEdit = async () => {
    await updateConcert();
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
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        </div>
      </div>
    </div>
  );
}