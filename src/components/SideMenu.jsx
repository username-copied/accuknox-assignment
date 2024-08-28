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

//   // const handleCheckboxChange = (widgetId) => {
//   //   setSelectedWidgets((prevSelected) => {
//   //     if (prevSelected.includes(widgetId)) {
//   //       return prevSelected.filter((id) => id !== widgetId);
//   //     } else {
//   //       return [...prevSelected, widgetId];
//   //     }
//   //   });
//   // };

//   const handleCheckboxChange = (widgetId) => {
//     setSelectedWidgets((prevSelected) => {
//       // If the widget is already selected, remove it
//       if (prevSelected.includes(widgetId)) {
//         return prevSelected.filter((id) => id !== widgetId);
//       } else {
//         // Otherwise, add the new widget to the previously selected ones
//         return [...prevSelected, widgetId];
//       }
//     });
//   };

//   const handleAddSelectedWidgets = () => {
//     const selectedWidgetsInt = selectedWidgets.map(Number);
//     const selectedWidgetsInfo = [];
//     const tempArr = [];

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
//           tempArr.push(widget);
//         }
//       });
//     });

//     dispatch(setWidgetsInfo(selectedWidgetsInfo));
//     dispatch(
//       replaceWidgets({
//         category: selectedCategory.categoryName,
//         widgets: tempArr,
//       })
//     );

//     setSelectedWidgets([]);
//     dispatch(closeMenu());
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
//             {selectedCategory?.widgets.map((widget) => (
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

// import React, { useState, useEffect } from "react";
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
//   const existingWidgets = useSelector((state) => state.widgets);

//   const dispatch = useDispatch();

//   const [selectedWidgets, setSelectedWidgets] = useState([]);
//   const selectedCategory = xyz.find(
//     (category) => category.id === selectedCategoryId
//   );

//   useEffect(() => {
//     if (selectedCategory) {
//       const existingWidgetsForCategory =
//         existingWidgets[selectedCategory.categoryName] || [];
//       setSelectedWidgets(
//         existingWidgetsForCategory.map((widget) => widget.id.toString())
//       );
//     }
//   }, [selectedCategory, existingWidgets]);

//   const handleToggle = () => {
//     dispatch(toggleMenu());
//   };

//   const handleClose = () => {
//     dispatch(closeMenu());
//   };

//   const handleCheckboxChange = (widgetId) => {
//     console.log("HI");

//     setSelectedWidgets((prevSelected) => {
//       console.log("hi");

//       if (prevSelected.includes(widgetId)) {
//         console.log("HIIII");
//         return prevSelected.filter((id) => id !== widgetId);
//       } else {
//         console.log([...prevSelected, widgetId]);
//         return [...prevSelected, widgetId];
//       }
//     });
//   };

//   const handleAddSelectedWidgets = () => {
//     const selectedWidgetsInt = selectedWidgets.map(Number);
//     const selectedWidgetsInfo = [];
//     const widgetsToAdd = [];

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
//           widgetsToAdd.push(widget);
//         }
//       });
//     });

//     dispatch(setWidgetsInfo(selectedWidgetsInfo));
//     dispatch(
//       replaceWidgets({
//         category: selectedCategory.categoryName,
//         widgets: widgetsToAdd,
//       })
//     );

//     dispatch(closeMenu());
//   };

//   const handleRemoveWidget = (widgetId) => {
//     dispatch(
//       removeWidget({ category: selectedCategory.categoryName, widgetId })
//     );
//     setSelectedWidgets((prevSelected) =>
//       prevSelected.filter((id) => id !== widgetId.toString())
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
//             {selectedCategory?.widgets.map((widget) => (
//               <div key={widget.id} className="checkBox-div">
//                 <input
//                   type="checkbox"
//                   checked={selectedWidgets.includes(widget.id.toString())}
//                   onChange={() => handleCheckboxChange(widget.id.toString())}
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

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu, closeMenu } from "../features/menu/menuSlice";
import { addWidgets, removeWidget } from "../features/widgets/widgetSlice";
import "./SideMenu.css";
import {
  selectCategory,
  setWidgetsInfo,
} from "../features/category/categorySlice";

