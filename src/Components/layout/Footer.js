import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-secondary text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              <a
                href="https://github.com/phajib/muvi_frontend"
                target="_blank"
                rel="noopener noreferrer">
                  MUVI
              </a>
            </span>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external movies data API,
            <a
              href="http://www.themoviedb.org"
              target="_blank"
              rel="noopener noreferrer">
                
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/208x226-stacked-green-9484383bd9853615c113f020def5cbe27f6d08a84ff834f41371f223ebad4a3c.png"
                alt="tmdb_logo"
                width="30" height = "30"
              ></img>
            </a>
          </div>
          <div className="copyright text-center">
            &copy; 2020 MUVI
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
