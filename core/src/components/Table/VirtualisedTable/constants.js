import PropTypes from "prop-types";

export const DEFAULT_COLORS = {
  headerBg: "#eeeeee",
  subHeaderBg: "#f7f7f7",
  groupHeaderBg: "#d3e2f2",
  border: "#e4e4e4",
  text: "#2b3b5c",
  subText: "#666666",
  checkbox: "#2196f3",
  disabledCheckbox: "#2196f396",
};

export const DEFAULT_DIMENSIONS = {
  rowHeight: 60,
  headerHeight: 60, 
  firstColumnWidth: 360,
  columnWidth: 140,
};

export const MatrixPropTypes = {
  renderCell: PropTypes.func,
  renderFirstColumn: PropTypes.func,
  colors: PropTypes.shape({
    headerBg: PropTypes.string,
    subHeaderBg: PropTypes.string,
    groupHeaderBg: PropTypes.string,
    border: PropTypes.string,
    text: PropTypes.string,
    subText: PropTypes.string,
    checkbox: PropTypes.string,
    disabledCheckbox: PropTypes.string,
  }),
};