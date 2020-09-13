// import React from "react";
// import ReactDOM from "react-dom";
import React from "./myreact";
import ReactDOM from "./myreact/ReactDOM";
import Component from "./myreact/Component";
import "./index.css";

// 函数组件 场景
function FunctionComponent({ name }) {
	return (
		<div className="border function">
			hello, {name}
			<button onClick={() => console.log("FunctionComponent被点击")}>
				click
			</button>
		</div>
	);
}

// class组件场景
class ClassComponent extends Component {
	static defaultProps = {
		color: "pink",
	};
	render() {
		const { name, color } = this.props;
		return (
			<div className="border function">
				hello, {name}
				<button onClick={() => console.log("ClassComponent被点击")}>
					click
				</button>
				<p className={color}>defaultProps</p>
			</div>
		);
	}
}

const jsx = (
	<div className="border">
		<p> 手写react了 </p>
		<FunctionComponent name="function" />
		<ClassComponent name="class" />
		<>
			<h5> 文本1 </h5> <h5> 文本2 </h5>
		</>
		{[1, 2, 3].map((item) => {
			return (
				<div className="border" key={item}>
					<p> {item} </p>
					<p>React.Fragment和空标签是有区别的,比如遍历时候给key值的场景</p>
				</div>
			);
		})}
	</div>
);

// element， container
// vnode->node , 把node渲染更新到container
ReactDOM.render(jsx, document.getElementById("root"));

// !节点类型
// 文本节点
// html标签节点
// class componet
// function component
// fragment

// jsx=>createElement(生成element，就是我们需要的虚拟dom)=>render(vnode->node, 再把node渲染到container)
// vnode->node的流程注意下节点的区分，不同节点处理方式不同
