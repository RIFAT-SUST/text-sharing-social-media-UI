const Footer = () => {
  return (
    <body className="d-flex flex-column h-100">
      {/* <main className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5">Sticky footer</h1>
          <p className="lead">
            Pin a footer to the bottom of the viewport in desktop browsers with
            this custom HTML and CSS.
          </p>
          <p>
            Use{" "}
            <a href="/docs/5.0/examples/sticky-footer-navbar/">
              the sticky footer with a fixed navbar
            </a>{" "}
            if need be, too.
          </p>
        </div>
      </main> */}

      <footer className="footer mt-auto py-3 bg-secondary ">
        <div className="container-fluid">
          <span className="text-muted">
            {" "}
            <h3>Text Sharing Social Media.Created By (MD RIFAT HOSSAIN)</h3>
          </span>
        </div>
      </footer>
    </body>
  );
};

export default Footer;
