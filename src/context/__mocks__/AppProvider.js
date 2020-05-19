const useAppContext = jest.fn(() => ({ appData: { name: "Nemy" } }));

const AppProvider = jest.fn();

export { useAppContext, AppProvider };
