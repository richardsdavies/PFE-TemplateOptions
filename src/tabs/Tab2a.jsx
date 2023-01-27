import {
  TextField,
  Filters,
  Button,
  Card,
  ResourceList,
  Avatar,
  ResourceItem,
  Text,
  Badge,
  AlphaCard,
  AlphaStack,
  TextContainer,
  List,
  Stack
} from "@shopify/polaris";
import { useState, useCallback } from "react";

export function Tab2a() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortValue, setSortValue] = useState("DATE_MODIFIED_DESC");
  const [taggedWith, setTaggedWith] = useState("Required product");
  const [queryValue, setQueryValue] = useState(null);

  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    []
  );
  const handleQueryValueChange = useCallback(
    (value) => setQueryValue(value),
    []
  );
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
  const handleClearAll = useCallback(() => {
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [handleQueryValueRemove, handleTaggedWithRemove]);

  const resourceName = {
    singular: "product",
    plural: "products"
  };

  const items = [
    {
      id: 112,
      url: "customers/341",
      name: "Product Name #1",
      productStatus: "Required product",
      latestOrderUrl: "orders/1456"
    },
    {
      id: 212,
      url: "customers/256",
      name: "Product Name #2",
      productStatus: "Required product",
      latestOrderUrl: "orders/1457"
    }
  ];

  const promotedBulkActions = [
    {
      content: "Move to 'Required products'",
      onAction: () => console.log("Todo: implement bulk edit")
    }
  ];

  const bulkActions = [
    {
      content: "Add tags",
      onAction: () => console.log("Todo: implement bulk add tags")
    },
    {
      content: "Remove tags",
      onAction: () => console.log("Todo: implement bulk remove tags")
    },
    {
      content: "Delete customers",
      onAction: () => console.log("Todo: implement bulk delete")
    }
  ];

  const filters = [
    {
      key: "taggedWith3",
      label: "Tagged with",
      filter: (
        <TextField
          label="Tagged with"
          value={taggedWith}
          onChange={handleTaggedWithChange}
          autoComplete="off"
          labelHidden
        />
      ),
      shortcut: true
    }
  ];

  const filterControl = (
    <Filters
      queryValue={queryValue}
      filters={filters}
      onQueryChange={handleQueryValueChange}
      onQueryClear={handleQueryValueRemove}
      onClearAll={handleClearAll}
    >
      <div style={{ paddingLeft: "8px" }}>
        <Button onClick={() => console.log("New filter saved")}>Search</Button>
      </div>
    </Filters>
  );

  return (
    <AlphaCard>
      <AlphaStack gap="5" fullWidth>
        <TextContainer spacing="tight">
          <Text variant="headingMd" as="h2">
            Set variants
          </Text>
          <Text variant="bodyMd" as="p" color="subdued">
            Use to de-emphasize a piece of text that is less important to
            merchants than other nearby text. May also be used to indicate when
            normal content is absent, for example, “No supplier listed”. Don’t
            use only for aesthetic effect.
          </Text>
        </TextContainer>
        <Card>
          <ResourceList
            resourceName={resourceName}
            items={items}
            renderItem={renderItem}
            selectedItems={selectedItems}
            onSelectionChange={setSelectedItems}
            promotedBulkActions={promotedBulkActions}
            bulkActions={bulkActions}
            sortValue={sortValue}
            sortOptions={[
              { label: "Most expensive", value: "DATE_MODIFIED_DESC" },
              { label: "Least expensive", value: "DATE_MODIFIED_ASC" }
            ]}
            onSortChange={(selected) => {
              setSortValue(selected);
              console.log(`Sort option changed to ${selected}.`);
            }}
            filterControl={filterControl}
          />
        </Card>
        <TextContainer spacing="tight">
          <Text variant="headingMd" as="h2">
            Set required products
          </Text>
          <Text variant="bodyMd" as="p" color="subdued">
            Use to de-emphasize a piece of text that is less important to
            merchants than other nearby text. May also be used to indicate when
            normal content is absent, for example, “No supplier listed”. Don’t
            use only for aesthetic effect.
          </Text>
        </TextContainer>
        <Card>
          <ResourceList
            resourceName={resourceName}
            items={items}
            renderItem={renderItem}
            selectedItems={selectedItems}
            onSelectionChange={setSelectedItems}
            promotedBulkActions={promotedBulkActions}
            bulkActions={bulkActions}
            sortValue={sortValue}
            sortOptions={[
              { label: "Most expensive", value: "DATE_MODIFIED_DESC" },
              { label: "Least expensive", value: "DATE_MODIFIED_ASC" }
            ]}
            onSortChange={(selected) => {
              setSortValue(selected);
              console.log(`Sort option changed to ${selected}.`);
            }}
            filterControl={filterControl}
          />
        </Card>
      </AlphaStack>
    </AlphaCard>
  );

  function renderItem(item) {
    const { id, url, name, productStatus, latestOrderUrl } = item;
    const media = <Avatar customer size="medium" name={name} />;
    const shortcutActions = latestOrderUrl
      ? [{ content: "Modify variants", url: latestOrderUrl }]
      : null;
    return (
      <ResourceItem
        id={id}
        url={url}
        media={media}
        accessibilityLabel={`View details for ${name}`}
        shortcutActions={shortcutActions}
        persistActions
      >
        <AlphaStack gap="3">
          <Text variant="headingMd" as="h6">
            {name}
          </Text>
          <Stack>
            <Text variant="bodyMd" as="p" fontWeight="bold">
              Available variants
            </Text>
            <List type="bullet">
              <List.Item>Yellow shirt</List.Item>
              <List.Item>Red shirt</List.Item>
              <List.Item>Green shirt</List.Item>
            </List>
          </Stack>
        </AlphaStack>
      </ResourceItem>
    );
  }

  function disambiguateLabel(key, value) {
    switch (key) {
      case "taggedWith3":
        return `Tagged with ${value}`;
      default:
        return value;
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === "" || value == null;
    }
  }
}
