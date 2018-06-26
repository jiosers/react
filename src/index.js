const React=require('react');//导入react
const ReactDom=require("react-dom");//导入react-dom
class List extends React.Component{
	constructor(props){
		super(props);
	};
	render(){
		return <ul>
			<li>11111111111111111</li>
			<li>22222222222222222</li>
			<li>333333333333333</li>
			<li>4444444444444444</li>
			<li>55555555fdaf5555</li>
		</ul>
	}
}
ReactDom.render(<List/>,document.body);

