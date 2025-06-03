const URL = 'https://playground.4geeks.com/contact/agendas/Sergio/contacts';

export const getContactList = async () => {

    try {
			const response = await fetch(URL);
			const data = await response.json();
            return data.contacts;


		} catch (error) {
			console.log('ERROR GET CONTACT LIST', error);
		}
}


export const deleteContactList = async (id) => {
    try {
        const response = await fetch (`${URL}/${id}`,{
            method: 'DELETE'
        });
        console.log(response);

        if (response.status === 204) {
            return true; 
        }
    } catch (err) {
        console.log('ERROR DELETE CONTACT LIST', err);
    }
}

export const addContact = async (contact) => {

        try {
      const response = await fetch(URL, {
        method: 'POST',
        headers:{
          'content-type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      console.log(response);
      if(response.status === 201){
        return 'Contact create';
      }
    } catch (err) {
      console.log('error in create contact', err)
    }
}

export const putContact = async (contact) => {
        try {
      const response = await fetch(`${URL}/${contact.id}`, {
        method: 'PUT',
        headers:{
          'content-type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      console.log(response);
      if(response.status === 200){
        return 'Contact edit';
      }
    } catch (err) {
      console.log('error in edit contact', err)
    }
}