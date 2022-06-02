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

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='works'>Trabalhos</SidebarLink>
          <SidebarLink to='contact'>Contato</SidebarLink>
          <SidebarLink to='about'>Sobre</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to='signin'>Login</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}