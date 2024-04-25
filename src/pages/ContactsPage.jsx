/** @format */

import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm/ContactFormU";
import ContactList from "../components/ContactList/contactList";
import SearchBox from "../components/SearchBox/searchBox";

const Contact = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
};

export default Contact;
