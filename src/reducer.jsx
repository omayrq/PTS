export const reducer = (state, action) => {
    if (action.type === 'HOME_UPDATE') {
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
        tagline: action.payload.tagline,
        content: action.payload.content,
        missionH: null,
        mission: null,
      };
    }
    if (action.type === 'ABOUT_UPDATE') {
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
        tagline: action.payload.tagline,
        content: action.payload.content,
        missionH: action.payload.missionH,
        mission: action.payload.mission,
      };
    }
    if (action.type === 'CLEAR_MISSION') {
      return {
        ...state,
        missionH: null,
        mission: null,
      };
    }
    return state;
  };
  

export default reducer;