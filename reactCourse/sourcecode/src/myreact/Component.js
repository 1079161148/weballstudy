export default class Component {
	static isReactComponent = {}; // 是否是class组件还是function组件
	constructor(props) {
		this.props = props;
	}
	// render() {
	//   return "ooo";
	// }
}

// 源码里面挂到 Component.prototype
// export default function Component(props) {
//   this.props = props;

// }

// Component.prototype.isReactComponent = {};
