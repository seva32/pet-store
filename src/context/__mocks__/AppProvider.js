import appData from "./valuesProvider";

const useAppContext = jest.fn(() => ({ appData: appData }));

const AppProvider = jest.fn();

export { useAppContext, AppProvider, appData };
