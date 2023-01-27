import {
  Page,
  Text,
  AlphaStack,
  AlphaCard,
  Banner,
  TextContainer,
  Stack,
  PageActions,
  DropZone
} from "@shopify/polaris";
import { useState, useCallback } from "react";

import React from "react";

export function Tab4() {
  const [files, setFiles] = useState([]);
  const [rejectedFiles, setRejectedFiles] = useState([]);
  const hasError = rejectedFiles.length > 0;

  const handleDrop = useCallback(
    (_droppedFiles, acceptedFiles, rejectedFiles) => {
      setFiles((files) => [...files, ...acceptedFiles]);
      setRejectedFiles(rejectedFiles);
    },
    []
  );

  const fileUpload = !files.length && <DropZone.FileUpload />;
  const uploadedFiles = files.length > 0 && (
    <Stack vertical>
      {files.map((file, index) => (
        <Stack alignment="center" key={index}>
          <Thumbnail
            size="small"
            alt={file.name}
            source={window.URL.createObjectURL(file)}
          />
          <div>
            {file.name}{" "}
            <Text variant="bodySm" as="p">
              {file.size} bytes
            </Text>
          </div>
        </Stack>
      ))}
    </Stack>
  );

  const errorMessage = hasError && (
    <Banner
      title="The following images couldn’t be uploaded:"
      status="critical"
    >
      <List type="bullet">
        {rejectedFiles.map((file, index) => (
          <List.Item key={index}>
            {`"${file.name}" is not supported. File type must be .gif, .jpg, .png or .svg.`}
          </List.Item>
        ))}
      </List>
    </Banner>
  );

  return (
    <Page fullWidth>
      <AlphaStack fullWidth>
        <TextContainer spacing="tight">
          <Text variant="headingMd" as="h2">
            Design
          </Text>
          <Text variant="bodyMd" as="p" color="subdued">
            You shouldn't notice good design, blah blah blah.
          </Text>
        </TextContainer>
        <AlphaCard title="Pricing" sectioned>
          <AlphaStack gap="5" fullWidth>
            <TextContainer spacing="tight">
              <Text variant="headingMd" as="h2">
                Product image
              </Text>
              <Text variant="bodyMd" as="p" color="subdued">
                This will be displayed in the checkout and email notifications.
                We recommend using an image thats 1000px x 1000px.
              </Text>
            </TextContainer>
            <Stack vertical>
              {errorMessage}
              <DropZone
                accept="image/*"
                allowMultiple={false}
                type="image"
                onDrop={handleDrop}
              >
                {uploadedFiles}
                {fileUpload}
              </DropZone>
            </Stack>
          </AlphaStack>
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
