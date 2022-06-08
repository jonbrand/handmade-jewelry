import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { 
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTitle, 
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './styles';

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Sobre</FooterLinkTitle>
                <FooterLink to='/about'>Como funciona</FooterLink>
                <FooterLink to='/about'>Resenhas</FooterLink>
                <FooterLink to='/about'>Termos de Servicos</FooterLink>
                <FooterLink to='/about'>Politica de privacidade</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Midias Sociais</FooterLinkTitle>
                <FooterLink to='/about'>Como funciona</FooterLink>
                <FooterLink to='/about'>Resenhas</FooterLink>
                <FooterLink to='/about'>Termos de Servicos</FooterLink>
                <FooterLink to='/about'>Politica de privacidade</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Informacoes</FooterLinkTitle>
                <FooterLink to='/about'>Como funciona</FooterLink>
                <FooterLink to='/about'>Resenhas</FooterLink>
                <FooterLink to='/about'>Termos de Servicos</FooterLink>
                <FooterLink to='/about'>Politica de privacidade</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>
                Bombasaro
              </SocialLogo>
              <WebsiteRights>
                Bombasaro © {new Date().getFullYear()} Todos os direitos reservados
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='//www.twitter.com' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}