import {
  GET_NV,
  ADD_NV,
  DELETE_NV,
  UPDATE_NV,
} from "./constants/quanLyNhanVienConstant";

const initialState = {
  data: [],
};

export let quanLyNhanVienReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_NV: {
      state.data = payload;
      return { ...state };
    }
    case ADD_NV: {
      let cloneArr = [...state.data];
      cloneArr.push(payload);
      state.data = cloneArr;
      return { ...state };
    }
    case UPDATE_NV: {
      state.data = payload;
      return { ...state };
    }
    case DELETE_NV: {
      let id = payload;
      let cloneArr = [...state.data];
      let index = cloneArr.findIndex((nv) => {
        return nv.id == id;
      });
      index !== -1 && cloneArr.splice(index, 1);
      state.data = cloneArr;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
