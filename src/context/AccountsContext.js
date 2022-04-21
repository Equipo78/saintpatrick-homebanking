import { createContext, useState } from 'react'

const AccountsContext = createContext({})

const AccountsProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([])
  const [cantAccounts, setCantAccounts] = useState(5)

  return (
    <AccountsContext.Provider value={{ accounts, setAccounts, cantAccounts, setCantAccounts }}>
      {children}
    </AccountsContext.Provider>
  )
}

export { AccountsProvider }
export default AccountsContext
