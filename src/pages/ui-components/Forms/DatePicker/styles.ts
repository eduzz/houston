/* eslint-disable max-lines */
const styles = `
.rc-picker {
    display: inline-flex;
  }
  .rc-picker-rtl {
    direction: rtl;
  }
  .rc-picker-focused {
    border: 1px solid blue;
  }
  .rc-picker-panel {
    display: inline-block;
    vertical-align: top;
    background: #fff0ff;
    border: 1px solid #666;
  }
  .rc-picker-panel-focused {
    border-color: blue;
  }
  .rc-picker-panel-rtl {
    direction: rtl;
  }
  .rc-picker-decade-panel,
  .rc-picker-year-panel,
  .rc-picker-month-panel,
  .rc-picker-week-panel,
  .rc-picker-date-panel,
  .rc-picker-time-panel {
    display: flex;
    flex-direction: column;
  }
  .rc-picker-decade-panel table,
  .rc-picker-year-panel table,
  .rc-picker-month-panel table,
  .rc-picker-week-panel table,
  .rc-picker-date-panel table,
  .rc-picker-time-panel table {
    text-align: center;
    border-collapse: collapse;
  }
  .rc-picker-header {
    display: flex;
  }
  .rc-picker-header > * {
    flex: none;
  }
  .rc-picker-header-view {
    flex: auto;
    text-align: center;
  }
  .rc-picker-header-view > button {
    padding: 0;
    border: 0;
  }
  .rc-picker-cell {
    color: #aaa;
  }
  .rc-picker-cell-disabled {
    opacity: 0.2;
  }
  .rc-picker-cell-inner {
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 20px;
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: 20px;
    background: transparent;
    border: 0;
    border: none;
    outline: none;
    cursor: pointer;
    transition: background 0.3s, border 0.3s;
  }
  .rc-picker-cell-inner:hover {
    background: rgba(0, 0, 255, 0.3);
  }
  .rc-picker-cell-in-view {
    color: #333;
  }
  .rc-picker-cell-in-range > .rc-picker-cell-inner {
    background: rgba(0, 0, 255, 0.05);
  }
  .rc-picker-cell-range-hover-start,
  .rc-picker-cell-range-hover-end,
  .rc-picker-cell-range-hover {
    position: relative;
  }
  .rc-picker-cell-range-hover-start::after,
  .rc-picker-cell-range-hover-end::after,
  .rc-picker-cell-range-hover::after {
    position: absolute;
    top: 3px;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid green;
    border-right: 0;
    border-left: 0;
    content: '';
    pointer-events: none;
  }
  .rc-picker-cell-range-hover-start::after {
    border-left: 1px solid green !important;
  }
  .rc-picker-cell-range-hover-end::after {
    border-right: 1px solid green !important;
  }
  .rc-picker-cell-today > .rc-picker-cell-inner {
    border: 1px solid blue;
  }
  .rc-picker-cell-range-start > .rc-picker-cell-inner,
  .rc-picker-cell-range-end > .rc-picker-cell-inner,
  .rc-picker-cell-selected > .rc-picker-cell-inner {
    background: rgba(0, 0, 255, 0.2);
  }
  .rc-picker-footer,
  .rc-picker-picker-footer {
    background: green;
  }
  .rc-picker-ranges {
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
  }
  .rc-picker-ranges > li {
    display: inline-block;
  }
  .rc-picker-ok {
    float: right;
  }
  .rc-picker-year-panel .rc-picker-cell-inner,
  .rc-picker-month-panel .rc-picker-cell-inner {
    width: 80px;
  }
  .rc-picker-week-panel-row:hover .rc-picker-cell {
    background: red;
  }
  .rc-picker-week-panel-row-selected .rc-picker-cell {
    background: rgba(0, 0, 255, 0.3);
  }
  .rc-picker-week-panel .rc-picker-cell,
  .rc-picker-week-panel .rc-picker-cell-inner {
    width: 20px;
  }
  .rc-picker-week-panel .rc-picker-cell-week {
    color: #999;
    font-weight: bold;
    font-size: 12px;
  }
  .rc-picker-week-panel .rc-picker-cell:hover > .rc-picker-cell-inner,
  .rc-picker-week-panel .rc-picker-cell-selected > .rc-picker-cell-inner {
    background: transparent;
  }
  .rc-picker-date-panel .rc-picker-cell-inner {
    width: 20px;
  }
  .rc-picker-time-panel {
    width: auto;
  }
  .rc-picker-time-panel .rc-picker-content {
    display: flex;
    max-height: 200px;
  }
  .rc-picker-time-panel-column {
    flex: none;
    width: 50px;
    margin: 0;
    padding: 0 0 180px 0;
    overflow-x: hidden;
    overflow-y: hidden;
    font-size: 12px;
    text-align: left;
    list-style: none;
    transition: background 0.3s;
  }
  .rc-picker-time-panel-column-active {
    background: rgba(0, 0, 255, 0.1);
  }
  .rc-picker-time-panel-column:hover {
    overflow-y: auto;
  }
  .rc-picker-time-panel-column > li {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  .rc-picker-time-panel-column > li.rc-picker-time-panel-cell-disabled {
    opacity: 0.5;
  }
  .rc-picker-time-panel-column > li .rc-picker-time-panel-cell-inner {
    display: block;
    width: 100%;
    height: 20px;
    margin: 0;
    padding: 0 0 0 12px;
    color: #333;
    line-height: 20px;
    text-align: left;
  }
  .rc-picker-panel-rtl .rc-picker-time-panel-column > li .rc-picker-time-panel-cell-inner {
    padding: 0 12px 0 0;
    text-align: right;
  }
  .rc-picker-datetime-panel {
    display: flex;
  }
  .rc-picker-datetime-panel .rc-picker-time-panel {
    border-left: 1px solid #999;
  }
  .rc-picker-datetime-panel .rc-picker-date-panel,
  .rc-picker-datetime-panel .rc-picker-time-panel {
    transition: opacity 0.3s;
  }
  .rc-picker-datetime-panel-active .rc-picker-date-panel,
  .rc-picker-datetime-panel-active .rc-picker-time-panel {
    opacity: 0.3;
  }
  .rc-picker-datetime-panel-active .rc-picker-date-panel-active,
  .rc-picker-datetime-panel-active .rc-picker-time-panel-active {
    opacity: 1;
  }
  .rc-picker-input {
    position: relative;
    display: inline-flex;
    width: 100%;
  }
  .rc-picker-rtl .rc-picker-input {
    text-align: right;
  }
  .rc-picker-input > input {
    width: 100%;
  }
  .rc-picker-input > input::-moz-placeholder {
    opacity: 1;
  }
  .rc-picker-input > input::placeholder {
    color: #bfbfbf;
  }
  .rc-picker-input > input:placeholder-shown {
    text-overflow: ellipsis;
  }
  .rc-picker-input-placeholder > input {
    color: #bfbfbf;
  }
  .rc-picker-clear {
    position: absolute;
    top: 0;
    right: 4px;
    cursor: pointer;
  }
  .rc-picker-rtl .rc-picker-clear {
    right: auto;
    left: 4px;
  }
  .rc-picker-clear-btn::after {
    content: '×';
  }
  .rc-picker-dropdown {
    position: absolute;
    box-shadow: 0 0 1px red;
  }
  .rc-picker-dropdown-range {
    padding: 10px 0;
  }
  .rc-picker-dropdown-hidden {
    display: none;
  }
  .rc-picker-dropdown-placement-topLeft .rc-picker-range-arrow,
  .rc-picker-dropdown-placement-topRight .rc-picker-range-arrow {
    bottom: 6px;
    transform: rotate(135deg);
  }
  .rc-picker-dropdown-placement-bottomLeft .rc-picker-range-arrow,
  .rc-picker-dropdown-placement-bottomright .rc-picker-range-arrow {
    top: 6px;
    transform: rotate(-45deg);
  }
  .rc-picker-dropdown .rc-picker-range-arrow {
    position: absolute;
    left: 10px;
    z-index: 1;
    width: 10px;
    height: 10px;
    margin-left: 10px;
    transition: all 0.3s;
  }
  .rc-picker-dropdown-rtl.rc-picker-dropdown .rc-picker-range-arrow {
    right: 10px;
    left: auto;
    margin-right: 10px;
    margin-left: 0;
  }
  .rc-picker-dropdown .rc-picker-range-arrow::before,
  .rc-picker-dropdown .rc-picker-range-arrow::after {
    position: absolute;
    top: 50%;
    left: 50%;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    content: '';
  }
  .rc-picker-dropdown-rtl.rc-picker-dropdown .rc-picker-range-arrow::before,
  .rc-picker-dropdown-rtl.rc-picker-dropdown .rc-picker-range-arrow::after {
    right: 50%;
    left: auto;
    transform: translate(50%, -50%);
  }
  .rc-picker-dropdown .rc-picker-range-arrow::before {
    width: 10px;
    height: 10px;
    border: 5px solid blue;
    border-color: blue blue transparent transparent;
  }
  .rc-picker-dropdown .rc-picker-range-arrow::after {
    width: 8px;
    height: 8px;
    border: 4px solid blue;
    border-color: #fff0ff #fff0ff transparent transparent;
  }
  .rc-picker-range {
    position: relative;
    display: inline-flex;
  }
  .rc-picker-range-wrapper {
    display: flex;
  }
  .rc-picker-range .rc-picker-active-bar {
    bottom: 0;
    height: 3px;
    background: green;
    opacity: 0;
    transition: all 0.3s;
    pointer-events: none;
  }
  .rc-picker-range.rc-picker-focused .rc-picker-active-bar {
    opacity: 1;
  }
  .rc-picker-panel-container {
    display: inline-block;
    vertical-align: top;
    transition: margin 0.3s;
  }  
`;

export default styles;
