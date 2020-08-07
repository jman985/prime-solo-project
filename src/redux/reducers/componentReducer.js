const componentReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_COMPONENT':
        return action.payload;
      case 'UNSET_COMPONENT':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default componentReducer;