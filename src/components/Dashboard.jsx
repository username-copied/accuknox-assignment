// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { replaceWidgets, removeWidget } from "../features/widgets/widgetSlice";
// import { toggleMenu, closeMenu } from "../features/menu/menuSlice";
// import "./dashboard.css";
// import "./navbar.css";
// import widgetsData from "../widgets.json";

// import { SlRefresh } from "react-icons/sl";
// import { GoClockFill } from "react-icons/go";
// import SideMenu from "./SideMenu";

// const MAX_WIDGETS_PER_CATEGORY = 3; // Set the maximum number of widgets per category

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const selectedWidgetsInfo = useSelector(
//     (state) => state.category.selectedWidgetsInfo
//   );
//   const categories = useSelector((state) => state.category.xyz);
//   // const isOpen = useSelector((state) => state.menu.isOpen);

//   const [filteredDataByCategory, setFilteredDataByCategory] = useState([]);
//   const [selectedWidgets, setSelectedWidgets] = useState({});

//   const handleToggle = () => {
//     dispatch(toggleMenu());
//   };

//   // const handleClose = () => {
//   //   dispatch(closeMenu());
//   // };

//   // const handleCheckboxChange = (category, widgetId) => {
//   //   setSelectedWidgets((prevSelected) => ({
//   //     ...prevSelected,
//   //     [category]: {
//   //       ...prevSelected[category],
//   //       [widgetId]: !prevSelected[category]?.[widgetId],
//   //     },
//   //   }));
//   // };

//   const handleRemoveWidget = (category, widgetId) => {
//     //     dispatch(removeWidget({ category, widgetId }));
//   };

//   // const handleAddSelectedWidgets = (category) => {
//   //   if (selectedWidgets[category]) {
//   //     const newWidgets = widgetsData.filter(
//   //       (widget) =>
//   //         widget.category === category && selectedWidgets[category][widget.id]
//   //     );
//   //     dispatch(replaceWidgets({ category, widgets: newWidgets }));
//   //   }
//   // };

//   useEffect(() => {
//     const uniqueCategories = [
//       ...new Set(selectedWidgetsInfo.map((item) => item.categoryName)),
//     ];

//     setFilteredDataByCategory(
//       uniqueCategories.map((category) => {
//         return {
//           categoryName: category,
//           items: selectedWidgetsInfo.filter(
//             (item) => item.categoryName === category
//           ),
//         };
//       })
//     );
//   }, [selectedWidgetsInfo]);

//   const renderEmptyCards = (categoryName, widgetsCount) => {
//     const emptyCards = [];
//     const cardsToAdd = MAX_WIDGETS_PER_CATEGORY - widgetsCount;

//     for (let i = 0; i < cardsToAdd; i++) {
//       emptyCards.push(
//         <div
//           key={`empty-${categoryName}-${i}`}
//           className="widget empty-card"
//           style={{
//             padding: "10px",
//             width: "30vw",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <button onClick={handleToggle} className="button emptyCardBtn">
//             &#43; Add Widget
//           </button>
//         </div>
//       );
//     }
//     return emptyCards;
//   };

//   return (
//     <div className="container">
//       <SideMenu />
//       <div className="bar">
//         <h3 className="title">CNAPP Dashboard</h3>
//         <button onClick={handleToggle} className="button">
//           Add Widget &#43;
//         </button>
//         <div className="Logo">
//           <SlRefresh />
//         </div>
//         <div className="Logo colon">&#8942;</div>
//         <div className="dropdown-div">
//           <div className="dropdown-logo">
//             <GoClockFill />
//           </div>
//           <div className="dropdown-menu">
//             <select id="services" className="dropdown-select">
//               <option value="two" className="days">
//                 Last 2 days
//               </option>
//               <option value="seven" className="days">
//                 Last 7 days
//               </option>
//               <option value="week" className="days">
//                 Last Week
//               </option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {filteredDataByCategory?.map((data, index) => (
//         <div key={index} className="category">
//           <h2>{data.categoryName}</h2>
//           <div className="widget-container">
//             {data.items?.map((widget) => (
//               <div key={widget.id} className="widget">
//                 <h3>{widget.widgetName}</h3>
//                 {/* <p>{widget.description}</p> */}
//                 <div>{widget.category}</div>
//                 <img
//                   src={widget.image}
//                   alt={widget.name}
//                   style={{ width: "100%", maxWidth: "150px" }}
//                 />
//                 <button
//                   onClick={() =>
//                     handleRemoveWidget(widget.categoryName, widget.id)
//                   }
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             {/* Render empty cards */}
//             {renderEmptyCards(data.categoryName, data.items.length)}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replaceWidgets, removeWidget } from "../features/widgets/widgetSlice";
import { toggleMenu, closeMenu } from "../features/menu/menuSlice";
import "./dashboard.css";
import "./navbar.css";
import widgetsData from "../widgets.json";

import { SlRefresh } from "react-icons/sl";
import { GoClockFill } from "react-icons/go";
import SideMenu from "./SideMenu";

const MAX_WIDGETS_PER_CATEGORY = 3; // Set the maximum number of widgets per category

const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedWidgetsInfo = useSelector(
    (state) => state.category.selectedWidgetsInfo
  );
  const categories = useSelector((state) => state.category.xyz);
  // const isOpen = useSelector((state) => state.menu.isOpen);

  const [filteredDataByCategory, setFilteredDataByCategory] = useState([]);
  const [selectedWidgets, setSelectedWidgets] = useState({});

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  // const handleClose = () => {
  //   dispatch(closeMenu());
  // };

  // const handleCheckboxChange = (category, widgetId) => {
  //   setSelectedWidgets((prevSelected) => ({
  //     ...prevSelected,
  //     [category]: {
  //       ...prevSelected[category],
  //       [widgetId]: !prevSelected[category]?.[widgetId],
  //     },
  //   }));
  // };

  const handleRemoveWidget = (category, widgetId) => {
    //     dispatch(removeWidget({ category, widgetId }));
  };

  // const handleAddSelectedWidgets = (category) => {
  //   if (selectedWidgets[category]) {
  //     const newWidgets = widgetsData.filter(
  //       (widget) =>
  //         widget.category === category && selectedWidgets[category][widget.id]
  //     );
  //     dispatch(replaceWidgets({ category, widgets: newWidgets }));
  //   }
  // };

  console.log(categories);
  console.log(selectedWidgetsInfo);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(selectedWidgetsInfo.map((item) => item.categoryName)),
    ];

    setFilteredDataByCategory(
      categories.map((category) => {
        return {
          categoryName: category.categoryName,
          items: selectedWidgetsInfo.filter(
            (item) => item.categoryName === category.categoryName
          ),
        };
      })
    );
  }, [selectedWidgetsInfo]);

  const renderEmptyCards = (categoryName, widgetsCount) => {
    const emptyCards = [];
    const cardsToAdd = 1;

    for (let i = 0; i < cardsToAdd; i++) {
      emptyCards.push(
        <div className="emptyCards-div">
          <div
            key={`empty-${categoryName}-${i}`}
            className="widget empty-card"
            style={{
              padding: "10px",
              width: "30vw",
              height: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={handleToggle} className="button emptyCardBtn">
              &#43; Add Widget
            </button>
          </div>
        </div>
      );
    }
    return emptyCards;
  };

  return (
    <div className="container">
      <SideMenu />
      <div className="bar">
        <h3 className="title">CNAPP Dashboard</h3>
        <button onClick={handleToggle} className="button">
          Add Widget &#43;
        </button>
        <div className="Logo">
          <SlRefresh />
        </div>
        <div className="Logo colon">&#8942;</div>
        <div className="dropdown-div">
          <div className="dropdown-logo">
            <GoClockFill />
          </div>
          <div className="dropdown-menu">
            <select id="services" className="dropdown-select">
              <option value="two" className="days">
                Last 2 days
              </option>
              <option value="seven" className="days">
                Last 7 days
              </option>
              <option value="week" className="days">
                Last Week
              </option>
            </select>
          </div>
        </div>
      </div>

      {filteredDataByCategory?.map((data, index) => (
        <div key={index} className="category">
          <h2>{data.categoryName}</h2>
          <div className="widget-container">
            {data.items?.map((widget) => (
              <div key={widget.id} className="widget">
                <h3>{widget.widgetName}</h3>
                <div>{widget.category}</div>
                <img
                  src={widget.image}
                  alt={widget.name}
                  style={{ width: "100%", maxWidth: "150px" }}
                />
                <button
                  onClick={() =>
                    handleRemoveWidget(widget.categoryName, widget.id)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
            {renderEmptyCards(data.categoryName, data.items.length)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
