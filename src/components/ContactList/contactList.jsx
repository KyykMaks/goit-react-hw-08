import { useSelector } from "react-redux";
import css from "./contactList.module.css";
import { selectFilteredContacts, selectLoading } from "../../redux/contacts/selectors";
import Loader from "../Loader/Loader";
import Contacts from "../Contact/contact";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  
    return (
      <div>
        <h2>Contact List</h2>
        {isLoading ? (
          <Loader/>
        ) : (
          <ul className={css.list}>
            {contacts.map((contact) => (
              <Contacts key={contact.id} contact={contact} />
            ))}
          </ul>
        )}
      </div>
    );
  }

export default ContactList;