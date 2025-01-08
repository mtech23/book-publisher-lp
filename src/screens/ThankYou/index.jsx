import React from "react";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="thankyoupgg">
    <DefaultLayout>
    <section class="thankyouwrp">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="txtwrp">
              <h2 class="main-heading">Thank You! We've Noted That Down</h2>
              <p class="main-pera">
                Thankyou for the information that you just submitted to us!{" "}
                <br />
                We've noted it down and will get back to you soon.
              </p>
            </div>
            <div class="btnwrp">
              <Link
                class="btn-2"
                to="/"
              >
                Back to Home
              </Link>
              <a class="btn-1" href="javascript:;" onclick="setButtonURL();">
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </DefaultLayout>
    </div>
  );
};

export default ThankYou;
