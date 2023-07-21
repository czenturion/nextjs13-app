import styled from 'styled-components';
import { LinkBlock } from './LinkBlock/LinkBlock';

export const Header = () => (
    <Navbar>
        <div className="menu">
            <LinkBlock title={'Characters'}/>
            <LinkBlock title={'Locations'}/>
            <LinkBlock title={'Episodes'}/>
            <LinkBlock title={'Login'}/>
        </div>

    </Navbar>
)

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;

  .menu {
    display: flex;
    flex-direction: row;
    
  }
  
  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  }
`