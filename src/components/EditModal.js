import React, { useState, useEffect, useRef } from 'react';
import { Modal as BootstrapModal } from 'bootstrap';

export default function EditModal({ concert, onEdit, isOpen }) {
  const [editID, setEditID] =useState((concert) ? concert.id : "");
  const [editDate, setEditDate] = useState((concert) ? concert.date : "");
  const [editArtist, setEditArtist] = useState((concert) ? concert.artist : "");
  const [editVenue, setEditVenue] = useState((concert) ? concert.venue : "");
  const [editNotes, setEditNotes] = useState((concert) ? concert.notes : "");

  const modal=useRef(null);

  useEffect(() => { 
    const bootstrapModal = BootstrapModal.getOrCreateInstance(modal.current);
    (isOpen) ? bootstrapModal.show() : bootstrapModal.hide();
}, [isOpen])  

  return (
    <div ref={modal} className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Concert Entry</h5>
          </div>
          <div className="modal-body">
            <div className="mb-2">
              <label className="form-label">Date </label>
              <input type="date" className="form-control" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
            </div>
            <div className="mb-2">
              <label className="form-label">Artist </label>
              <input type="text" className="form-control" value={editArtist} onChange={(e) => setEditArtist(e.target.value)} />
            </div>
            <div className="mb-2">
              <label className="form-label">Venue </label>
              <input type="text" className="form-control" value={editVenue} onChange={(e) => setEditVenue(e.target.value)} />
            </div>
            <div className="mb-2">
              <label className="form-label">Notes </label>
              <textarea rows='2' className="form-control" value={editNotes} onChange={(e) => setEditNotes(e.target.value)} />
            </div>
            <button onClick={onEdit} className="btn btn-primary btn-sm">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
