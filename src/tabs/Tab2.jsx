import {
  TextContainer,
  Text,
  AlphaCard,
  AlphaStack,
  Card,
  EmptyState,
  Banner,
  Link
} from "@shopify/polaris";

import React from "react";

export function Tab2() {
  return (
    <AlphaCard>
      <AlphaStack gap="5" fullWidth>
        <Banner
          title="Choose the products you'd like to add to a bundle"
          status="info"
        >
          <p>
            You can choose specific variants, and if you want to set a product
            as 'required' on the next tab.
          </p>
        </Banner>
        <TextContainer spacing="tight">
          <Text variant="headingMd" as="h2">
            Products
          </Text>
          <Text variant="bodyMd" as="p" color="subdued">
            Use to de-emphasize a piece of text that is less important to
            merchants than other nearby text. May also be used to indicate when
            normal content is absent, for example, “No supplier listed”. Don’t
            use only for aesthetic effect.
          </Text>
        </TextContainer>
        <Card sectioned>
          <EmptyState
            heading="Add products to your bundle"
            action={{ content: "Add products" }}
            secondaryAction={{
              content: "Import from collection",
              url: "https://help.shopify.com"
            }}
            footerContent={
              <p>
                Importing a collection will perform a one time import, and
                products won't update if you later change your collection.
              </p>
            }
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          >
            <Text>
              Add products individually or add import products from a
              collection.
            </Text>
          </EmptyState>
        </Card>
      </AlphaStack>
    </AlphaCard>
  );
}
