import { AccountsProvider } from 'context/AccountsContext'
import AppRouter from 'routes/AppRouter'
AccountsProvider

function App() {
  return (
    <AccountsProvider>
      <AppRouter />
    </AccountsProvider>
  )
}

export default App
