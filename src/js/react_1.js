// /*
//  * @Author: tangdaoyong
//  * @Date: 2020-11-23 21:53:40
//  * @LastEditors: tangdaoyong
//  * @LastEditTime: 2020-11-23 21:55:21
//  * @Description: file content
//  */
// 'use strict';

// const element = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const domNode = document.querySelector('#like_button_container');
// ReactDOM.render(element(LikeButton), domNode);