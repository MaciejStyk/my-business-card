function Info() {
  return (
    <div className="info">
      <div className="info__photo"></div>
      <h1 className="info__name">Maciej Styk</h1>
      <h3 className="info__occupation">Frontend Developer</h3>
      <div className="info__buttons">
        <a
          className="info__btn info__btn--email"
          href="mailto:maciej.styk@gmail.com"
        >
          <i className="fa-solid fa-envelope"></i>
          Email
        </a>
        <a
          className="info__btn info__btn--linkedin"
          href="https://www.linkedin.com/in/maciej-styk-10a4ba94/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Info;
