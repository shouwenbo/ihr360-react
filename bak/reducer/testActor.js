let testInit = {
	test: '这是测试的数据'
}
let testActor = (state = testInit, action) => {
	return state;
}

export default testActor;