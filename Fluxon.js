// Round 1 :

/*
const accordianData = [
  {
    header: "header-1",
    content: "content-1"
  },
  {
    header: "header-2",
    content: "content-2"
  },
  {
    header: "header-3",
    content: "content-3"
  },
  {
    header: "header-4",
    content: {
      header: "header-5",
      content: {
        header: "header-6",
        content: {
        header: "header-7",
      content: {
        header: "header-8",
        content: "content-8"
      }
      }
      }
    }
  }
];

// Build an accordion with above data with plain JS.
// Content is collapsed by default, and expanded on header click.
*/
// accordianData?.map(({header,content})=>{
//   return
// })
// const ToggleAccordian = (e)=>{

// }

// Solution :

// data.js

// export const accordianData = [
//   {
//     header: "header-1",
//     content: "content-1",
//   },
//   {
//     header: "header-2",
//     content: "content-2",
//   },
//   {
//     header: "header-3",
//     content: "content-3",
//   },
//   {
//     header: "header-4",
//     content: {
//       header: "header-5",
//       content: {
//         header: "header-6",
//         content: {
//           header: "header-7",
//           content: {
//             header: "header-8",
//             content: "content-8",
//           },
//         },
//       },
//     },
//   },
// ];

// export const flattenObj = (content) => {
//   console.log("item in funciton ", content);
//   let arr = [];
//   Object?.keys(content)?.map((item) => {
//     arr.push(item?.header);
//     if (typeof item?.content !== "object") {
//       let subFlatObj = flattenObj(item?.content);
//       arr = [...arr, ...subFlatObj];
//     } else {
//       arr.push(item?.content);
//     }
//   });
//   return arr;
// };

// AccItem.js

// import { useState } from "react";
// const AccItem = ({ header = "", content = "" }) => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <>
//       <h2
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {header}
//       </h2>
//       {typeof content == "string"
//         ? visible && <h3>content</h3>
//         : visible && (
//             <AccItem header={content?.header} content={content?.content} />
//           )}
//     </>
//   );
// };
// export default AccItem;

// App.js  - main file

// import "./styles.css";
// import { accordianData } from "./data";
// import AccItem from "./AccItem";
// export default function App() {
//   return (
//     <div className="App">
//       {accordianData?.map(({ header, content }) => {
//         return <AccItem header={header} content={content} />;
//       })}
//     </div>
//   );
// }
