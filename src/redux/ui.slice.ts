import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ProductType {
  id: string;
  name: string;
  price: number;
  details: string;
}

export interface UiSliceStateType {
  isCartPeekBoxVisible: boolean;
  products: ProductType[];
  areProductsLoading: boolean;
}

const initialState: UiSliceStateType = {
  isCartPeekBoxVisible: false,
  products: [],
  areProductsLoading: true,
};

const getProducts = createAsyncThunk("ui/getProducts", async () => {
  const products = [
    {
      id: "1",
      name: "Product-1",
      details: "Some amazing detail about product 1.",
      price: 6,
    },
    {
      id: "2",
      name: "Product-2",
      details: "Some amazing detail about product 2.",
      price: 12.99,
    },
  ];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return products;
});

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCartPeekBoxVisibility: (state) => {
      state.isCartPeekBoxVisible = !state.isCartPeekBoxVisible;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload: products }) => {
      state.areProductsLoading = false;
      state.products.push(...products);
    });
  },
});

export default uiSlice;
export const uiActions = { ...uiSlice.actions, getProducts };
