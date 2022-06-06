import { 
  ServicesContainer, 
  ServicesH1, 
  ServicesWrapper, 
  ServicesCard, 
  ServicesIcon, 
  ServiceH2, 
  ServicesP
} from './styles';
import Icon1 from '../../images/image-4.png';
import Icon2 from '../../images/image-5.png';
import Icon3 from '../../images/image-1.png';

export const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Trabalhos</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServiceH2>Reduce services and taxs</ServiceH2>
            <ServicesP>Service new</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServiceH2>Reduce taxs</ServiceH2>
            <ServicesP>Service new</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServiceH2>Taxs</ServiceH2>
            <ServicesP>Service new</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}