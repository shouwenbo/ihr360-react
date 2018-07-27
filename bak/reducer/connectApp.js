import { connect } from 'react-redux'
import App from '../component/App'
import Action from '../action/action'

let mapStateToProps = (state) => ({
	actor: (state.actor)
})

let mapDispatchToProps = (dispatch, ownsProp) => ({
	add: (value) => dispatch({type: Action.ADD, value}),
	del: (key) => dispatch({type: Action.DEL, key})
})

let Apps = connect(mapStateToProps, mapDispatchToProps)(App)

export default Apps;