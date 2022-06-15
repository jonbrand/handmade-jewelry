import { 
  ServicesContainer, 
  ServicesH1, 
  ServicesWrapper, 
  ServicesCard, 
  ServicesIcon, 
  ServiceH2, 
  ServicesP
} from './styles';

export const Services = ({
  id, 
  lightBg, 
  topLine,
  headlineOne,
  headlineTwo,
  headlineThree,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  img01,
  img02,
  img03 
}) => {
  return (
    <>
      <ServicesContainer lightBg={lightBg} id={id}>
        <ServicesH1>{topLine}</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={img01} />
            <ServiceH2>{headlineOne}</ServiceH2>
            <ServicesP>{descriptionOne}</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={img02} />
            <ServiceH2>{headlineTwo}</ServiceH2>
            <ServicesP>{descriptionTwo}</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={img03} />
            <ServiceH2>{headlineThree}</ServiceH2>
            <ServicesP>{descriptionThree}</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}