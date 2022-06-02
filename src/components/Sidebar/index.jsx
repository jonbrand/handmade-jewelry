import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute
} from './styles'

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='works' onClick={toggle}>Trabalhos</SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>Contato</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>Sobre</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to='signin'>Login</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}