const SideMenu = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const { xyz, selectedCategoryId } = useSelector((state) => state.category);
  const existingWidgets = useSelector((state) => state.widgets);

  const dispatch = useDispatch();

  const [selectedWidgetsByCategory, setSelectedWidgetsByCategory] = useState(
    {}
  );
  const selectedCategory = xyz.find(
    (category) => category.id === selectedCategoryId
  );

  useEffect(() => {
    const initialSelectedWidgets = {};
    xyz.forEach((category) => {
      const existingWidgetsForCategory =
        existingWidgets[category.categoryName] || [];
      initialSelectedWidgets[category.id] = existingWidgetsForCategory.map(
        (widget) => widget.id.toString()
      );
    });
    setSelectedWidgetsByCategory(initialSelectedWidgets);
  }, [xyz, existingWidgets]);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const handleClose = () => {
    dispatch(closeMenu());
  };

  const handleCheckboxChange = (categoryId, widgetId) => {
    setSelectedWidgetsByCategory((prevSelected) => {
      const categoryWidgets = prevSelected[categoryId] || [];
      if (categoryWidgets.includes(widgetId)) {
        return {
          ...prevSelected,
          [categoryId]: categoryWidgets.filter((id) => id !== widgetId),
        };
      } else {
        // console.log([...prevSelected, widgetId]);

        return {
          ...prevSelected,
          [categoryId]: [...categoryWidgets, widgetId],
        };
      }
    });
  };

  const handleAddSelectedWidgets = () => {
    if (!selectedCategory) return;

    const selectedWidgetsInt =
      selectedWidgetsByCategory[selectedCategory.id].map(Number);
    const selectedWidgetsInfo = [];
    const widgetsToAdd = [];

    selectedCategory.widgets?.forEach((widget) => {
      if (selectedWidgetsInt.includes(Number(widget.id))) {
        selectedWidgetsInfo.push({
          categoryName: selectedCategory.categoryName,
          widgetId: widget.id,
          widgetName: widget.widgetName,
          description: widget.description,
          image: widget.image,
        });
        widgetsToAdd.push(widget);
      }
    });

    dispatch(setWidgetsInfo(selectedWidgetsInfo));
    dispatch(
      addWidgets({
        category: selectedCategory.categoryName,
        widgets: widgetsToAdd,
      })
    );

    dispatch(closeMenu());
  };

  const handleRemoveWidget = (widgetId) => {
    if (!selectedCategory) return;

    dispatch(
      removeWidget({ category: selectedCategory.categoryName, widgetId })
    );
    setSelectedWidgetsByCategory((prevSelected) => ({
      ...prevSelected,
      [selectedCategory.id]: prevSelected[selectedCategory.id].filter(
        (id) => id !== widgetId.toString()
      ),
    }));
  };

  return (
    <div>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className="title-sideMenu">
          <div className="title-sideMenu-div">Add Widgets</div>
          <button className="title-sideMenu-btn" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="tagline-sideMenu">
          Personalize your dashboard by adding the following widgets
        </div>

        <div className="menu-content">
          <ul className="category-list">
            {xyz.map((category) => (
              <li
                key={category.id}
                className={`category-item ${
                  category.id === selectedCategoryId ? "active" : ""
                }`}
              >
                <button
                  onClick={() => dispatch(selectCategory(category.id))}
                  className="category-button"
                >
                  {category.categoryName}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-section">
          <ul className="widget-list">
            {selectedCategory?.widgets.map((widget) => (
              <div key={widget.id} className="checkBox-div">
                <input
                  type="checkbox"
                  checked={(
                    selectedWidgetsByCategory[selectedCategory.id] || []
                  ).includes(widget.id.toString())}
                  onChange={() =>
                    handleCheckboxChange(
                      selectedCategory.id,
                      widget.id.toString()
                    )
                  }
                />
                <label className="label-widget">{widget.widgetName}</label>
              </div>
            ))}
            {isOpen && (
              <button
                className="button sideMenuBtn"
                onClick={handleAddSelectedWidgets}
              >
                Submit
              </button>
            )}
            {isOpen && (
              <button
                className="button sideMenuCancelBtn"
                onClick={() =>
                  setSelectedWidgetsByCategory((prevSelected) => ({
                    ...prevSelected,
                    [selectedCategory.id]: [],
                  }))
                }
              >
                Cancel
              </button>
            )}
          </ul>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={handleClose}></div>}
    </div>
  );
};

export default SideMenu;
