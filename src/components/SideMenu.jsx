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

  const handleCheckboxChange = (xyz, widgetId) => {
    setSelectedWidgets((prevSelected) => {
      const newSelectedWidgets = [...prevSelected];
      newSelectedWidgets.push(widgetId);
      return newSelectedWidgets;
    });
  };

  const handleCancelCheckboxChange = () => {
    setSelectedWidgets = [];
  };

  console.log(selectedWidgets);
  let selectedWidgetsInt = selectedWidgets.map(Number);
  let selectedWidgetsInfo = [];
  xyz.forEach((category) => {
    category.widgets?.forEach((widget) => {
      if (selectedWidgetsInt.includes(Number(widget.id))) {
        selectedWidgetsInfo.push({
          categoryName: category.categoryName,
          widgetId: widget.id,
          widgetName: widget.widgetName,
          description: widget.description,
          image: widget.image,
        });
      }
    });
  });

  console.log(selectedWidgetsInfo);

  const handleAddSelectedWidgets = () => {
    console.log("Hiii");
    console.log(xyz);
    let tempArr = [];
    xyz.map((widget) => {
      widget.widgets.map((tmp) => {
        let tempId = tmp.id;
        console.log(tmp.id);
        console.log(selectedWidgets);
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
        <div className="title-sideMenu">
          <div className="title-sideMenu-div">Add Widgets</div>
          <button className="title-sideMenu-btn" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="tagline-sideMenu">
          Personalise your dashboard by adding the following widgets
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
            {selectedCategory.widgets.map((widget) => (
              <div className="checkBox-div">
                <input
                  type="checkbox"
                  checked={selectedWidgets.includes(widget.id)}
                  onChange={() => handleCheckboxChange(xyz, widget.id)}
                />
                <label className="label-widget">{widget.widgetName}</label>
              </div>
            ))}
            {isOpen && (
              <button
                className="button sideMenuBtn"
                onClick={() => handleAddSelectedWidgets(selectedCategory)}
              >
                Submit
              </button>
            )}
            {isOpen && (
              <button
                className="button sideMenuCancelBtn"
                onClick={handleCancelCheckboxChange}
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
