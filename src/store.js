export const initialStore=()=>{//Modificar el objeto con la estructura que viene del fetch
  return{
    contacts: [],
    contact: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){//Modificar el case y lo que hace para modificar lo que hace para agregar la lista de contactos al store
    case 'addContacts':

      const  contacts  = action.payload

      return {
        ...store,
        // todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
        contacts: contacts
      };

      case 'edit':
        const contact = action.payload;
        return {
          ...store,
          contact: contact
        }
    default:
      throw Error('Unknown action.');
  }    
}
