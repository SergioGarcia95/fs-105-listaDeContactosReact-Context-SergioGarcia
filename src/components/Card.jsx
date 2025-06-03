import { FaTrash } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";

export const Card = ({ contact, deleteContact, editContact }) => {
    const { name, phone, email, address, id } = contact;

    return (
        <div className="card" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://imagenes.20minutos.es/files/image_640_auto/uploads/imagenes/2023/03/17/cantabro.jpeg" className="imgPerfil" alt="..." />
                </div>
                <div className="col-md-8 position relative">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{phone}</p>
                        <p className="card-text">{email}</p>
                        <p className="card-text"><small className="text-body-secondary">{address}</small></p>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => editContact(contact)}><IoPencil className="pencil" /></button>
                        <button onClick={() => deleteContact(id)}><FaTrash className="trash" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}