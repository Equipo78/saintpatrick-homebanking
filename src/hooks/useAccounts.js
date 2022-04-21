import AccountsContext from 'context/AccountsContext'
import { useContext, useEffect } from 'react'
import getAccounts from 'services/getAccounts'

export const useAccounts = () => {
  const { accounts, setAccounts, cantAccounts, setCantAccounts } = useContext(AccountsContext)

  useEffect(() => {
    getAccounts().then((accounts) => {
      setAccounts(accounts)
    })
  }, [setAccounts])

  const sortByLowest = () => {
    const sortedAccounts = accounts.sort((a, b) => a.cost - b.cost)

    setAccounts([...sortedAccounts])
  }

  const sortByHighest = () => {
    const sortedAccounts = accounts.sort((a, b) => b.cost - a.cost)

    setAccounts([...sortedAccounts])
  }

  const showfirstPage = () => setCantAccounts(cantAccounts - 16)

  const showSecondPage = () => setCantAccounts(cantAccounts + cantAccounts)

  return {
    accounts,
    setAccounts,
    cantAccounts,
    sortByLowest,
    sortByHighest,
    showfirstPage,
    showSecondPage,
  }
}
