import React from "react";
import "../style/css/blog.css";
const Blog = () => {
  return (
    <>
      <div className="container-fluid blogfluid">
        <img
          className="blogbackground"
          src={process.env.PUBLIC_URL + "imgs/satan (2).jpg"}
          alt=""
        />
        <div className="container blogcon">
          <div className="blogcontent">
            <h3>Styling</h3>
            <p>Picking the best colours for your complexion</p>
            <p>
              Colour matching is not easy, So We’ve created this guide for you
              to learn more about the colours that will suit you, so you’ll
              always know how to look your best.
            </p>
            <div className="skintones">
              <div className="light skin">
                <h3>Light Skin</h3>
                <h4>Colours that look best on you :</h4>
                <p>
                  Dark brown, burgundy, grey, navy, bright and royal blue, deep
                  purples, lavender, lilac, bright rose, ruby, and emerald
                  green.
                </p>
                <h4>Colours to avoid :</h4>
                <p>
                  Yellow and orange, as well as any pastel shades or soft
                  colours as they will only wash you out.
                </p>
              </div>

              <div className="medium skin">
                <h3>Medium Skin</h3>
                <h4>Colours that look best on you :</h4>
                <p>
                  Dusty pink, soft rose, peach, jade green, gray, off-white and
                  blue.
                </p>
                <h4>Colours to avoid :</h4>
                <p>
                  Bright red, bright yellow. Try to steer clear of any super
                  bright or neon colours that can overwhelm.
                </p>
              </div>

              <div className="olive skin">
                <h3>Olive Skin</h3>
                <h4>Colours that look best on you :</h4>
                <p>
                  Orange, red, golden yellow, amber, warm greens, blue,
                  turquoise, moss green, magenta, purple, chocolate brown,
                  creamy whites.
                </p>
                <h4>Colours to avoid :</h4>
                <p>
                  Colder blues, soft greens and yellows – the last two are too
                  similar to the undertone of your complexion.
                </p>
              </div>
              <div className="dark skin">
                <h3>Dark Skin</h3>
                <h4>Colours that look best on you :</h4>
                <p>
                  Purple, pink, peach, orange, yellow, green, blue and bright
                  colours in general.
                </p>
                <h4>Colours to avoid :</h4>
                <p>
                  Brown, navy and lots of black – these dark colours won’t
                  contrast nearly enough with dark skin and detract from your
                  outfit, just like people with fair skin shouldn’t wear white.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
