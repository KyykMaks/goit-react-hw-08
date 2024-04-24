import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../redux/contacts/selectors";
import { useEffect } from "react";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../redux/contacts/operations";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm/ContactFormU";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/errorMessage";

const Contact = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const selectorFilter = useSelector(selectFilteredContacts)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = (fromData) => {
    dispatch(addContact(fromData));
  };
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };


  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm onAddContact={onAddContact} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul>
        {selectorFilter !== null &&
          selectorFilter.map((item) => {
            return (
              <li key={item.id}>
                <h3>Name: {item.name}</h3>
                <h3>Phone: {item.number}</h3>
                <button
                  onClick={() => onDeleteContact(item.id)}
                  type="button"
                  aria-label="Delete contact"
                >
                  &times;
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};


export default Contact;


