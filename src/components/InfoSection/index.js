import React from "react";
import {
  InfoContainer,
  Img,
  InfoRow,
  InfoWrapper,
  Column1,
  Column2,
  Heading,
  Subtitle,
  BtnWrap,
  TopLine,
  TextWrapper,
  ImgWrap,
} from "./InfoElements";
import { Button } from "../ButtonElement";

const InfoSection = ({
  id,
  lightText,
  imgStart,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  darkText,
  topLine,
  lightBg,
  dark,
  dark2,
  primary,
}) => {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    primary={primary ? 1 : 0}
                    exact="true"
                    to="/home"
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
