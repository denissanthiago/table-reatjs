import PropTypes from "prop-types";
import styled from "styled-components";

function Table({ data, columns }) {
  const headerColumns = () =>
    Object.keys(columns).map((key) => (
      <TableHeader
        key={key}
        align={columns[key].align}
        width={columns[key].width}
      >
        {columns[key].label}
      </TableHeader>
    ));

  const cell = (item, key) => <TdContent key={key}>{item[key]}</TdContent>;

  const rows = (item) => (
    <TrContent key={item.id}>
      {Object.keys(columns).map((key) => cell(item, key))}
    </TrContent>
  );

  return (
    <ContainerTable>
      <thead>
        <tr>{headerColumns()}</tr>
      </thead>
      <tbody>{data.map((item) => rows(item))}</tbody>
    </ContainerTable>
  );
}

export default Table;

/**
 * Prop-Types
 **/

// Table.propTypes = {
//   colums: PropTypes.arrayOf(
//     PropTypes.shape({
//       key: PropTypes.string.isRequired,
//       label: PropTypes.string,
//       align: PropTypes.string,
//       width: PropTypes.number,
//     })
//   ).isRequired,
// };

/**
 * Styled components
 **/

const ContainerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  tbody:before {
    content: "-";
    display: block;
    line-height: 0.6em;
    color: transparent;
  }
`;

const TableHeader = styled.th`
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 10px;
  font-weight: 700;
  text-align: ${(props) => (props.align ? props.align : "left")};
  width: ${(props) => props.width && `${props.width}px`};
`;

const TrContent = styled.tr`
  // border-bottom: 2px solid blue;
  background-color: green;
  text-align: left;
  &:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const TdContent = styled.td`
  color: white;
  padding: 10px;
  height: 10px;
  //background-color: gray;
`;
