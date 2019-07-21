import React from "react";
import { CsvToHtmlTable } from "react-csv-to-table";

import picardCsv from "./picard.csv";

export const App = () => {
  return (
    <div className="container">

      <h2>Picard Watchlist</h2>

      <p>I am stoked about the upcoming series <a href="https://arstechnica.com/gaming/2019/07/once-again-engage-picard-trailer-feels-like-the-next-next-generation/">Picard</a>.
      I found some watchlists, but needed a spreadsheet to make sure I watched in order.</p>
      <p>This list is open-source, so if you have edits, open a Pull Request <a href="ADD LINK">here</a>.</p>
      <br /><br />
      <CsvToHtmlTable
        data={picardCsv}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />
    </div>
  );
};

export default App;
