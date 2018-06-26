const React=require("react");
const ReactDom=require("react-dom")

import Li from '.li'
class List extends React.Component{
	constructor(props){
		supper(props)
	}
	render(){
		const articles=this.props.articles;
		let li=articles.map(article=>{
			<Li title={article.title} header={article.header}></Li>
		})
		return <ul>
			{li}
		</ul>
	}
}
const articles=[
	{title:'你好1',header:'我不知道1'},
	{title:'你好2',header:'我不知道2'},
	{title:'你好3',header:'我不知道3'}
]
ReactDom.render(<List articles={articles}></List>,document.body)
