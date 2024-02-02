import Breadcrumb from "@/src/components/Breadcrumb";
import { AboutMock } from "@/src/mocks/aboutMock";
import {
  AboutContainer,
  Subtitle,
  TextContainer,
  Title,
  Text,
  MainContainer,
} from "@/src/styles/pages/about";
import React from "react";

export default function About() {
  return (
    <AboutContainer>
      <Breadcrumb page="Quem somos" link="/about" />
      <MainContainer>
        <TextContainer>
          {AboutMock.map((text) => {
            return (
              <React.Fragment key={text.id}>
                <Title>{text.title}</Title>
                {text.paragraphs.map((paragraph) => {
                  return (
                    <React.Fragment key={paragraph.id}>
                      <br />
                      <Subtitle>{paragraph.subtitle}</Subtitle>
                      <br />
                      <Text>{paragraph.text}</Text>
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            );
          })}
        </TextContainer>
      </MainContainer>
    </AboutContainer>
  );
}
