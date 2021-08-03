import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "./ui.slice";

export interface ProductInCartType extends ProductType {
  quantity?: number;
}

export interface CartSliceStateType {
  productsById: { [id: string]: ProductInCartType };
  productsId: string[];
}

const initialState: CartSliceStateType = {
  productsById: {},
  productsId: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductInCartType>) => {
      const product: ProductInCartType = { ...action.payload };
      if (state.productsById[product.id]) {
        state.productsById[product.id].quantity += 1;
      } else {
        product.quantity = 1;
        state.productsById[product.id] = product;
        state.productsId.push(product.id);
      }
    },
    addProductQuantity: (state, action: PayloadAction<string>) => {
      const { payload: productId } = action;
      if (state.productsById[productId]) {
        state.productsById[productId].quantity += 1;
      }
    },
    substractProductQuantity: (state, action: PayloadAction<string>) => {
      const { payload: productId } = action;
      if (state.productsById[productId]) {
        state.productsById[productId].quantity -= 1;
        if (state.productsById[productId].quantity === 0) {
          delete state.productsById[productId];
          removeProductId(state, action);
        }
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      const { payload: productId } = action;
      if (state.productsById[productId]) {
        delete state.productsById[productId];
        removeProductId(state, action);
      }
    },
  },
});

const removeProductId = (
  state: CartSliceStateType,
  action: PayloadAction<string>
) => {
  const index = state.productsId.findIndex(
    (productId) => productId === action.payload
  );
  state.productsId.splice(index, 1);
};

export const cartActions = { ...cartSlice.actions };

export default cartSlice;
