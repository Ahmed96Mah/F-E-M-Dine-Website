import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import enjoyablePlaceMob from '../assets/homepage/enjoyable-place-mobile@2x.jpg';
import enjoyablePlaceTab from '../assets/homepage/enjoyable-place-tablet@2x.jpg';
import enjoyablePlaceDesk from '../assets/homepage/enjoyable-place-desktop@2x.jpg';
import locallySourcedMob from '../assets/homepage/locally-sourced-mobile@2x.jpg';
import locallySourcedTab from '../assets/homepage/locally-sourced-tablet@2x.jpg';
import locallySourcedDesk from '../assets/homepage/locally-sourced-desktop@2x.jpg';
import salmonMob from '../assets/homepage/salmon-mobile@2x.jpg';
import salmonImg from '../assets/homepage/salmon-desktop-tablet@2x.jpg';
import beefMob from '../assets/homepage/beef-mobile@2x.jpg';
import beefImg from '../assets/homepage/beef-desktop-tablet@2x.jpg';
import chocolateMob from '../assets/homepage/chocolate-mobile@2x.jpg';
import chocolateImg from '../assets/homepage/chocolate-desktop-tablet@2x.jpg';
import familyGatheringMob from '../assets/homepage/family-gathering-mobile@2x.jpg';
import familyGatheringTab from '../assets/homepage/family-gathering-tablet@2x.jpg';
import familyGatheringDesk from '../assets/homepage/family-gathering-desktop@2x.jpg';
import specialEventMob from '../assets/homepage/special-events-mobile@2x.jpg';
import specialEventTab from '../assets/homepage/special-events-tablet@2x.jpg';
import specialEventDesk from '../assets/homepage/special-events-desktop@2x.jpg';
import socialEventMob from '../assets/homepage/social-events-mobile@2x.jpg';
import socialEventTab from '../assets/homepage/social-events-tablet@2x.jpg';
import socialEventDesk from '../assets/homepage/social-events-desktop@2x.jpg';
import divider from '../assets/patterns/pattern-divide.svg';
import bottomRightCurve from '../assets/patterns/pattern-curve-bottom-right.svg';
import topRightCurve from '../assets/patterns/pattern-curve-top-right.svg';
import topLeftCurve from '../assets/patterns/pattern-curve-top-left.svg';
import lines from '../assets/patterns/pattern-lines.svg';
import { MouseEventHandler, useState } from 'react';

