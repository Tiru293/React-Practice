{
  /* <div id="parent">
  <div id="child">
    <h1>Hello h1 tag</h1>
    <h2>Hello h2 tag</h2>
  </div>
  <div id="child2">
    <h1>Hello h1 tag</h1>
    <h2>Hello h2 tag</h2>
  </div>
</div>; */
}

// ReactElement(Object)==>HTML (Browser Understands)
//Create Element will take 3 orguments tag, {any id or class, or attributes},children

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" },"Hello h1 tag"),
    React.createElement("h2", { id: "h2" }, "Hello h2 tag") ]),

  React.createElement("div", { id: "child1" },[
    React.createElement("h1", { id: "h1" },"Hello h1 tag"),
    React.createElement("h2", { id: "h2" }, "Hello h2 tag") 
  ])
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

//{} is attributes to the tag
