import css from './contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

 const Contacts = ({ contact }) => {
  const { id, name, number} = contact;
  const dispatch = useDispatch();
 
  const handleDeleteClick = () => {
      dispatch(deleteContact(id)); 
  };
  return (
    <li key={id} className={css.contactItem}>
      <div>
        <div className={css.item}>
          <p>{name}</p>
        </div>
        <div className={css.item}>
          <p>{number}</p>
        </div>
      </div>

      <button className={css.btn} type="module" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
};

export default Contacts;