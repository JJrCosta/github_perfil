import { useState } from 'react';

import Perfil from './components/Perfil'
import ReposList from './components/ReposList'

function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      <input className='userInput' placeholder='Buscar usuário...' type="text" onBlur={(e) => setUserName(e.target.value)}/>
      {userName.length > 4 && (
        <>
        <Perfil userName={userName}/>
        <ReposList userName={userName}/>
        </>
      )}
    </>
  )
}

export default App