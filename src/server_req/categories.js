import axios from "axios";

const getCategories = async () => {
  try {
    let result = await axios.get(`http://localhost:8080/get_categories`);
    if (result) return result.data;
    else return null;
  } catch (error) {
    console.log(error);
  }
};

const saveCategory = (category) => {
  try {
    let result = axios.post("http://localhost:8080/add_category", category);
    if (result) console.log("savecategory");
    else console.log("didnt save category");
  } catch (error) {
    console.log(error);
  }
};

export { getCategories };
export { saveCategory };