const Home = () => {
  const [section, setSection] = useState('FAMILY GATHERING');

  const processClick = (e: Event) => {
    setSection((e.target as HTMLElement).textContent!);
  };

  return (
    <div className="font-league-spartan">
      <header className="h-187 pt-57 px-6 flex flex-col items-center bg-heroHomeMob bg-no-repeat bg-cover md:h-248 md:px-[100px] md:pt-93 md:bg-heroHomeTab xl:pt-16 xl:px-41 xl:bg-heroHomeDesk xl:bg-contain xl:items-start">
        <img src={logo} alt="Dine's logo" className="w-21 md:w-26" />
        <h1 className="text-2xl text-white text-center font-light px-8 pt-9 pb-6 md:px-22 md:text-3xl md:leading-[64px] md:font-light md:tracking-[-0.6px] xl:mt-38 xl:text-4xl xl:pl-0 xl:text-left xl:w-2/3">
          Exquisite dining since 1989
        </h1>
        <p className="text-base text-center text-white pb-13 md:text-xl-light xl:text-left xl:w-6/12">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <Link
          className="text-lg text-white border border-white px-13 pt-6.5 pb-5 hover:bg-white hover:text-cod-gray"
          to="/booking"
        >
          BOOK A TABLE
        </Link>
      </header>
      <main>
        <div className="flex flex-col items-center px-6 -mt-16 mb-25 md:-mt-22 md:z-20 xl:-mt-56 xl:px-41 xl:flex-row xl:justify-between">
          <img
            src={enjoyablePlaceMob}
            alt="an enjoyable place"
            className="mb-12 md:hidden"
          />
          <img
            src={enjoyablePlaceTab}
            alt="an enjoyable place"
            className="hidden md:block mb-12 w-9/12 xl:hidden"
          />
          <img
            src={enjoyablePlaceDesk}
            alt="an enjoyable place"
            className="hidden xl:block xl:w-135"
          />
          <img
            src={bottomRightCurve}
            alt=""
            className="hidden md:h-80 md:block md:z-0 md:absolute md:right-1/2 md:mt-44 md:w-full xl:hidden"
          />
          <img
            src={topRightCurve}
            alt=""
            className="hidden md:h-80 xl:block md:z-0 md:absolute md:right-1/2 md:mt-16 md:w-full xl:right-1/3"
          />
          <section className="flex flex-col items-center xl:items-start xl:ml-31">
            <img src={divider} alt="" />
            <h2 className="text-center text-2xl mt-9 mb-4 px-10 md:mb-7 md:px-45 md:text-3xl xl:pl-0 xl:pr-16 xl:text-left">
              Enjoyable place for all the family
            </h2>
            <p className="text-center text-base md:text-xl-light md:px-33 xl:pl-0 xl:pr-0 xl:text-left">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </section>
        </div>
        <div className="mb-25 px-6 flex flex-col items-center z-10 xl:px-41 xl:flex-row-reverse xl:justify-between xl:-mb-20">
          <img
            src={locallySourcedMob}
            alt="locally sourced food"
            className="mb-12 md:hidden"
          />
          <img
            src={locallySourcedTab}
            alt="locally sourced food"
            className="hidden mb-12 md:block w-9/12 md:mb-14 xl:hidden"
          />
          <img
            src={locallySourcedDesk}
            alt="locally sourced food"
            className="hidden xl:block xl:w-135"
          />
          <img
            src={lines}
            alt=""
            className="hidden md:block md:h-20 md:z-20 md:absolute md:right-14 md:mt-52 xl:-mt-8"
          />
          <section className="flex flex-col items-center xl:items-start xl:mr-31">
            <img src={divider} alt="" />
            <h2 className="text-center text-2xl mt-9 mb-4 px-10 md:mt-10 md:mb-8 md:px-45 md:text-3xl xl:pl-0 xl:pr-16 xl:text-left">
              The most locally sourced food
            </h2>
            <p className="text-center text-base md:text-xl-light md:px-33 xl:pl-0 xl:pr-8 xl:text-left">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you're eating the freshest, most
              sustainable food.
            </p>
          </section>
          <img
            src={topLeftCurve}
            alt=""
            className="hidden md:block md:z-20 md:absolute md:mt-110 md:left-1/2 md:h-80 md:w-1/2 xl:left-1/3 xl:mt-32 xl:w-8/12"
          />
        </div>
        <div className="bg-cod-gray px-6 pt-18 flex flex-col items-center md:pt-24 md:px-24 xl:flex-row xl:items-start xl:px-41 xl:pt-50">
          <section className="flex flex-col items-center mb-22 md:mb-6 xl:items-start xl:w-175">
            <img src={divider} alt="" className="xl:-mt-4 xl:mb-4" />
            <h2 className="text-2xl text-white text-center mt-9 mb-4 md:mb-8 md:text-3xl md:px-13 xl:text-3xl xl:text-left xl:pl-0">
              A few highlights from our menu
            </h2>
            <p className="text-base text-white text-center px-1 md:text-xl-light md:px-13 xl:text-xl-light xl:text-left xl:pl-0 xl:pr-18">
              We cater for all dietary requirements, but here's a glimpse at
              some of our diner's favourites. Our menu is revamped every season.
            </p>
          </section>
          <div className="flex flex-col items-center">
            <div className="md:flex md:flex-row md:justify-left md:items-center">
              <img
                src={salmonMob}
                alt="seared salmon fillet"
                className="md:hidden"
              />
              <img
                src={salmonImg}
                alt="seared salmon fillet"
                className="hidden md:block md:w-32"
              />
              <section className="flex flex-col items-center mb-14 md:mb-4 md:items-start md:ml-16 md:before:content-[''] md:before:border-b-1 md:before:block md:before:w-8 md:before:absolute md:before:-ml-16 md:before:mt-10 md:before:border-beaver">
                <h2 className="text-xl text-white text-center mt-9 mb-4">
                  Seared Salmon Fillet
                </h2>
                <p className="text-base text-white text-center px-7 md:text-left md:px-0">
                  Our locally sourced salmon served with a refreshing buckwheat
                  summer salad.
                </p>
              </section>
            </div>
            <div className="border-y-1 border-white/20 pt-6 md:flex md:pt-0 md:flex-row md:justify-left md:items-center md:border-y-1">
              <img
                src={beefMob}
                alt="rosemary fillet mignon"
                className="md:hidden"
              />
              <img src={beefImg} alt="rosemary fillet mignon" className="hidden md:block md:w-32" />
              <section className="flex flex-col items-center mb-7 md:mb-4 md:items-start md:ml-16 md:before:content-[''] md:before:border-b-1 md:before:block md:before:w-8 md:before:absolute md:before:-ml-16 md:before:mt-10 md:before:border-beaver">
                <h2 className="text-xl text-white text-center mt-9 mb-4">
                  Rosemary Filet Mignon
                </h2>
                <p className="text-base text-white text-center px-8 md:text-left md:px-0">
                  Our prime beef served to your taste with a delicious choice of
                  seasonal sides.
                </p>
              </section>
            </div>
            <div className="pt-6 md:pt-0 md:mb-20 md:flex md:flex-row md:justify-left md:items-center xl:mb-24">
              <img
                src={chocolateMob}
                alt="fruit chocolate mousse"
                className="md:hidden"
              />
              <img
                src={chocolateImg}
                alt="fruit chocolate mousse"
                className="hidden md:block md:w-32"
              />
              <section className="flex flex-col items-center mb-7 md:mb-4 md:items-start md:ml-16 md:before:content-[''] md:before:border-b-1 md:before:block md:before:w-8 md:before:absolute md:before:-ml-16 md:before:mt-10 md:before:border-beaver">
                <h2 className="text-xl text-white text-center mt-9 mb-4">
                  Summer Fruit Chocolate Mousse
                </h2>
                <p className="text-base text-white text-center px-8 mb-25 md:mb-0 md:text-left md:px-0">
                  Creamy mousse combined with summer fruits and dark chocolate
                  shavings.
                </p>
              </section>
            </div>
          </div>
        </div>
        <section className="px-6 mt-20 flex flex-col items-center md:mt-29 xl:flex-row xl:items-center xl:px-41">
          <img
            src={topRightCurve}
            alt=""
            className="hidden md:block md:absolute md:w-full md:h-80 md:right-1/2 md:-mt-28 md:z-0 xl:right-2/3 xl:-mt-[310px]"
          />
          <img
            src={lines}
            alt=""
            className="hidden md:block md:absolute md:h-20 md:z-20 md:left-10 md:-mt-10 xl:-mt-[310px]"
          />
          {section === 'FAMILY GATHERING' && (
            <div className="flex flex-row justify-center md:mb-14 xl:mr-31">
              <img
                src={familyGatheringMob}
                alt="family gathered"
                className="mb-12 md:hidden"
              />
              <img
                src={familyGatheringTab}
                alt="family gathered"
                className="hidden md:block md:w-4/5 md:z-10 xl:hidden"
              />
              <img
                src={familyGatheringDesk}
                alt="family gathered"
                className="hidden xl:block xl:w-135"
              />
            </div>
          )}
          {section === 'SPECIAL EVENTS' && (
            <div className="flex flex-row justify-center md:mb-14 xl:mr-31">
              <img
                src={specialEventMob}
                alt="special events"
                className="mb-12 md:hidden"
              />
              <img
                src={specialEventTab}
                alt="special events"
                className="hidden md:block md:w-4/5 md:z-10 xl:hidden"
              />
              <img
                src={specialEventDesk}
                alt="special events"
                className="hidden xl:block xl:w-135"
              />
            </div>
          )}
          {section === 'SOCIAL EVENTS' && (
            <div className="flex flex-row justify-center md:mb-14 xl:mr-31">
              <img
                src={socialEventMob}
                alt="social events"
                className="mb-12 md:hidden"
              />
              <img
                src={socialEventTab}
                alt="social events"
                className="hidden md:block md:w-4/5 md:z-10 xl:hidden"
              />
              <img
                src={socialEventDesk}
                alt="social events"
                className="hidden xl:block xl:w-135"
              />
            </div>
          )}
          <section className="flex flex-col items-center xl:flex-col-reverse xl:w-111">
            <div className="flex flex-col items-center mb-6 md:mb-12 md:flex-row md:justify-between md:w-11/12 xl:flex-col xl:items-start">
              <button
                className={
                  section === 'FAMILY GATHERING'
                    ? 'mb-4 md:mb-0 text-lg text-button-active leading-7 after:content-[""] after:border-b-1 after:block after:w-12 after:mx-auto xl:after:ml-0 after:border-beaver md:after:pt-2 md:after:-mb-2 xl:after:w-24 xl:after:relative xl:after:-top-6 xl:after:-left-36'
                    : 'mb-4 md:mb-0 text-lg text-button-active/50 leading-7'
                }
                onClick={
                  processClick as unknown as MouseEventHandler<HTMLButtonElement>
                }
              >
                FAMILY GATHERING
              </button>
              <button
                className={
                  section === 'SPECIAL EVENTS'
                    ? 'mb-4 md:mb-0 text-lg text-button-active leading-7 after:content-[""] after:border-b-1 after:block after:w-12 after:mx-auto after:border-beaver md:after:pt-2 md:after:-mb-2 xl:after:w-24 xl:after:relative xl:after:-top-6 xl:after:-left-44'
                    : 'mb-4 md:mb-0 text-lg text-button-active/50 leading-7'
                }
                onClick={
                  processClick as unknown as MouseEventHandler<HTMLButtonElement>
                }
              >
                SPECIAL EVENTS
              </button>
              <button
                className={
                  section === 'SOCIAL EVENTS'
                    ? 'text-lg text-button-active leading-7 after:content-[""] after:border-b-1 after:block after:w-12 after:mx-auto after:border-beaver md:after:pt-2 md:after:-mb-2 xl:after:w-24 xl:after:relative xl:after:-top-6 xl:after:-left-44'
                    : 'text-lg text-button-active/50 leading-7'
                }
                onClick={
                  processClick as unknown as MouseEventHandler<HTMLButtonElement>
                }
              >
                SOCIAL EVENTS
              </button>
            </div>
            {section === 'FAMILY GATHERING' && (
              <section className="flex flex-col items-center mb-31 xl:items-start">
                <h2 className="text-2xl mb-4 md:mb-6 md:text-3xl">
                  Family Gathering
                </h2>
                <p className="text-center text-base mb-7 md:mb-14 md:text-xl-light md:px-33 xl:px-0 xl:text-left">
                  We love catering for entire families. So please bring everyone
                  along for a special meal with your loved ones. We'll provide a
                  memorable experience for all.
                </p>
                <Link
                  className="text-lg text-white bg-cod-gray border border-cod-gray px-13 pt-6.5 pb-5 hover:bg-white hover:text-cod-gray hover:border-cod-gray"
                  to="/booking"
                >
                  BOOK A TABLE
                </Link>
              </section>
            )}
            {section === 'SPECIAL EVENTS' && (
              <section className="flex flex-col items-center mb-31 xl:items-start">
                <h2 className="text-2xl mb-4 md:mb-6 md:text-3xl">
                  Special Events
                </h2>
                <p className="text-center text-base mb-7 md:mb-14 md:text-xl-light md:px-33 xl:px-0 xl:text-left">
                  Whether it's a romantic dinner or special date you're
                  celebrating with others we'll look after you. We'll be sure to
                  mark your special date with an unforgettable meal.
                </p>
                <Link
                  className="text-lg text-white bg-cod-gray border border-cod-gray px-13 pt-6.5 pb-5 hover:bg-white hover:text-cod-gray hover:border-cod-gray"
                  to="/booking"
                >
                  BOOK A TABLE
                </Link>
              </section>
            )}
            {section === 'SOCIAL EVENTS' && (
              <section className="flex flex-col items-center mb-31 xl:items-start">
                <h2 className="text-2xl mb-4 md:mb-6 md:text-3xl">
                  Social Events
                </h2>
                <p className="text-center text-base mb-7 md:mb-14 md:text-xl-light md:px-33 xl:px-0 xl:text-left">
                  Are you looking to have a larger social event? No problem!
                  We're more than happy to cater for big parties. We'll work
                  with you to make your event a hit with everyone.
                </p>
                <Link
                  className="text-lg text-white bg-cod-gray border border-cod-gray px-13 pt-6.5 pb-5 hover:bg-white hover:text-cod-gray hover:border-cod-gray"
                  to="/booking"
                >
                  BOOK A TABLE
                </Link>
              </section>
            )}
          </section>
        </section>
        <div className="h-82 pt-21 bg-readyHomeMob bg-no-repeat bg-cover flex flex-col items-center md:bg-readyHomeTab xl:flex-row xl:justify-between xl:px-41 xl:bg-readyHomeDesk xl:bg-cover xl:h-60 xl:py-22">
          <p className="text-2xl text-white text-center mb-5 md:mb-6 md:text-3xl xl:mb-0">
            Ready to make a reservation?
          </p>
          <Link
            className="text-lg text-white bg-transparent border border-white px-13 pt-6.5 pb-5 hover:bg-white hover:text-cod-gray hover:border-white"
            to="/booking"
          >
            BOOK A TABLE
          </Link>
        </div>
      </main>
      <footer className="bg-cod-gray flex flex-col items-center py-19 xl:px-41 xl:flex-row xl:items-start">
        <img src={logo} alt="Dine's logo" className="w-26 mb-10 xl:mr-48" />
        <div className="text-sm text-white xl:w-full xl:flex xl:flex-row xl:justify-start xl:items-center">
          <div className="flex flex-col items-center mb-8 xl:items-start xl:mr-45 xl:mb-0">
            <span>MARTHWAITE, SEDBERGH</span>
            <span>CUMBRIA</span>
            <span>+00 44 123 4567</span>
          </div>
          <div className="flex flex-col items-center xl:items-start">
            <span>OPEN TIMES</span>
            <span>MON - FRI: 09:00 AM - 10:00 PM</span>
            <span>SAT - SUN: 09:00 AM - 11:30 PM</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
