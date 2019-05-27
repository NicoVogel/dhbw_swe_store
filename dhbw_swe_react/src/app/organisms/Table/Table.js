import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Table.scss';
import { SERVER_ADDRESS, REST_LINKS, headerStrings, CATEGORY } from '../../templates/Resources';
import RedirectDetail from '../../atoms/RedirectDetail/RedirectDetail';

// use a library instead of vanilla js for REST API , due to better performance and ease of use
const axios = require('axios');

// configure notification system globally
toast.configure({
  closeButton:false,
  autoClose: 3000,
});

// ----------------------------
// NOTIFICATION

const notifyError = (text) => {
  return toast.error(text);
}

const notifyInfo = (text) => {
  return toast.info(text);
}

const notifySuccess = (text, hideProgressBar, autoClose) => {
  if (autoClose !== undefined) {
    return toast.success(text, {hideProgressBar, autoClose});
  }
  return toast.success(text, {hideProgressBar});
}

const notifyUpdateSuccess = (id, text) => {
  toast.update(id, {
    render: text,
    type: toast.TYPE.SUCCESS,
  });
}

const notifyUpdateError = (id, text) => {
  toast.update(id, {
    render: text,
    type: toast.TYPE.ERROR,
  });
}

// ------------------------

/**
 * Renders a Table 
 * @param {props} props needs category and default headers
 */

class Table extends Component {

  constructor(props) {
    super(props);
    const { defaultTableHeaders, category } = this.props;

    let newEntry = {};
    defaultTableHeaders.forEach((headerElem) => {
      newEntry[headerElem] = '';
    });

    this.state = {
      defaultTableHeaders,
      category,
      tableData: [],
      isLoaded: false,
      errorMsg: '',
      // newEntry: temporarily hold the new row
      newEntry,
      // activeRow: detailed view + delete button shows up, user enters edit mode, text will be italic & change color
      activeRow: -1,
      // toBeDeleted: selected row will be marked red, provides an intermediate step before deleting 
      toBeDeleted: -2,
    }
  }

  componentDidMount() {
    this.getTableData(true);
  }

  // ------------------------------------

  // REST API Call for updating a row, needs acces to props and states for updating values

  updateRow(row) {
    const id = notifyInfo("Update läuft");
    axios.put(row._links.self.href, row ,{headers: {'Content-Type': 'application/json'}})
        .then(results => {
          console.log(results);
          notifyUpdateSuccess(id, "Update erfolgreich");
          this.getTableData(false)
        })
        .catch(error => {
          console.log(error);
          notifyUpdateError(id, "Update fehlgeschlagen");
        });
  }


  deleteRow (rowID, category) {
    const id = notifyInfo("Eintrag löschen");
    axios.delete(`${SERVER_ADDRESS}${REST_LINKS.get(category)}/${rowID}`)
        .then(results => {
          console.log(results);
          notifyUpdateSuccess(id, "Löschen erfolgreich");
          this.getTableData(false)
        })
        .catch(error => {
          console.log(`${SERVER_ADDRESS}${REST_LINKS.get(category)}/${rowID}`)
          console.log(error);
          notifyUpdateError(id, "Löschen fehlgeschlagen");
        });
  }

  postRow(row, category) {
    const id = notifyInfo("Neuer Eintrag anlegen");
    axios.post(`${SERVER_ADDRESS}${REST_LINKS.get(category)}`, row ,{headers: {'Content-Type': 'application/json'}})
        .then(results => {
          // reset new row
          let newEntry = {};
          this.props.defaultTableHeaders.forEach((headerElem) => {
            newEntry[headerElem] = '';
          });

          this.setState({
            ...this.state,
            newEntry,
          });

          notifyUpdateSuccess(id, "Neuer Eintrag erfolgreich angelegt");
          this.getTableData(false);
        })
        .catch(error => {
          console.log({error});
          notifyUpdateError(id, `Eintrag anlegen fehlgeschlagen - HTTP Fehler: ${error.response.status}`);
        });
  }

  // Rest Call for fetching the table data, but needs acces to state for filling tableData

