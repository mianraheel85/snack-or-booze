import React, { useState, useEffect } from "react";
import "./App.css";
import SnackOrBoozeApi from "./Api";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function AddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [itemType, setItemType] = useState("drinks");
  const [recipe, setRecipe] = useState("");
  const [serve, setServe] = useState("");

  const handleFormSubmit = (event) => {
    let data = { name, description, recipe, serve };
    if (itemType === "drinks") {
      const result = SnackOrBoozeApi.postDrinks(data);
    } else if (itemType === "snacks") {
      const result = SnackOrBoozeApi.postSnacks(data);
    }
    alert("data Inserted");
  };
  console.log(SnackOrBoozeApi);
  return (
    <>
      <section>
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              Add Item
            </CardTitle>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="name">Name</label>
              <div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <label htmlFor="description">Description</label>
              <div>
                <textarea
                  id="description"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                >
                  {description}
                </textarea>
              </div>
              <div>
                <label htmlFor="type">Food Type</label>
                <div>
                  <select
                    name="type"
                    onChange={(event) => {
                      setItemType(event.target.value);
                    }}
                  >
                    <option value="drinks">Drinks</option>
                    <option value="snacks">Snacks</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="recipe">Recipe</label>
                <div>
                  <textarea
                    id="recipe"
                    onChange={(event) => {
                      setRecipe(event.target.value);
                    }}
                  >
                    {recipe}
                  </textarea>
                </div>
              </div>
              <div>
                <label htmlFor="serve">Serve</label>
                <div>
                  <textarea
                    id="serve"
                    onChange={(event) => {
                      setServe(event.target.value);
                    }}
                  >
                    {serve}
                  </textarea>
                </div>
              </div>
              <div>
                <input type="submit" value="submit" />
              </div>
            </form>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
export default AddItem;
