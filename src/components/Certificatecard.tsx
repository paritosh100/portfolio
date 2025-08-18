"use client";
import { Card, Flex, Heading, Text, SmartLink, Button, Column } from "@once-ui-system/core";

interface CertificateCardProps {
  title: string;
  issuer: string;
  image: string;
  link: string;
  date?: string;
  variant?: "certificate" | "badge";
}

export function CertificateCard({
  title,
  issuer,
  image,
  link,
  date,
  variant = "certificate",
}: CertificateCardProps) {
  return (
    <Card padding="6" radius = "l" shadow="m" fullwidth>
      <Flex
        padding = 'm'
        mobileDirection="column"   // 📱 stack on mobile
        gap="l"
        align={variant === "badge" ? "center" : "flex-start"}
        fillWidth
      >
        {/* Left (thumbnail) */}
        <Flex flex={variant === "badge" ? undefined : 4} justify="center">
          <img
            src={image}
            alt={title}
            style={{
              width: variant === "badge" ? "100px" : "100%",
              maxWidth: variant === "badge" ? "100px" : "160px",
              aspectRatio: variant === "badge" ? "1/1" : "16/9",
              objectFit: variant === "badge" ? "contain" : "contain",
              borderRadius: "8px",
            }}
          />
        </Flex>

        {/* Right (text + link) */}
        <Column flex={variant === "badge" ? undefined : 8} gap="5" fillWidth>
          <Heading as="h3" variant="body-bold" wrap="balance">
            {title}
          </Heading>
          <Text onBackground="neutral-weak">{issuer}</Text>
          {date && (
            <Text variant="label-small" onBackground="neutral-weak">
              {date}
            </Text>
          )}
          <SmartLink href={link} target="_blank">
            <Button variant={variant === "badge" ? "secondary" : "primary"} size="s">
              View Credential
            </Button>
          </SmartLink>
        </Column>
      </Flex>
    </Card>
  );
}
