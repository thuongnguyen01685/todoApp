import callApi from "../../untils/callApi";
import { getProductDetail, getProducts } from "../reducers/product.reducer";

export const getProductAction = (page, title) => async (dispatch) => {
  try {
    const res = await callApi(
      `products/search?q=${title}&limit=10&skip=${page}`,
      "GET",
      "",
      {
        "X-Authorization": "",
      }
    );
    if (res.data) {
      dispatch(
        getProducts({
          products: res.data.products,
          total: res.data.total,
        })
      );
    }
  } catch (err) {
    console.log(err);
  }
};

export const getProductDetailAction = (id) => async (dispatch) => {
  try {
    const res = await callApi(`products/${id}`, "GET", "", {
      "X-Authorization": "",
    });
    if (res.data) {
      dispatch(
        getProductDetail({
          productDetail: res.data,
        })
      );
    }
  } catch (err) {
    console.log(err);
  }
};
export const postProductAction = (title) => {
  const add = async (dispatch) => {
    try {
      const res1 = await callApi(`products/add`, "POST", {
        title: title,
      });
      return res1.data;
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};
