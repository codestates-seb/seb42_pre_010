import styled from 'styled-components';

const SidebarContainer = styled.div`
  margin: 0 15px 0 24px;
  width: 300px;
  float: right;
  color: #e7e9eb;
`;

const SidebarWidget = styled.div`
  background-color: #474336;
  border-color: #675d37;
  margin: 0 0 16px 0;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWidget></SidebarWidget>
    </SidebarContainer>
  );
};

export default Sidebar;
