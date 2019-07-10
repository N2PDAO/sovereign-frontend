const defaultState = {
    ID: "identity"
};

const types = {
    TABBAR: 'TABBAR',
};

const creators = {
    tabbar: (ID) => {
        return {
            type: types.TABBAR,
            payload: {
                value: ID
            }
        }
    }
};

export { types, creators };
export default function player(state = defaultState, action) {
  switch (action.type) {
    case types.TABBAR:
        return {
            ...state,
            ID: action.payload.value
        }
    default:
      return state;
  }
}
