import Board from '../Map/Board';
import LandingPage from '../Map/LandingPage';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="col-xs-12 col-md-7">
          <div className="about-text">
            <h2>장소를 검색하고 기록하세요!</h2>
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
            <h3>장소를 추천해주세요!</h3>
            <div className="list-style">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))
                    : "loading"}
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                      <li key={`${d}-${i}`}> {d}</li>
                    ))
                    : "loading"}
                </ul>
              </div>


            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {" "}
            {<LandingPage />}
          </div>

          <div style={{ marginTop: '20px', overflow: 'scroll', height: '400px' }} className="col-xs-12 scrollbox">
            {" "}
            {<Board />}
          </div>

        </div>
      </div>
    </div>


  );
};
