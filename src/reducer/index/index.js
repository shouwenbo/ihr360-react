export default function indexReducer(state = {
    index: {
      selectedTab: 'homeTab'
    }
  }, action) {
  switch (action.type) {
    case 'changeItem':
      return {
        index: {
          selectedTab: action.selectedTab
        }
      }
    default:
      return state;
  }
}