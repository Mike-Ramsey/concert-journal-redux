import React, { useEffect, useState } from 'react';
import { getConcerts, createConcert, deleteConcert, updateConcert } from './services/ConcertService';
import EditConcertForm from './components/EditConcertForm';
import ConcertForm from './components/ConcertForm';
import ConcertList from './components/ConcertList';
import './App.css';

export default function App() {
  
  const [concerts, setConcerts] = useState([]);
  const [editConcert, setEditConcert] = useState(false);
  
  const initialConcert = { id: null, date: null, artist: '', venue: '', notes: '' };
  const [currentConcert, setCurrentConcert] = useState(initialConcert)

  const refreshConcerts = async () => {
    const freshConcerts = await getConcerts();
    setConcerts((freshConcerts) ? freshConcerts : []);   
  };

  useEffect(() => {
    refreshConcerts();
  }, []);

  const handleAdd = async (newConcert) => {
    await createConcert(newConcert);  
    refreshConcerts();
  };

  const handleDelete = async (concert) => {   
    await deleteConcert(concert);
    refreshConcerts();
  };
   
  const startEdit = (concert) => {
    setEditConcert(true);
    setCurrentConcert(concert);
    console.log(concert);
    console.log(currentConcert);
  };

  const handleEdit = async (concert) => {
    await updateConcert({...currentConcert});
    setCurrentConcert(initialConcert);
    setEditConcert(false);
    refreshConcerts();
  };

  return (
    <div className='main container'>
      <h1>Concert Journal</h1>
      <br/>
      <div className="row">
        {editConcert ? (  
          <div className="col-md-3">
            <br/>
            <EditConcertForm 
              currentConcert={currentConcert}
              setEditConcert={setEditConcert}
              handleEdit={handleEdit}  
            />
          </div>
          ) : (
          <div className="col-md-3">
            <br/>
            <ConcertForm 
              addConcert={handleAdd}  
            />
          </div>
          )}
        <div className="col-md-9">
        <ConcertList 
          concerts={concerts}
          onStartEdit={startEdit}
          onDelete={handleDelete}
        />
        </div>
      </div>
    </div>
  );
}