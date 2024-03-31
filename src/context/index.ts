import { DataInterface } from '@interface/index';
import { createContext } from 'react';

interface DataContextProps {
  data: DataInterface[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}

export const DataContext = createContext<DataContextProps>({
  setData: () => {},
  data: [],
});
