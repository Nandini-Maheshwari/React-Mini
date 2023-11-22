function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  
  for(const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]); 
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click to visit google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);


// React Rendor Method

// const anotherElement = {
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// }

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com', target: '_blank'},
//   'Click me to Visit google'
// )