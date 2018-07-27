import React, { Component } from 'react';
import { Flex,  List,  ListView,} from 'antd-mobile';

export default class extends Component {
	constructor(props) {
		super(props);
		const d_dataSource = new ListView.DataSource({
			// 决定什么情况行数据才发生改变，当行数据发生改变，就会绘制下一行
			rowHasChanged: (row1, row2) => row1 !== row2
		});
		this.state = {
			d_dataSource,
		};
	}
	componentDidMount() {
		const newData = [
			{name:'1',age:21},
			{name:'2',age:22},
			{name:'3',age:23},
			{name:'4',age:54},
			{name:'5',age:26},
			{name:'6',age:27},
			{name:'7',age:28},
		]
		setTimeout(() => {
			this.setState({
				d_dataSource: this.state.d_dataSource.cloneWithRows(newData),
			})
		}, 600);
	}
	
	render() {
		const row = (rowData, sectionID, rowID) => {
			console.log(rowData)
			return (
				<div>
					{rowData.name}
				</div>
			);
		};
		return(
			<ListView
						ref={(el) => (this.lv = el)}
						dataSource={this.state.d_dataSource}
						renderFooter={() => (
							<div style={{ padding: 20, textAlign: 'center' }}>
								{this.state.isLoading ? '正在加载...' : '加载完毕'}
							</div>
						)}
						style={{
							height: this.state.height,
							minHeight:'25rem',
							overflow: 'auto'
						}}
						renderRow={row}
						onEndReached={this.onEndReached}
						pageSize={4}
						scrollRenderAheadDistance={500}
						onEndReachedThreshold={10}
					/>
		)
	}
	
}