"use client";

import React from "react";
import {
    Column,
    Flex,
    Heading,
    Text,
    Carousel,
    SmartLink,
} from "@once-ui-system/core";

import { certificates, badges } from "@/resources/content";
/**
 * CertificatesPage
 * - Built with Once‑UI primitives only (no pixel values)
 * - Fully responsive using mobileDirection and intrinsic layout
 * - Uses the same CertificateCard across Certificates & Badges sections
 */

// ----- Types -----
interface CertificateItem {
    title: string;
    issuer: string;
    issued: string; // e.g., "May 2025"
    image: string; // thumbnail/cover
    verificationUrl: string;
    credentialId?: string;
    skills?: string[]; // shown as simple badges
}

// ----- Dummy Data (replace with your content) -----
const CERTIFICATES: CertificateItem[] = [
  {
    title: "AWS Cloud Technical Essential",
    issuer: "Amazon Web Services(AWS)",
    issued: "Oct 2025",
    image: "/images/certificates/aws_tech.png",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/8F03GLXTK4NS",
    skills: ["AWS", "Amazon RDS", "EC2","S3","VPC","Availability Zones"],
  },
  {

    title: "Biology Meets Programming: Bioinformatics for Beginners",
    issuer: "University of California San Diego",
    issued: "Aug 2025",
    image: "/images/certificates/Biology_programming.png",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/XZRFEZ8ZEDMV",
    skills: ["Bioinformatics", "Algorithms", "DNA"],
  },
  {
    title: "Building Computer Vision Applications with Python",
    issuer: "LinkedIn Learning",
    issued: "Jul 2025",
    image: "/images/certificates/COMPUTER_VISION-1.png",
    verificationUrl:
      "https://www.linkedin.com/learning/certificates/693598670cfe9c715af210c87b59a03e9dd66416f7fce775d509763a836e0ddb",
    skills: ["Python", "OpenCV", "Vision"],
  },
  {
    title: "Generative AI with Diffusion Models",
    issuer: "Nvidia",
    issued: "Nov 2024",
    image: "/images/certificates/GENAI_DIFFUSION_MODELS-1.png",
    verificationUrl:
      "https://www.linkedin.com/in/paritosh-gandre/details/certifications/1731709384372/single-media-viewer",
    skills: ["Diffusion", "Generative AI","U-nets"],
  },
  {
    title: "Data Analysis with R Programming",
    issuer: "Google",
    issued: "Oct 2024",
    image: "/images/certificates/DATA_ANALYSIS_R-1.png",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/UU47EMIV791H",
    skills: ["R", "EDA", "Statistics"],
  },
];

const BADGES: CertificateItem[] = [
  {
    title: "AWS Educate Introduction to Generative AI",
    issuer: "Amazon Web Services Training and Certification",
    issued: "2024",
    image: "/images/badges/AWS_EDUCATE.png",
    verificationUrl:
      "https://www.credly.com/badges/8f7218d6-a436-4fd5-adff-1eb01796ddf2",
    skills: ["AI","AI and ML on AWS - Foundational","Amazon Web Services (AWS)","AWS Cloud"],
  },
  {
    title: "AWS Academy Graduate - Data Analytics",
    issuer: "Amazon Web Services Training and Certification",
    issued: "2023",
    image: "/images/certificates/aws-data-analytics.png",
    verificationUrl: "https://www.credly.com/badges/7f5edf39-7003-40f0-8d2a-09ef103865ff/public_url",
    skills: ["Amazon Web Services","Analytics and Data","AWS Cloud Best Practices","Building Infrastructure On AWS"],
  },
  {
    title: "AWS Academy Graduate - Cloud Fundamentals",
    issuer: "Amazon Web Services",
    issued: "2023",
    image: "/images/certificates/aws-cloud-fundamentals.png",
    verificationUrl:
      "https://www.credly.com/badges/8f7218d6-a436-4fd5-adff-1eb01796ddf2",
    skills: ["AWS Architecture",'AWS Cloud','AWS Core Services','AWS Pricing','AWS Support'],
  },
];


// ----- Badge primitive (text chip using Once‑UI primitives only) -----
function SkillBadge({ label }: { label: string }) {
    return (
        <Flex
            as="span"
            align="center"
            paddingX="xs"
            paddingY="2"
            radius="s"
            gap="xs"
        >
            <Text>{label}</Text>
        </Flex>
    );
}

// ----- Card -----
function CertificateCard({ item }: { item: CertificateItem }) {
    return (
        <Column as="article" fillWidth gap="m" paddingX="s" paddingY="s" radius="m">
            {/* Content row switches to column on mobile */}
            <Flex fillWidth gap="l" align="start" mobileDirection="column">
                {/* Left: Thumbnail */}
                <Column style={{flexShrink:1}} gap="s" fillWidth>
                    {/* <SmartLink href={item.verificationUrl} target="_blank" aria-label={`Open credential for ${item.title}`}> */}
                        <Carousel
                            sizes="(max-width: 960px) 100vw, 640px"
                            items={[{ slide: item.image,
                                 alt: item.title
                                
                                }]}
                        />
                    {/* </SmartLink> */}
                </Column>
                {/* <Column shrink="0" gap="s" fillWidth>
          <Carousel
            sizes="(max-width: 960px) 100vw, 640px"
            items={[{ slide: item.image, alt: item.title }]}
          />
        </Column> */}

                {/* Right: Meta */}
                <Column gap="s" fillWidth>
                    <Heading as="h3">{item.title}</Heading>
                    <Text>
                        <strong>{item.issuer}</strong> · Issued {item.issued}
                    </Text>
                    {item.credentialId ? (
                        <Text>Credential ID: {item.credentialId}</Text>
                    ) : null}

                    {/* Skills / Badges */}
                    {item.skills && item.skills.length > 0 ? (
                        <Flex wrap gap="xs">
              {item.skills.map((skill) => (
                <Flex
                  as="span"
                  key={skill}
                  paddingX="s"
                  paddingY="2"
                  radius="full"
                  background="neutral-alpha-weak"
                  border="neutral-alpha-medium"
                >
                  <Text>{skill}</Text>
                </Flex>
              ))}
            </Flex>
                    ) : null}

                    {/* CTA */}
                    <Flex gap="s" align="center">
                        <SmartLink href={item.verificationUrl} target="_blank" aria-label={`View credential for ${item.title}`}>
                            View credential →
                        </SmartLink>
                    </Flex>
                </Column>
            </Flex>
        </Column>
    );
}

// ----- Section -----
function CertificateSection({
    title,
    items,
}: {
    title: string;
    items: CertificateItem[];
}) {
    return (
        <Column fillWidth gap="m">
            <Heading as="h2">{title}</Heading>
            <Column fillWidth gap="m">
                {items.map((c) => (
                    <CertificateCard key={`${c.title}-${c.issuer}`} item={c} />
                ))}
            </Column>
        </Column>
    );
}

// ----- Page -----
export default function CertificatesPage() {
    return (
        <Column as="main" fillWidth gap="xl" paddingX="m" paddingY="l">
            <Column gap="s">
                <Heading as="h1">Certificates & Badges</Heading>
                
            </Column>

            <CertificateSection title="Certificates" items={CERTIFICATES} />

            <CertificateSection title="Badges" items={BADGES} />
        </Column>
    );
}
