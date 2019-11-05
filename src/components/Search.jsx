import App from './App.js';

var Search = () => (
  <div className="search-bar form-inline">
    <h3>sdfsdf</h3>
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
