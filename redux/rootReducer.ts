const initialState = {
  greeting: 'hello',

};
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default rootReducer;
