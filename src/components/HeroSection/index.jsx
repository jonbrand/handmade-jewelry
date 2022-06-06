import { useState } from 'react';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward, 
  ArrowRight
} from './styles';
import { Button } from '../Button/styles';
import Video from '../../videos/video.mp4'

export const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Transformando seus sonhos em preciosidades
        </HeroH1>
        <HeroP>
          Obras de artes feitas a mão com muita  exclusividade e criatividade
        </HeroP>
        <HeroBtnWrapper>
          <Button 
            to='signup' 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Veja o Catálogo {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
};