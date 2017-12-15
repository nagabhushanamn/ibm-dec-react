

// // way-1 pure javascript ( without JSX )

// class HelloWorld extends React.Component {
//     render() {
//         let h1Ele = React.createElement('h1', null, 'Hello World');
//         let boxEle = React.createElement('div', { className: 'well' }, h1Ele);
//         return boxEle;
//     }
// }
//let helloWorld = React.createElement(HelloWorld, null, null);

//-----------------------------------------------------------

// // way-2 ( with JSX )

class HelloWorld extends React.Component{
    render(){
        let ele=(
            <div className="well">
                <h1> Hello World </h1>
            </div>
        );
        return ele;
    }
}

let helloWorld = <HelloWorld />

//-----------------------------------------------------------

ReactDOM.render(helloWorld, document.getElementById('root'))