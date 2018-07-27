let initialState = {
	title: '测试标题',
	list: [
	'这是测试数据一',
	'这是测试数据二'
	]
}

let actor = (state = initialState, action) => {
	switch(action.type){
		case 'ADD':
		state.list =  [...state.list, action.value];
		return Object.assign({}, state);
		break;
		case 'DEL':
		state.list.splice(action.key, 1);
		return Object.assign({}, state);
		break;
		default:
		return state;
		break;
	}
}

export default actor;