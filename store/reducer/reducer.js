const initialState = {
      setCount: 4,
};

const reducer = (state = initialState, action) => {
      if (action.type === 'SET_SETCOUNT') {
            return {
                  ...state,
                  setCount: action.value,
            };
      }
      return state;
};

export default reducer;
