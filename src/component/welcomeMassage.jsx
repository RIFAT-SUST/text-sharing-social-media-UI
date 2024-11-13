const WelcomeMassage = ({onGetPostsClick}) => {
  return (
    <body className="d-flex h-100 text-center text-dark bg-white">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3">
          <h1>There are no posts availabe.</h1>
          <button type="button" className="btn btn-info button"
          onClick ={onGetPostsClick}>
            Get Posts From Server
          </button>

          <p className="lead heading">
            Wellcome to my social media website "AssBook". Mark Zukarberg
            created Facebook so I create Assbook. But the matter of sorrow that
            you can't share your fucking tiny ass on AssBook.Because Its a text
            sharing social media. But dont't worry you can describe how is your
            ass in a text.
          </p>

          <div className="bottom-headin">
            <p className="lead">
              <a
                href="#"
                className="btn btn-lg btn-secondary fw-bold border-white bg-dark"
              >
                AssBook
              </a>
            </p>
          </div>
        </main>

        <h4>MD RIFAT HOSSAIN (CEO of AssBook)</h4>
      </div>
    </body>
  );
};

export default WelcomeMassage;
