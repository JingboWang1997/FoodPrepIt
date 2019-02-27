import React from 'react';
// import fpiButton from '../components/fpibutton_component';
// import fpiTextbox from '../components/fpibutton_component';
// import fpiTitle from '../components/fpibutton_component';

//FPIButton
//FPITextBox
//FPITitle

export default class LoginView extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const divStyle = {
          position: 'absolute', 
          top: '30%', 
          left: '45%', 
        };

        return (
            // <FPITitle text='Login'/>
            // <FPTTextbox/>
            // <FPTButton text='register'/>
            // <FPTButton text='login'/>

            <div style={divStyle}>
                <h1> Login </h1>
                <input/><br/>
                <input/><br/>
                <button>1</button>
                <button>2</button>
            </div>
        );
    }




}