import React from "react";
import "./home.css";
import { Link } from "react-router";

// Components
import Slider from "../../components/slider/slider";

const home = () => {
  return (
    <section id="home" className="flex flex-col">
      <div className="body">
        <div className="cards container">
          <div className="slider">
            <Slider />
          </div>

          <div className="scroll-wrapper">
            <Link
              className="card"
              to={"https://abb-bank.az/ferdi/emanetler/digideposit"}
            >
              <div className="container relative">
                <div className="text-content">
                  <h2>DigiDeposit</h2>
                  <p>ABB mobile tətbiqindən əmanət hesabınızı onlayn açın</p>
                </div>
                <img src="https://cdn.abb-bank.az/v30000_1_88847b9b69.png" />

                <span className="absolute top-0 right-0">↗</span>
              </div>
            </Link>

            <Link
              className="card"
              to={"https://abb-bank.az/biznes/mikro-biznes/gundelik-bankciliq"}
            >
              <div className="container relative">
                <div className="text-content">
                  <h2>DigiDeposit</h2>
                  <p>Kiçik bizneslər üçün xidmətlər. Mobil tətbiqi yükləyin</p>
                </div>
                <img src="https://cdn.abb-bank.az/ABB_mobile0000_1_35e5063f51.png" />

                <span className="absolute top-0 right-0">↗</span>
              </div>
            </Link>

            <Link className="card" to={"https://kredit.abb-bank.az/cash-loan"}>
              <div className="container relative">
                <div className="text-content">
                  <h2>DigiDeposit</h2>
                  <p>
                    Təcili pul ehtiyacınız üçün sərfəli kredit müraciəti edin
                  </p>
                </div>
                <img src="https://cdn.abb-bank.az/ABB_mobile0000_1_1_f103d8c90f.png" />

                <span className="absolute top-0 right-0">↗</span>
              </div>
            </Link>

            <Link className="card" to={"https://abb-bank.az/abb-mobile"}>
              <div className="container relative">
                <div className="text-content">
                  <h2>DigiDeposit</h2>
                  <p>Bank əməliyyatlarını sadə və sürətli şəkildə tamamlayın</p>
                </div>
                <img src="https://cdn.abb-bank.az/ABB_mobile0000_1_2_b8cca87be8.png" />

                <span className="absolute top-0 right-0">↗</span>
              </div>
            </Link>
          </div>
        </div>

        <section className="shortcuts flex">
          <h1>Sürətli keçidlər</h1>

          <div className="body container">
            <Link className="shortcut">
              <img
                src="https://cdn.abb-bank.az/quick_action_de1924bd9a.png"
                alt=""
              />
              <p>İpoteka krediti</p>
            </Link>
            <Link className="shortcut">
              <img
                src="https://cdn.abb-bank.az/quick_action_cb64fc51ac.png"
                alt=""
              />
              <p>Debet kartlar</p>
            </Link>
            <Link className="shortcut">
              <img
                src="https://cdn.abb-bank.az/quick_action_4d2f54dca3.png"
                alt=""
              />
              <p>Kredit kartları</p>
            </Link>
            <Link className="shortcut">
              <img
                src="https://cdn.abb-bank.az/D_app_5_0eca73b01a.png"
                alt=""
              />
              <p>Keşbek</p>
            </Link>
            <Link className="shortcut">
              <img src="https://cdn.abb-bank.az/63_1_a8fb2ffbb8.png" alt="" />
              <p>Filiallar və ATM-lər</p>
            </Link>
            <Link className="shortcut">
              <img
                src="https://cdn.abb-bank.az/quick_action_f917461d10.png"
                alt=""
              />
              <p>İnvestisiya</p>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default home;
