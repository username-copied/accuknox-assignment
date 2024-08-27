// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { replaceWidgets, removeWidget } from "../features/widgets/widgetSlice";
// import { toggleMenu, closeMenu } from "../features/menu/menuSlice";
// import "./dashboard.css";
// import widgetsData from "../widgets.json";

// import { SlRefresh } from "react-icons/sl";
// import { GoClockFill } from "react-icons/go";
// import SideMenu from "./SideMenu";
// import Card from "./Card";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const selectedWidgetsInfo = useSelector(
//     (state) => state.category.selectedWidgetsInfo
//   );
//   const isOpen = useSelector((state) => state.menu.isOpen);
//   // const

//   const handleRemoveWidget = (category, widgetId) => {
//     dispatch(removeWidget({ category, widgetId }));
//   };

//   const [filteredDataByCategory, setFilteredDataByCategory] = useState([]);
//   const [selectedWidgets, setSelectedWidgets] = useState({});

//   const handleToggle = () => {
//     dispatch(toggleMenu());
//   };

//   const handleClose = () => {
//     dispatch(closeMenu());
//   };

//   const handleCheckboxChange = (category, widgetId) => {
//     setSelectedWidgets((prevSelected) => ({
//       ...prevSelected,
//       [category]: {
//         ...prevSelected[category],
//         [widgetId]: !prevSelected[category]?.[widgetId],
//       },
//     }));
//   };

//   const handleAddSelectedWidgets = (category) => {
//     if (selectedWidgets[category]) {
//       const newWidgets = widgetsData.filter(
//         (widget) =>
//           widget.category === category && selectedWidgets[category][widget.id]
//       );
//       dispatch(replaceWidgets({ category, widgets: newWidgets }));
//     }
//   };

//   useEffect(() => {
//     const uniqueCategories = [
//       ...new Set(selectedWidgetsInfo.map((item) => item.categoryName)),
//     ];

//     console.log("Unique Categories:", uniqueCategories);
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

//   console.log("Filtered Data by Category:", filteredDataByCategory);
//   console.log(selectedWidgetsInfo);
//   // console.log(categories);

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
//               <option value="web-development">Last 2 days</option>
//               <option value="app-development">Last 7 days</option>
//               <option value="seo">Last Week</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {selectedWidgetsInfo.map(([categoryName, widgets]) => (
//         <div key={categoryName} className="category">
//           <h2>{categoryName}</h2>
//           <div
//             className="widget-container"
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               gap: "10px",
//             }}
//           >
//             {widgets.map((widget) => (
//               <div
//                 key={widget.id}
//                 className="widget"
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   width: "30vw",
//                 }}
//               >
//                 <h3>{widget.name}</h3>
//                 <p>{widget.text}</p>
//                 <img
//                   src={widget.image}
//                   alt={widget.name}
//                   style={{ width: "100%", maxWidth: "150px" }}
//                 />
//                 <button
//                   onClick={() => handleRemoveWidget(categoryName, widget.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//       <Card />
//     </div>
//   );
// };

// export default Dashboard;

/////////////

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replaceWidgets, removeWidget } from "../features/widgets/widgetSlice";
import { toggleMenu, closeMenu } from "../features/menu/menuSlice";
import "./dashboard.css";
import widgetsData from "../widgets.json";

import { SlRefresh } from "react-icons/sl";
import { GoClockFill } from "react-icons/go";
import SideMenu from "./SideMenu";
import Card from "./Card";

