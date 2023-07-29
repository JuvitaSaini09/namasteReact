import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";




// const heading1 = React.createElement("h1", {key:"1",class:"h1"}, "Heading 1");
//     |
//     |
//     V
// const heading1=(
// <h1 id="title" key="h1">
//     Heading 1
// </h1>
// );
// // const heading2 = React.createElement("h2", {key:"2"}, "Heading 2");

// const heading2=<h2 id="title2" key="h2">Heading2</h2>;

// const container = React.createElement("div", {}, [heading1, heading2]);

//React Element
// const heading=<h1>React Element</h1>;

// //----Functional Components -----
// const Title=()=><h1>title</h1>
// const HeaderComponent=()=>{

//     return (
//         <div>
//             <h1>Heading1</h1>
//             <h2>Heading2</h2>
//             {heading}
//             <Title />
//             {Title()}
//         </div>
//     );
// }

/*---------New Code -----------*/



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
