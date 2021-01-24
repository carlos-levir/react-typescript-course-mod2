import { useEffect, useState } from 'react';
import api from './services/api';

interface UserData {
  name: string;
  company: string;
}

function App() {
  const [username, setUsername] = useState('CarlosLevir');
  const [userData, setUserData] = useState<UserData>({
    name: '',
    company: '',
  });

  useEffect(() => {
    const localStorageUserData = sessionStorage.getItem(
      '@reactapp/githubUserData'
    );

    setUserData(JSON.parse(localStorageUserData || ''));
  }, []);

  async function getUserGithubData() {
    const { data } = await api.get(username);

    sessionStorage.setItem('@reactapp/githubUserData', JSON.stringify(data));
    setUserData(data);
  }

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={getUserGithubData}>Pesquisar usuário</button>
      <div>{userData.name}</div>
      <div>{userData.company}</div>
    </div>
  );
}

export default App;
