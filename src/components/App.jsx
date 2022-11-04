import Header from './Header/Header';
// import ContactsFilter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
// import Contact from './Contact/Contact';

export const App = () => {
  return (
    <div>
      <Header></Header>
      {/* <ContactsFilter /> */}

      <ContactsList />
      {/* <Contact /> */}
    </div>
  );
};
