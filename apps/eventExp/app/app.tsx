import LoginPage from './LoginPage';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="@org-informa/eventExp" />
      <LoginPage />
      <p>New line of code added for demo</p>
    </div>
  );
}

export default App;
