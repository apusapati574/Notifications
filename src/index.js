/* eslint-disable no-undef */
const Notifications = (props) => {
  const {className, notificationText, image} = props;
  return (
    <li className={`${className}`}>
      <img src={`${image}`} alt="image" />
      <p>{notificationText}</p>
    </li>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <ul>
      <Notifications 
        className="info-msg" 
        image= "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notificationText="Information Message" />
      <Notifications className="success-msg"
        image = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        notificationText="Success Message" />
      <Notifications className="warning-msg" 
      image = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      notificationText="Warning Message" />
      <Notifications className="error-msg"
      image = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      notificationText="Error Message" />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));