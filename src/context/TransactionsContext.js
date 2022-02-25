const { createContext, useState } = require("react");

const TransactionsContext = createContext();

const TransactionsProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  return (
    <TransactionsContext.Provider
      value={{step, setStep, userData, setUserData, finalData, setFinalData}}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export { TransactionsProvider };
export default TransactionsContext;