  getTableData(initial) {
    const { category } = this.state;
    axios.get(`${SERVER_ADDRESS}${REST_LINKS.get(category)}`)
      .then((results) => {
        if (results.status === 200) {
          this.setState({
            ...this.state,
            tableData: results.data._embedded[category],
            isLoaded: true,
          });
        }
        if (initial) {
          console.log(`refresh data for ${category}`);
          notifySuccess(`${CATEGORY.get(category)} erfolgreich geladen`, true, 1500);
        }
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          errorMsg: `${error}`,
        });
        notifyError(`Ein Fehler ist aufgetreten:\n ${error}`);
      });
  }

  // ----------------------------------------------------
  /* EVENTHANDLER */

  onChangeAddElementHandler = (event) => {

    this.setState({
      ...this.state,
      newEntry:{
        ...this.state.newEntry,
        [event.target.id]:event.target.value,
      }
    })
  }

  onClickAddRowHandler = (event) => {
    const missingEntriesCount = Object.keys(this.state.newEntry).filter(key => this.state.newEntry[key].length === 0).length;
    
    if(missingEntriesCount === 0) {
      this.postRow(this.state.newEntry, this.state.category);
      
    } else {
      notifyError(`Bitte fülle die restlichen ${missingEntriesCount} Felder aus!`);
    }
  }

  changeHandler = (event) => {
    // do nothing on change, as other onblur/onfocus are less resource intensive but do the same
  }
 
  /**
   * Update the active row which is in current focus
   */
  onFocusChangeElementHandler = (event) => {
    const rowIndex = event.target.id.split('_')[0];
    this.setState({
      ...this.state,
      activeRow: parseInt(rowIndex),
      toBeDeleted: -2,
    });
  }

  /**
   * Sends an Update to the DB if there is a change in the active Row, reset all active markers afterwards
   */
  onBlurChangeElementHandler = event => {
  
   const rowLine = parseInt(event.target.id.split('_')[0]);
   const columnKey = event.target.id.split('_')[1];
   
   const newValue = event.target.value;
    
    this.setState(state => {
      // create new table where the change is added
     const tableData = state.tableData.map((row, rowIndex) => {
       if(rowIndex===rowLine) {
         // change the value at the right spot
         if (row[columnKey].toString() !== newValue) {
           row[columnKey] = newValue;      
           this.updateRow(row);
          }
        } 
      return row;
     });
     // only touch tableData, the rest remains original
     return {
       ...this.state,
       tableData,
       activeRow: -1,
       toBeDeleted: -2,
     }
   });
  }

  /**
   * Deletes the row, mark the row first and deletes it when toBeDeleted matches the active row again
   */
  onClickDeleteRowHandler = (event) => {
    const rowID = event.target.id.split('_')[0];
    const { activeRow, toBeDeleted, category } = this.state;
    console.log(event.target)
    // this prevents the user from deleting on first click by saving the step inbetween
    if (activeRow !== toBeDeleted) {
      this.setState({
        ...this.state,
        toBeDeleted: activeRow,
      });
    } else {

      this.deleteRow(rowID, category);
      this.setState({
        ...this.state,
        activeRow: -1,
        toBeDeleted: -2,
      })
    }
  }

  /**
   * Marks the row as active (for displaying remove & detail buttons)
   */
  onClickMakeActive = (event) => {
    // if the input field is clicked instead of td, the id field is different
    // category will be included and need to be splitted
    const rowIndex = event.target.id.split('_')[0];
    this.setState({
      ...this.state,
      activeRow: parseInt(rowIndex),
      toBeDeleted: -2,
    })
  }

  /**
   * Resets every marker
   */
  resetActive = () => {
    this.setState({
      ...this.state,
      activeRow: -1,
      toBeDeleted: -2,
    })
  }

  /**
   * Testing purposes only!
   */
  onDoNothing = (event) => {
    // override parents onclick method
    event.stopPropagation();
  }

  // ---------------------------

  render() {

    const {
      isLoaded, errorMsg, activeRow, toBeDeleted, category
    } = this.state;
    let header;

    // generate the header from the first row of the tableData
    if(this.state.tableData.length !== 0){
      const headerList = Object.keys(this.state.tableData[0]).filter(elem => elem !== '_links');
      header = headerList.map((columnTitle, index) => (
        <th key={`header-${index}`}>{headerStrings.get(columnTitle)}</th>
      ));
    }
    return (
      <div className="table-container">
        {isLoaded
        // either show 'Loading' or the real tableData
          ? (
          <table>
            {this.state.tableData.length === 0 ? 
            // in case there are no rows existing, the header will be hidden
            null : (
              <thead>
                <tr key="header-row">
                  <th className="hiddencolumn" key="header-hidden" />
                  {header}
                </tr>
              </thead>
            )
            }

            <tbody>
              {
                // iterate over each row of the table
                this.state.tableData.map((dataObject, rowIndex) => {
                  const selfLinkURL = dataObject._links.self.href;
                  let elementID = selfLinkURL.split('/');
                  elementID = elementID[elementID.length-1];

                  return (
                    <tr key={`element-${elementID}`} id={`row-${rowIndex}`} className={ rowIndex !== toBeDeleted ? '' :  'to-be-deleted' }>
                      <td className="hiddencolumn" key={`remove-${elementID}-hidden`}>
                      { activeRow !== rowIndex ? 
                      // REMOVEBUTTON
                      // only show the remove button if the row is active
                      null : (
                          <button 
                          className="button button-remove"
                          type="submit" key={`remove-${elementID}-button`}
                          id={`${elementID}_${rowIndex}`}
                          onClick={this.onClickDeleteRowHandler}>
                            {/* <RemoveButton /> */}
                            X
                          </button>
                          
                        )
                      }
                        
                      </td>
                      {
                        // TABLE
                        // iterate over the each column of the row
                        Object.keys(dataObject).filter(key => key !== '_links').map((key, columnIndex) => (
                          <td 
                          key={`element-${elementID}-${key}`} 
                          id={`${rowIndex}`} 
                          onClick={this.onClickMakeActive}
                          >

                            <input 
                            className={`input-field ${activeRow === rowIndex ? 'in-edit': ''}`}
                            type="text" 
                            key={`element-${elementID}-${key}-input`} 
                            defaultValue={dataObject[key]} 
                            id={`${rowIndex}_${key}`}
                            onChange={this.changeHandler}
                            onBlur={this.onBlurChangeElementHandler} 
                            onClick={this.onDoNothing}
                            onFocus={this.onFocusChangeElementHandler} />
                            
                          { 
                            // REDIRECTDETAIL
                            //only apply the redirect arrow (detail page) for the first column of products and if the row is active 
                            (columnIndex === 0 && category === 'product' && rowIndex === activeRow) ? 
                            <RedirectDetail id={elementID} />
                            : null
                          }
                          </td>
                        ))
                      }
                    </tr>
                  );
                })
              }
              <tr key="add-row">
                <td className="hiddencolumn" key="add-hidden">
                  <button className="button button-add" type="submit" key="add-button" onClick={this.onClickAddRowHandler} >
                    {/* <AddButton /> */}
                    +
                  </button>
                </td>
                { // ADD-ROW
                  // use the predefined headers  directly for the 'add row' part of the table
                  this.state.defaultTableHeaders.map((item, index) => 
                  <td key={`add-${index}`}>
                    <input 
                      className="input-field" 
                      type="text" 
                      key={`add-${index}-input`} 
                      id={`${item}`}
                      placeholder={headerStrings.get(item)}
                      value={this.state.newEntry[item]}
                      onChange={this.onChangeAddElementHandler}
                      onFocus={this.resetActive}
                      />
                  </td>)}
              </tr>
            </tbody>
          </table>
          )
          : [
            errorMsg.length === 0 ? <h1 key="temp-loading">LOADING</h1> : <h1 key="temp-error">{errorMsg}</h1>,
          ]
        }
        
      </div>
    );
  }
}

export default Table;
