import React from "react";
import WhyUs from "./WhyUs";
import { CiDeliveryTruck, CiLocationArrow1 } from "react-icons/ci";
import { PiLockKey } from "react-icons/pi";
import "./style.css";

function LandingPageWhy() {
  return (
    <div>
      <div className="why-us-section">
        <div className="why-us-section-content">
          <h2>Why choose us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <div className="why-us-section-card">
            <div>
              <WhyUs
                icon={<CiDeliveryTruck style={{ color: "white" }} />}
                title={"Fast Delivery"}
                text={
                  "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore"
                }
              />
            </div>
            <div>
              <WhyUs
                icon={<CiLocationArrow1 style={{ color: "white" }} />}
                title={"Order Tracking"}
                text={
                  "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore"
                }
              />
            </div>
            <div>
              <WhyUs
                icon={<PiLockKey style={{ color: "white" }} />}
                title={"Secure Payment"}
                text={
                  "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageWhy;
