import './User.css';

function User({ name, phrase, email, website }) {
  //   console.log(props);
  return (
    <>
      {/* <h1>{props.value}</h1> */}
      <div className="container">
        <div className="card">
          <div className="pic-container">
            <img
              className="pic"
              src="https://i.ibb.co/sJKD14w/pro-pic.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="name">
            <span>{name}</span>
          </div>
          <div className="title">
            <span> {email} </span>
          </div>
          <div className="description">
            <p> {phrase} </p>
          </div>
          <div className="message">
            <a href={website}>Message</a>
          </div>
          <div className="links">
            <a href={website} target="_blank" className="fb">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href={website} target="_blank" className="yt">
              <i className="fab fa-youtube"></i>
            </a>
            <a href={website} target="_blank" className="cp">
              <i className="fab fa-codepen"></i>
            </a>
            <a href={website} target="_blank" className="bg">
              <i className="fab fa-blogger-b"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
