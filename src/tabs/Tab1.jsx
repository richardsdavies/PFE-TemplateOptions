import {
  Banner,
  TextContainer,
  Text,
  Grid,
  MediaCard,
  AlphaCard,
  AlphaStack
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import React from "react";

export function Tab1() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  return (
    <AlphaCard>
      <AlphaStack gap="5" fullWidth>
        <Banner
          title="Introducing Template Options"
          action={{ content: "Find out more", url: "" }}
          status="success"
        >
          <p>
            Bundle Builder now includes a selection of templates for you to
            choose from.
          </p>
        </Banner>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 4, lg: 4, xl: 4 }}>
            <MediaCard
              portrait
              title="Template Name"
              primaryAction={{
                content: "Choose template",
                onAction: () => {}
              }}
              secondaryAction={{
                content: "Preview",
                onAction: () => {}
              }}
              description="Template description."
            >
              <img
                alt=""
                width="100%"
                height="100%"
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              />
            </MediaCard>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <MediaCard
              portrait
              title="Template Name"
              primaryAction={{
                content: "Choose template",
                onAction: () => {}
              }}
              secondaryAction={{
                content: "Preview",
                onAction: () => {}
              }}
              description="Template description."
            >
              <img
                alt=""
                width="100%"
                height="100%"
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              />
            </MediaCard>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <MediaCard
              portrait
              title="Template Name"
              primaryAction={{
                content: "Choose template",
                onAction: () => {}
              }}
              secondaryAction={{
                content: "Preview",
                onAction: () => {}
              }}
              description="Template description."
            >
              <img
                alt=""
                width="100%"
                height="100%"
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              />
            </MediaCard>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <MediaCard
              portrait
              title="Template Name"
              primaryAction={{
                content: "Choose template",
                onAction: () => {}
              }}
              secondaryAction={{
                content: "Preview",
                onAction: () => {}
              }}
              description="Template description."
            >
              <img
                alt=""
                width="100%"
                height="100%"
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              />
            </MediaCard>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <MediaCard
              portrait
              title="Template Name"
              primaryAction={{
                content: "Choose template",
                onAction: () => {}
              }}
              secondaryAction={{
                content: "Preview",
                onAction: () => {}
              }}
              description="Template description."
            >
              <img
                alt=""
                width="100%"
                height="100%"
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              />
            </MediaCard>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <MediaCard
              portrait
              title="Template Name"
              primaryAction={{
                content: "Choose template",
                onAction: () => {}
              }}
              secondaryAction={{
                content: "Preview",
                onAction: () => {}
              }}
              description="Template description."
            >
              <img
                alt=""
                width="100%"
                height="100%"
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              />
            </MediaCard>
          </Grid.Cell>
        </Grid>
      </AlphaStack>
    </AlphaCard>
  );
}
