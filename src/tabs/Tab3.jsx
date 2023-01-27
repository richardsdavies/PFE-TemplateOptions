import {
  Page,
  Text,
  AlphaStack,
  AlphaCard,
  Banner,
  Box,
  ChoiceList,
  FormLayout,
  TextField,
  Link,
  Select,
  TextContainer,
  Stack,
  RadioButton,
  PageActions
} from "@shopify/polaris";
import { useState, useCallback } from "react";

import React from "react";

export function Tab3() {
  /* dicount radion btns 'RadioButton' */
  const [value, setValue] = useState("disabled");
  const handleRadioChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    []
  );

  /* date range 'Select' */
  const selectOptions = [
    { label: "Percentage discount", value: "today" },
    { label: "Fixed discount", value: "yesterday" },
    { label: "Fixed price", value: "lastWeek" }
  ];
  const [selected, setSelected] = useState("today");
  const handleSelectChange = useCallback((value) => setSelected(value), []);

  /* discount value 'TextField type="number"' */
  const [numberValue, setNumberValue] = useState("0");
  const handleNumberChange = useCallback(
    (newValue) => setNumberValue(newValue),
    []
  );

  /* checkboxes 'ChoiceList' */
  const choiceListItems = [
    {
      label: "This discount requires a minimum purchase",
      value: "false",
      helpText:
        "Ensure the discount is only applied once the bundle reaches a certain value."
    },
    {
      label: "Show discounted price",
      value: "false2",
      helpText:
        "Display a 'compare at' price for the bundle on the collection page and confirmation emails."
    },
    {
      label: "Allow total bundle price to be 0",
      value: "false3",
      helpText:
        "Enabling this option will allow customers to order bundles of free products."
    }
  ];
  const handleChoiceListChange = useCallback(
    (value) => setCheckboxes(value),
    []
  );
  const [checkboxes, setCheckboxes] = useState([]);

  /* Modal */

  return (
    <Page fullWidth>
      <AlphaStack fullWidth>
        <AlphaCard title="Pricing" sectioned>
          <TextContainer>
            <Text variant="headingMd" as="h2">
              Discounts
            </Text>
            <Text variant="bodyMd" as="p" color="subdued">
              Add an optional discount to your bundle. Read our{" "}
              <Link url="https://help.shopify.com/manual">
                guide to bundle discounts
              </Link>{" "}
              for more information on how to best use discounting.
            </Text>
          </TextContainer>
          <Box paddingBlockStart="6">
            <Stack vertical>
              <RadioButton
                label="Flat discount"
                helpText="Apply the same discount, regardless of the bundle's volume or total value."
                checked={value === "flatDiscount"}
                id="flatDiscount"
                name="flatDiscount"
                onChange={handleRadioChange}
              />
              <RadioButton
                label="Tiered discount"
                helpText="The discount will change based on the bundle's volume or total value."
                id="tieredDiscount"
                name="tieredDiscount"
                checked={value === "tieredDiscount"}
                onChange={handleRadioChange}
              />
              <RadioButton
                label="No discount"
                helpText="No discount will be applied to your bundles."
                id="noDiscount"
                name="noDiscount"
                checked={value === "noDiscount"}
                onChange={handleRadioChange}
              />
            </Stack>
          </Box>
        </AlphaCard>

        <AlphaCard title="Flat Discount" sectioned>
          <TextContainer>
            <Text variant="headingMd" as="h2">
              Flat Discount
            </Text>
          </TextContainer>

          <Box paddingBlockStart="6">
            <Banner title="Is this the right discount?">
              <p>
                Flat discounts are perfect when you would like to offer a set
                discount or price for your bundles.
              </p>
            </Banner>
          </Box>

          <Box paddingBlockStart="6">
            <FormLayout>
              <FormLayout.Group>
                <Select
                  label="Date range"
                  options={selectOptions}
                  onChange={handleSelectChange}
                  value={selected}
                />
                <TextField
                  type="number"
                  label="Discount value"
                  value={numberValue}
                  onChange={handleNumberChange}
                  autoComplete="off"
                />
              </FormLayout.Group>
              <ChoiceList
                allowMultiple
                choices={choiceListItems}
                selected={checkboxes}
                onChange={handleChoiceListChange}
              />
            </FormLayout>
          </Box>
        </AlphaCard>
      </AlphaStack>

      <PageActions
        primaryAction={{
          content: "Next"
        }}
        secondaryActions={[
          {
            content: "Cancel",
            destructive: true
          }
        ]}
      />
    </Page>
  );
}
