import { useEffect,  } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";
import { getContactList, deleteContactList} from "../service/contact.js";


export const Home = () => {

	
	//   const[dataLoaded, setDataLoaded] = useState({})

	const {store, dispatch} =useGlobalReducer();
	const navigate = useNavigate();

	const getData = async () => {
		const data = await getContactList();
		if (data) {
			dispatch({type: 'addContacts', payload: data})
		}
	}

	useEffect(() => {
		getData();
	},[]);

	const deleteContact = async (id) => {
		console.log(id);
		const isDelete = await deleteContactList(id);
		if (isDelete) {
			getData();
		}
	}

	const editContact = (contact) => {
		dispatch({type:'edit', payload: contact});
		navigate('/edit-contact')
	}
	return (
		<div className="text-center mt-5">
			<div>
				{store.contacts.map( (contact, index) => (
				<Card key={index} contact={contact} deleteContact={deleteContact} editContact={editContact} />
				))}
			</div>
		</div>
	);
}; 