import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu, closeMenu } from "../features/menu/menuSlice";
import { replaceWidgets, removeWidget } from "../features/widgets/widgetSlice";
import widgetsData from "../widgets.json";
import "./SideMenu.css";
import { selectCategory } from "../features/category/categorySlice";

const SideMenu = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const { xyz, selectedCategoryId } = useSelector((state) => state.category);
  const state = useSelector((state) => state.category);
  console.log(state);
  console.log(xyz);

  const dispatch = useDispatch();

  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const selectedCategory = xyz.find(
    (category) => category.id === selectedCategoryId
  );

  console.log(selectedCategory);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const handleClose = () => {
    dispatch(closeMenu());
  };

  // const handleCheckboxChange = (xyz, widgetId) => {
  //   setSelectedWidgets((prevSelected) => ([
  //     ...prevSelected,
  //     [xyz]: {
  //       ...prevSelected[xyz],
  //       [widgetId]: !prevSelected[xyz]?.[widgetId],
  //     },
  //   ]));
  // };

  const handleCheckboxChange = (xyz, widgetId) => {
    setSelectedWidgets((prevSelected) => {
      const newSelectedWidgets = [...prevSelected];
      newSelectedWidgets.push(widgetId);
      // Ensure the object at index `xyz` exists
      // newSelectedWidgets[xyz] = {
      //   ...newSelectedWidgets[xyz],
      //   [widgetId]: !newSelectedWidgets[xyz]?.[widgetId],
      // };

      return newSelectedWidgets;
    });
  };

  console.log(selectedWidgets);

  const handleAddSelectedWidgets = () => {
    console.log("Hiii");
    console.log(xyz);
    // if (selectedWidgets[xyz]) {
    //   const newWidgets = widgetsData.filter(
    //     (widget) => widget.xyz === xyz && selectedWidgets[xyz][widget.id]
    //   );
    //   dispatch(replaceWidgets({ xyz, widgets: newWidgets }));
    // }
    let tempArr = [];
    xyz.map((widget) => {
      // console.log(widget.widgets);

      widget.widgets.map((tmp) => {
        let tempId = tmp.id;
        console.log(tmp.id);
        console.log(selectedWidgets);

        //   if (selectedWidgets[parseInt(tempId)] == true) {
        //     tempArr.push(tmp);
        //   }
        if (selectedWidgets.includes(tmp.id.toString())) {
          tempArr.push(tmp);
        }
      });
    });
    console.log(tempArr);
    dispatch(replaceWidgets({ category: "xyz", widgets: tempArr }));
  };

  const handleRemoveWidget = (xyz, widgetId) => {
    dispatch(removeWidget({ xyz, widgetId }));
  };

  return (
    <div>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-content">
          {/* {widgetsData
            .reduce((categories, widget) => {
              if (!categories.includes(widget.category)) {
                categories.push(widget.category);
              }
              return categories;
            }, [])
            .map((categoryName) => (
              <div key={categoryName} className="category-selection">
                <div className="text-3xl text-red">{categoryName}</div>
                {widgetsData
                  .filter((widget) => widget.category === categoryName)
                  .map((widget) => (
                    <div key={widget.id} className="widget-selection">
                      <input
                        type="checkbox"
                        checked={
                          selectedWidgets[categoryName]?.[widget.id] || false
                        }
                        onChange={() =>
                          handleCheckboxChange(categoryName, widget.id)
                        }
                      />
                      <label>{widget.name}</label>
                    </div>
                  ))}
                <button
                  className="button"
                  onClick={() => handleAddSelectedWidgets(categoryName)}
                >
                  Submit
                </button>
              </div>
            ))} */}

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
          <h3>{selectedCategory.categoryName} Widgets</h3>
          <ul className="widget-list">
            {selectedCategory.widgets.map((widget) => (
              // <li key={widget.id}>{widget.widgetName}</li>
              <div>
                <input
                  type="checkbox"
                  checked={selectedWidgets.includes(widget.id)}
                  onChange={() => handleCheckboxChange(xyz, widget.id)}
                />
                <label className="label-widget">{widget.widgetName}</label>
              </div>
            ))}
            <button
              className="button"
              onClick={() => handleAddSelectedWidgets(selectedCategory)}
            >
              Submit
            </button>
          </ul>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={handleClose}></div>}
      {isOpen && (
        <button className="close-btn button" onClick={handleClose}>
          Close
        </button>
      )}
    </div>
  );
};

export default SideMenu;
