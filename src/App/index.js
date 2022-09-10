import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import MainContent from '../components/main-content/MainContent';
import SideBar from '../components/sidebar/SideBar';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';
import { PageContainer, GridContainer } from './App_styles';
import Modal from '../components/modal/Modal';

function App() {
  const [hidden, setHidden] = useState(true);
  const [modalInfo, setModalInfo] = useState('');

  return (
      <PageContainer>
        <Loader />   

        <GridContainer>
          <Navbar />
          <MainContent />
          <SideBar />
          <Footer 
          setHidden={setHidden}
          setModalInfo={setModalInfo}
          />
        </GridContainer>

        <Modal visible={{hidden, setHidden}}>
          {modalInfo}
        </Modal>
      </PageContainer>
  );
}

export default App;
