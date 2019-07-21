import React from "react";
import { CsvToHtmlTable } from "react-csv-to-table";

import picardCsv from "./picard.csv";

export const App = () => {
  return (
    <div className="container">

      <h2>Picard Watchlist</h2>

      <p>I am <i>quite</i> stoked about the upcoming NEW STAR TREK SERIES, <a href="https://arstechnica.com/gaming/2019/07/once-again-engage-picard-trailer-feels-like-the-next-next-generation/">Picard</a>.
      I found some watch lists, but once you have more than one watch list, it's hard to understand the order. Also, spreasheets are amazing.
      So I sucked it up, acknowledged that I am now the biggest nerd ever, and made this.</p>
      <p>This list is open-source, so if you have suggestions, open a Pull Request <a href="https://github.com/sam-qordoba/picard">here</a>.</p>
      <br /><br />
      <p><a href="https://twitter.com/sam_havens?ref_src=twsrc%5Etfw" class="twitter-follow-button"
        data-show-count="false">Follow @sam_havens</a>
      </p>
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
