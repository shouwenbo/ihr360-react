export const changeItemAction = 'changeItem';

let changeItem = (selectedTab) => {
  return {
    type: changeItemAction,
    selectedTab
  }
}

export default changeItem;