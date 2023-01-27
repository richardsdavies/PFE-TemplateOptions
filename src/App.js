import React, { useCallback, useState } from "react";
import { Page, Card, Tabs } from "@shopify/polaris";
import { Tab1, Tab2, Tab2a, Tab3, Tab4 } from "./tabs";

export default function TabsExample() {
  const [selected, setSelected] = useState(3);
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "setup",
      content: "Setup",
      panelID: "setup"
    },
    {
      id: "products",
      content: "Products",
      panelID: "prodcts"
    },
    {
      id: "products-2",
      content: "Product options",
      panelID: "prodcts-2"
    },
    {
      id: "pricing",
      content: "Pricing",
      panelID: "pricing"
    },
    {
      id: "design",
      content: "Design",
      panelID: "design"
    },
    {
      id: "shipping-and-tax",
      content: "Shipping & Tax",
      panelID: "shipping-and-tax"
    },
    {
      id: "conditions",
      content: "Conditions",
      panelID: "conditions"
    }
  ];

  return (
    <Page>
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          {selected === 0 && <Tab1 />}
          {selected === 1 && <Tab2 />}
          {selected === 2 && <Tab2a />}
          {selected === 3 && <Tab3 />}
          {selected === 4 && <Tab4 />}
        </Tabs>
      </Card>
    </Page>
  );
}
