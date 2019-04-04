/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import './Table.scss';
import headerStrings from '../../templates/Resources';

// TODO
// eslint-disable-next-line react/prefer-stateless-function
class Table extends Component {
  render() {
    const { defaultTableHeaders, tableData } = this.props;

    let header;
    if (tableData.length !== 0) {
      const headerList = Object.keys(tableData[0]);
      header = headerList.filter(elem => elem !== '_links').map((columnTitle, index) => (
        <th key={`header-${index}`}>{headerStrings.get(columnTitle)}</th>
      ));
    }

    return (
      <div className="table-container">
        <table>
          {tableData.length === 0 ? null : (
            <thead>
              <tr key="header-row">
                <th id="hiddencolumn" key="header-hidden" />
                {header}
              </tr>
            </thead>
          )
          }

          <tbody>
            {
              tableData.map((dataObject) => {
                const elementID = `element-${dataObject._links.self.href.slice(-1)}`;

                return (
                  <tr key={elementID}>
                    <td id="hiddencolumn" key={`${elementID}-hidden`} />
                    {
                      // TODO change defaultValue to value nad set change handler
                      Object.keys(dataObject).filter(key => key !== '_links').map(key => (
                        <td key={`${elementID}-${key}`}>
                          <input className="input-field" type="text" key={`${elementID}-${key}-input`} defaultValue={dataObject[key]} />
                        </td>
                      ))
                    }
                  </tr>
                );
              })
            }
            <tr key="add-row">
              <td id="hiddencolumn" key="add-hidden">
                <button id="addbutton" type="submit" key="add-button">+</button>
              </td>
              {defaultTableHeaders.map((item, index) => <td key={`add-${index}`}><input className="input-field" type="text" key={`add-${index}-input`} placeholder={headerStrings.get(item)} /></td>)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
