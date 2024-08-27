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
  console.log(selectedWidgetsInfo);
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

      {selectedWidgetsInfo.map(([categoryName, widgets]) => (
        <div key={categoryName} className="category">
          <h2>{categoryName}</h2>
          <div
            className="widget-container"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            {widgets.map((widget) => (
              <div
                key={widget.id}
                className="widget"
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "30vw",
                }}
              >
                <h3>{widget.name}</h3>
                <p>{widget.text}</p>
                <img
                  src={widget.image}
                  alt={widget.name}
                  style={{ width: "100%", maxWidth: "150px" }}
                />
                <button
                  onClick={() => handleRemoveWidget(categoryName, widget.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Card />
    </div>
  );
};

export default Dashboard;