const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedWidgetsInfo = useSelector(
    (state) => state.category.selectedWidgetsInfo
  );
  const isOpen = useSelector((state) => state.menu.isOpen);
  // const

  const handleRemoveWidget = (category, widgetId) => {
    dispatch(removeWidget({ category, widgetId }));
  };

  const [filteredDataByCategory, setFilteredDataByCategory] = useState([]);
  const [selectedWidgets, setSelectedWidgets] = useState({});

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const handleClose = () => {
    dispatch(closeMenu());
  };

  const handleCheckboxChange = (category, widgetId) => {
    setSelectedWidgets((prevSelected) => ({
      ...prevSelected,
      [category]: {
        ...prevSelected[category],
        [widgetId]: !prevSelected[category]?.[widgetId],
      },
    }));
  };

  const handleAddSelectedWidgets = (category) => {
    if (selectedWidgets[category]) {
      const newWidgets = widgetsData.filter(
        (widget) =>
          widget.category === category && selectedWidgets[category][widget.id]
      );
      dispatch(replaceWidgets({ category, widgets: newWidgets }));
    }
  };

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(selectedWidgetsInfo.map((item) => item.categoryName)),
    ];

    console.log("Unique Categories:", uniqueCategories);
    setFilteredDataByCategory(
      uniqueCategories.map((category) => {
        return {
          categoryName: category,
          items: selectedWidgetsInfo.filter(
            (item) => item.categoryName === category
          ),
        };
      })
    );
  }, [selectedWidgetsInfo]);

  console.log("Filtered Data by Category:", filteredDataByCategory);
  // console.log(categories);

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
              <option value="web-development">Last 2 days</option>
              <option value="app-development">Last 7 days</option>
              <option value="seo">Last Week</option>
            </select>
          </div>
        </div>
      </div>

      {filteredDataByCategory?.map((data, index) => (
        <div key={index} className="category">
          <h2>{data.categoryName}</h2>
          <div
            className="widget-container"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            {data.items?.map((widget) => (
              <>
                {console.log("Widget : ", widget)}
                <div
                  key={widget.id}
                  className="widget"
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    width: "30vw",
                  }}
                >
                  <h3>{widget.widgetName}</h3>
                  <p>{widget.description}</p>
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
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

//////////

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleMenu, closeMenu } from "../features/menu/menuSlice";
// import { replaceWidgets, removeWidget } from "../features/widgets/widgetSlice";
// import "./SideMenu.css";
// import {
//   selectCategory,
//   setWidgetsInfo,
// } from "../features/category/categorySlice";

// const SideMenu = () => {
//   const isOpen = useSelector((state) => state.menu.isOpen);
//   const { xyz, selectedCategoryId } = useSelector((state) => state.category);
//   const dispatch = useDispatch();

//   const [selectedWidgets, setSelectedWidgets] = useState([]);
//   const selectedCategory = xyz.find(
//     (category) => category.id === selectedCategoryId
//   );

//   const handleToggle = () => {
//     dispatch(toggleMenu());
//   };

//   const handleClose = () => {
//     dispatch(closeMenu());
//   };

//   const handleCheckboxChange = (widgetId) => {
//     setSelectedWidgets((prevSelected) => {
//       if (prevSelected.includes(widgetId)) {
//         return prevSelected.filter((id) => id !== widgetId);
//       } else {
//         return [...prevSelected, widgetId];
//       }
//     });
//   };

//   const handleAddSelectedWidgets = () => {
//     let selectedWidgetsInt = selectedWidgets.map(Number);
//     let selectedWidgetsInfo = [];

//     xyz.forEach((category) => {
//       category.widgets?.forEach((widget) => {
//         if (selectedWidgetsInt.includes(Number(widget.id))) {
//           selectedWidgetsInfo.push({
//             categoryName: category.categoryName,
//             widgetId: widget.id,
//             widgetName: widget.widgetName,
//             description: widget.description,
//             image: widget.image,
//           });
//         }
//       });
//     });

//     dispatch(setWidgetsInfo(selectedWidgetsInfo));
//     dispatch(
//       replaceWidgets({
//         category: selectedCategory.categoryName,
//         widgets: selectedWidgetsInfo,
//       })
//     );
//   };

//   const handleRemoveWidget = (widgetId) => {
//     dispatch(
//       removeWidget({ category: selectedCategory.categoryName, widgetId })
//     );
//   };

//   return (
//     <div>
//       <div className={`side-menu ${isOpen ? "open" : ""}`}>
//         <div className="title-sideMenu">
//           <div className="title-sideMenu-div">Add Widgets</div>
//           <button className="title-sideMenu-btn" onClick={handleClose}>
//             &times;
//           </button>
//         </div>
//         <div className="tagline-sideMenu">
//           Personalize your dashboard by adding the following widgets
//         </div>

//         <div className="menu-content">
//           <ul className="category-list">
//             {xyz.map((category) => (
//               <li
//                 key={category.id}
//                 className={`category-item ${
//                   category.id === selectedCategoryId ? "active" : ""
//                 }`}
//               >
//                 <button
//                   onClick={() => dispatch(selectCategory(category.id))}
//                   className="category-button"
//                 >
//                   {category.categoryName}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="menu-section">
//           <ul className="widget-list">
//             {selectedCategory.widgets.map((widget) => (
//               <div key={widget.id} className="checkBox-div">
//                 <input
//                   type="checkbox"
//                   checked={selectedWidgets.includes(widget.id)}
//                   onChange={() => handleCheckboxChange(widget.id)}
//                 />
//                 <label className="label-widget">{widget.widgetName}</label>
//               </div>
//             ))}
//             {isOpen && (
//               <button
//                 className="button sideMenuBtn"
//                 onClick={handleAddSelectedWidgets}
//               >
//                 Submit
//               </button>
//             )}
//             {isOpen && (
//               <button
//                 className="button sideMenuCancelBtn"
//                 onClick={() => setSelectedWidgets([])}
//               >
//                 Cancel
//               </button>
//             )}
//           </ul>
//         </div>
//       </div>

//       {isOpen && <div className="overlay" onClick={handleClose}></div>}
//     </div>
//   );
// };

// export default SideMenu;
