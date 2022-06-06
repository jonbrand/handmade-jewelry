import { Button } from '../Button/styles';
import { 
  InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  Column1, 
  TextWrapper, 
  TopLine, 
  Heading, 
  Subtitle, 
  BtnWrap,
  Column2,
  ImgWrap,
  Img
} from './styles';

export const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>
                  TopLine
                </TopLine>
                <Heading>
                  Heading
                </Heading>
                <Subtitle>
                  Subtitle
                </Subtitle>
                <BtnWrap>
                  <Button to='home'>Button</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
};