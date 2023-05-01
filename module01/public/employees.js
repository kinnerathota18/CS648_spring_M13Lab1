let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
let amol = "Amol Shookup";
let jay = "Jay Gujarathi";
let saurabh = "Saurabh Deshpande";
let pankaj = "Pankaj Chohan";
let eren = "Eren chowdhary";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "blue",
    fontSize: "24px"
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, jay), /*#__PURE__*/React.createElement("li", null, saurabh), /*#__PURE__*/React.createElement("li", null, pankaj), /*#__PURE__*/React.createElement("li", null, eren));
ReactDOM.render(element, document.getElementById("content"));