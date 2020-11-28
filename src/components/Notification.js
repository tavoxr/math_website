import React from 'react';
import notifiLogo from '../images/notifi-logo.png';
import './styles/Notification.css';

class Notification extends React.Component{

    render(){
        return(
                <div className="noti-container">
                    <div className="noti-body">
                        <h3>Desafio de Curso</h3>
                        <p>Pon a prueba  tu conocimiento de las habilidades de este curso</p>
                    </div>
                    <div className="noti-logo-container">
                        <img src={notifiLogo} alt="notification-logo" className="noti-logo"/>
                    </div>
                </div>


        );
    }

}


export default Notification;