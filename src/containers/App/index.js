import styled from "styled-components";

import Table from "../../components/Table/index";

function App() {
  const columns = {
    name: {
      key: "name",
      label: "Name",
    },
    email: {
      key: "email",
      label: "Email",
      width: 180,
    },
    numberOfOrder: {
      key: "numberOfOrder",
      label: "NumberOfOrder",
    },
    joinDate: {
      key: "joinDate",
      label: "JoinDate",
    },
    accountDetailLink: {
      key: "accountDetailLink",
      label: "AccountDetailLink",
    },
  };

  const users = [
    {
      id: 1,
      name: "user 3",
      email: "user3@gamil.com",
      numberOfOrder: 13,
      joinDate: "hace 3 dias",
    },
    {
      id: 2,
      name: "user 2",
      email: "user2@gamil.com",
      numberOfOrder: 14,
      joinDate: "hace 1 dias",
    },
    {
      id: 3,
      name: "user",
      email: "user@gamil.com",
      numberOfOrder: 15,
      joinDate: "hace 2 dias",
    },
  ];

  return (
    <Main>
      <Table columns={columns} data={users} />
    </Main>
  );
}

export default App;

/**
 * Styled components
 **/

const Main = styled.div`
  height: 100%;
  text-align: center;
  padding: 20px 8px 0 8px;
`;
