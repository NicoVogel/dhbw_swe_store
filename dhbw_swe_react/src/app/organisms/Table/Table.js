import React, { Component } from 'react';
import './Table.scss';
import headerStrings from '../../templates/Resources';

// TODO
// eslint-disable-next-line react/prefer-stateless-function
class Table extends Component {
  render() {
    const { mockTableHeaders, tableData, mockTableData } = this.props;

    let header;
    if (tableData.length !== 0) {
      const headerList = Object.keys(tableData[0]);
      header = headerList.map((columnTitle) => {
        console.log(columnTitle);
        if (columnTitle !== '_links') {
          return <th>{headerStrings.get(columnTitle)}</th>;
        } return null;
      });
    }

    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th id="hiddencolumn" />
              {header}
            </tr>
          </thead>

          <tbody>
            {
              tableData.map(dataObject => (
                <tr>
                  <td id="hiddencolumn" />
                  {
                    // TODO change defaultValue to value nad set change handler
                    Object.keys(dataObject).map((key) => {
                      if (key !== '_links') {
                        return <td><input className="input-field" type="text" defaultValue={dataObject[key]} /></td>;
                      } return null;
                    })
                  }
                </tr>
              ))
            }
            <tr>
              <td id="hiddencolumn">
                <button id="addbutton" type="submit">+</button>
              </td>
              {mockTableHeaders.map(item => <td><input className="input-field" type="text" placeholder={item.text} /></td>)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
