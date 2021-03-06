const Service = () => (
  <div className="our-service-sass hide-pr">
    <div className="container">
      <div className="theme-title-one text-center">
        <div className="icon-box hide-pr">
          <img src="images/e-con.svg" alt="" className="bg-shape" />
          <img src="images/e.svg" alt="" className="icon" />
        </div>
        <h2 className="main-title">
        Эрксисийг ашиглан үйл ажиллагаагаа <br/>  нягт уялдуулаарай
        </h2>
      </div>
      <div className="inner-wrapper">
        <div className="row">
          <div className="col-lg-4 single-block" data-aos="fade-up">
            <div className="service-block">
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <div className="hover-content" />
              <i className="flaticon-web icon-s" />
              <h5 className="title">
                <a href="#">Хэрэглэгчтэй харилцах баг</a>
              </h5>
              <p>Хэрэглэгчтэй харилцах бүх сувгаа эрксист нэгтгэснээр хэрэглэгчтэй харилцах хурдыг 80% нэмэгдүүлж, олон платформд төлөх зардлыг 62% бууруулна.</p>
            </div>
          </div>
          <div className="col-lg-4 single-block" data-aos="fade-up" data-aos-delay={300}>
            <div className="service-block">
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <div className="hover-content" />
              <i className="flaticon-value icon-s" />
              <h5 className="title">
                <a href="#">Маркетингийн баг</a>
              </h5>
              <p>Хэрэглэгчээ зорилтот бүлгээр ангилснаар тэдэнд тохирох маркетингийн үйл ажиллагааг оновчилж, маркетингийн кампанит ажлуудаа олон улсын стандартаар бүртгэнэ, хэмжинэ.</p>
            </div>
          </div>
          <div className="col-lg-4 single-block" data-aos="fade-up" data-aos-delay={500}>
            <div className="service-block">
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <span className="snow-dot" />
              <div className="hover-content" />
              <i className="flaticon-login icon-s" />
              <h5 className="title">
                <a href="#"> Борлуулалтын баг</a>
              </h5>
              <p>Борлуулалт эхлэхээс дуусах хүртэлх алхмуудад ямар үйл явц, амжилт, уналт тохиолдолж  буйтай цаг алдалгүй танилцан, алхам тутамдаа сайжруулна.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Service;
