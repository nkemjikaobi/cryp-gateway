import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel, TabProps } from "react-tabs";
import "react-tabs/style/react-tabs.css";

interface CustomTabsProps extends TabProps {
  tabNames: String[];
  tabComponents: ChildComponent[];
}

interface ChildComponent {
  element: () => JSX.Element;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabNames, tabComponents }) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <Tabs className="w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto px-4" onSelect={(index) => setTabIndex(index)} selectedIndex={tabIndex}>
      <TabList className="flex justify-between items-center">
        {tabNames.map((tabName, index) => (
          <Tab
            className={`capitalize text-12 smallLaptop:text-base font-medium pb-[0.688rem] border border-l-0 border-r-0 border-t-0 cursor-pointer`}
            key={index}
            selectedClassName="border border-b-crypYellow-200 text-crypGreen-800"
          >
            {tabName}
          </Tab>
        ))}
      </TabList>
      <hr />

      {tabComponents.map((tabComponent, index) => (
        <TabPanel key={index}>
          <tabComponent.element />
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default CustomTabs;

CustomTabs.defaultProps = {};
