import LoginPage from './LoginPage';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="@org-informa/eventExp" />
      <LoginPage />
      <p>Adding line to check affected projects list</p>
    </div>
  );
}

export default App;
