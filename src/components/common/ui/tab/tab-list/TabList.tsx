import { createContext, FC, ReactNode } from 'react';

interface ITabListProps {
  children: ReactNode;
  className: string;
  onChange: (value: string) => void;
  currentValue: string;
}

interface ITabContextType {
  onChange: (value: string) => void;
  currentValue: string;
}

export const TabContext = createContext<ITabContextType>({
  currentValue: '',
  onChange: () => {},
});

export const TabList: FC<ITabListProps> = ({
  className,
  children,
  onChange,
  currentValue,
}) => {
  return (
    <div className={className}>
      <TabContext.Provider value={{ onChange, currentValue }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};
