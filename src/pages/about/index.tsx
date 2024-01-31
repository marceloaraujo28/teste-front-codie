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
              <>
                <Title key={text.id}>{text.title}</Title>
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
              </>
            );
          })}

          {/* <Subtitle>Como funciona a cura de um pokémon?</Subtitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel mi ut nunc sodales mattis eget at sem. Praesent mattis interdum
            nulla, quis molestie justo lacinia a. Curabitur rutrum ante a ligula
            aliquet pellentesque. Phasellus ut elit fermentum, lacinia felis
            iaculis, aliquam augue. Vestibulum dignissim dignissim nisi sed
            tincidunt. Fusce magna magna, porta sit amet accumsan at,
            ullamcorper id magna. Proin congue dolor eget iaculis porta.
            Suspendisse sit amet scelerisque nisl. Nunc sagittis lacus at nulla
            auctor, ut euismod velit sollicitudin. Phasellus eu quam a quam
            luctus mollis non eu lacus. Quisque fringilla enim vitae est
            rhoncus, nec feugiat ex tincidunt. Donec venenatis pharetra elit,
            eget fermentum ipsum. Aenean auctor, arcu a sagittis tempor, quam
            nisl ullamcorper ante, vitae dictum elit augue eget leo. Aliquam
            ante nisi, porttitor vitae congue at, consectetur nec ligula.
            Vestibulum viverra elit et risus viverra imperdiet. Nullam egestas
            enim et lacus eleifend sollicitudin. Proin porttitor tincidunt
            fringilla. Sed et eros quis nibh mollis bibendum id eget dolor.
            Etiam hendrerit risus non libero varius, et suscipit nibh tempor.
            Donec ut aliquam massa. Aenean nec libero leo. Nullam dignissim
            augue a lacinia porttitor. Curabitur sed est sed metus gravida
            aliquet. Suspendisse potenti. Praesent condimentum pellentesque
            efficitur. Maecenas vel risus diam.
          </Text> */}
        </TextContainer>
      </MainContainer>
    </AboutContainer>
  );
}
