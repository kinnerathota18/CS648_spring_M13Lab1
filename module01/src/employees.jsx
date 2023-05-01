let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
let amol = "Amol Shookup";
let jay = "Jay Gujarathi";
let saurabh = "Saurabh Deshpande";
let pankaj = "Pankaj Chohan";
let eren = "Eren chowdhary";
const element = (
  <ul style={{ color: "blue", fontSize: "24px" }}>
    <li>{sally}</li>
    <li>{mark}</li>
    <li>{holly}</li>
    <li>{amol}</li>
    <li>{jay}</li>
    <li>{saurabh}</li>
    <li>{pankaj}</li>
    <li>{eren}</li>
  </ul>
);
ReactDOM.render(element, document.getElementById("content"));
