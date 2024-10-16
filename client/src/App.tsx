import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';

const AppContainer = styled.div`
  display: flex;
`;

interface MainContentProps {
  isSidebarOpen: boolean;
}

const MainContent = styled.main<MainContentProps>`
  flex-grow: 1;
  margin-left: ${ props => props.isSidebarOpen ? '250px' : '60px' };
  transition: margin-left 0.3s ease-in-out;
  padding: 20px;
`;

function App () {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState( true );

  const toggleSidebar = () => {
    setIsSidebarOpen( !isSidebarOpen );
  };

  return (
    <Router>
      <AppContainer>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <MainContent isSidebarOpen={isSidebarOpen}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;