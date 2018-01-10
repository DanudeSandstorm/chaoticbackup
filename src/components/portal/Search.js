import React from 'react';
import API from '../SpreadsheetData';
import {observable} from "mobx";
import {observer, inject} from 'mobx-react';
import loki from 'lokijs';

@inject((stores, props, context) => props) @observer
export default class SearchPortal extends React.Component {

  render() {
  return (<div className="search">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="magnifying-glass"><g fillRule="evenodd"><path d="M21.747 20.524l-4.872-4.871a.864.864 0 1 0-1.222 1.222l4.871 4.872a.864.864 0 1 0 1.223-1.223z"></path><path d="M3.848 10.763a6.915 6.915 0 0 1 6.915-6.915 6.915 6.915 0 0 1 6.915 6.915 6.915 6.915 0 0 1-6.915 6.915 6.915 6.915 0 0 1-6.915-6.915zm-1.729 0a8.643 8.643 0 0 0 8.644 8.644 8.643 8.643 0 0 0 8.644-8.644 8.643 8.643 0 0 0-8.644-8.644 8.643 8.643 0 0 0-8.644 8.644z"></path></g>
    </svg>Search
  </div>);
  }
}
