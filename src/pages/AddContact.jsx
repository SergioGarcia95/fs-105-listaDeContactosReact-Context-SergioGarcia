import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert } from "../components/Alert";
import useGlobalReducer from "../hooks/useGlobalReducer";  
import { addContact, putContact } from "../service/contact";

const initial_state = {
    name: '',
    email: '',
    phone: '',
    address: ''
}

export const AddContact = ({type}) => {
  const {store} = useGlobalReducer();

  const isEdit = type === 'edit';

  const [contact, setContact] = useState(initial_state);
  const [message, setMessage] = useState();

  useEffect(() => {
    console.log(store)
    const contactState = isEdit ? store.contact : initial_state;
    setContact(contactState);
  },[]);

  const onChange = (event) => {

    const name = event.target.name
    const value = event.target.value
    setContact({...contact,[name]: value});
  }

  const onSubmit = async (event)=> {
    event.preventDefault();
    console.log(contact);
      if (isEdit) {
        await editContact();
    } else {
        await createContact();
  }}


  const createContact = async () => {
    const addContactResponse = await addContact(contact);
    if(addContactResponse) {
      setMessage(addContactResponse);
    }
  }

  const editContact = async () => {
    
    const editContactResponse = await putContact(contact);
    if(editContactResponse) {
      setMessage(editContactResponse);
    }
  }
  return (
    
    <div className="formulario">
      <h1>Add a new contact</h1>
        <form onChange={onChange} onSubmit={onSubmit}>
          <div>
            <label>Full Name:</label>
              <input
                className="form-control"
                type="texto"
                name="name"
                value={contact.name}
                placeholder="Full Name"> 
            </input>
          </div>

          <div className="mt-3">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={contact.email}
              placeholder="Email"> 
            </input>
          </div>

          <div className="mt-3">
            <label>Phone:</label>
              <input
                className="form-control"
                type="number"
                name="phone"
                value={contact.phone}
                placeholder="Phone"> 
              </input>
          </div>

          <div className="mt-3 mb-3">
            <label>Address:</label>
              <input
                className="form-control"
                type="texto"
                name="address"
                value={contact.address}
                placeholder="Address"> 
              </input>
          </div>
          <button type="submit" className="btn btn-primary" style={{width: "100%"}}> save </button>
          {message && <Alert message= {message}/> }
          
        </form>
        <Link to='/'>or get back to contacts</Link> 
    </div>
     
  );
};





