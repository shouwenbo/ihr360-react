let dataList = [
  {
    title: '事假',
    name: '小李'
  },
  {
    title: '病假',
    name: '小王'
  },
  {
    title: '产假',
    name: '小张'
  },
  {
    title: '放假',
    name: '小赵'
  },
  {
    title: '日假',
    name: '小钱'
  },
  {
    title: '年假',
    name: '小孙'
  },
  {
    title: '月假',
    name: '小周'
  },
  {
    title: '陪产假',
    name: '小吴'
  },
  {
    title: '丧假',
    name: '小郑'
  },
  {
    title: '度假',
    name: '小甘'
  },
  {
    title: '好假',
    name: '小鲁'
  },
  {
    title: '坏假',
    name: '小夏'
  },
  {
    title: '电脑假',
    name: '小刘'
  },
  {
    title: '手机假',
    name: '小董'
  },
  {
    title: '急诊假',
    name: '小肖'
  },
  {
    title: '急假',
    name: '小黄'
  },
  {
    title: '水假',
    name: '小陈'
  },
  {
    title: '花假',
    name: '小马'
  }
]

let getNextDatas = (pageIndex, pageSize) => {
  let nextDatas = [];
  for (let i = 0; i < pageSize; i++) {
    const ii = (pageIndex * pageSize) + i;
    if (dataList[ii] != null) {
      nextDatas.push(dataList[ii]);
    }
  }
  return nextDatas;
}

export default function todoList(state = {
    todo: {
      hasMore: true,
      pageIndex: 0,
      pageSize: 6,
      nextDatas: [],
      isReload: false,
      isLoading: true
    }
  } , action) {
  let todo = state.todo;
  switch (action.type) {
    case 'next':
      var nextDatas = getNextDatas(todo.pageIndex, todo.pageSize);
      return {
        todo: {
          nextDatas: nextDatas,
          pageIndex: todo.pageIndex + 1,
          pageSize: todo.pageSize,
          hasMore: nextDatas.length > 0,
          isReload: false,
          isLoading: false
        }
      }
    case 'reload':
      var reloadDatas = getNextDatas(0, todo.pageSize);
      return {
        todo: {
          nextDatas: reloadDatas,
          pageIndex: 1,
          pageSize: todo.pageSize,
          hasMore: reloadDatas.length > 0,
          isReload: true,
          isLoading: false
        }
      }
    default:
      return state;
  }
}