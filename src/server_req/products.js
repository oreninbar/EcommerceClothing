import axios from "axios";

const getProduct = async (id) => {
  try {
    let result = await axios.get(`http://localhost:8080/product/${id}`);
    if (result) return result.data;
    else return null;
  } catch (error) {
    console.log(error);
  }
};

const saveProduct = (product) => {
  try {
    let result = axios.post("http://localhost:8080/save_product", product);
    if (result) console.log("save product");
    else console.log("didnt save product");
  } catch (error) {
    console.log(error);
  }
};

export { getProduct };
export { saveProduct };
