const React=require("react");//导入react
const ReactDom=require("react-dom");
import Li from "./Li"
class List extends React.Component{
	constructor(props){
		supper(props)
	}
	render(){
		return <ul>
			<Li title="你好" head="我不知道"></Li>
			<Li title="你好1" head="我不知道2"></Li>
			<Li title="你好2" head="我不知道2"></Li>
		<ul>
	}
}
ReactDom.render(<List></List>,document.body)
