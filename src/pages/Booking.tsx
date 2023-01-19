import {
  MouseEventHandler,
  FormEventHandler,
  useState,
  useEffect,
} from 'react';
import logo from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import arrow from '../assets/icons/icon-arrow.svg';
import check from '../assets/icons/icon-check.svg';
import minus from '../assets/icons/icon-minus.svg';
import plus from '../assets/icons/icon-plus.svg';
import bottomRightCurve from '../assets/patterns/pattern-curve-bottom-right.svg';
import lines from '../assets/patterns/pattern-lines.svg';

const Booking = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [hour, setHour] = useState('');
  const [minutes, setMinutes] = useState('');
  const [time, setTime] = useState('AM');
  const [people, setPeople] = useState(4);

  const processClick = (e: Event) => {
    const arrow = (e.target as HTMLElement).parentElement!.querySelector('img');
    arrow!.classList.toggle('pl-0');
    arrow!.classList.toggle('rotate-180');
    (e.target as HTMLElement)
      .parentElement!.parentElement!.querySelector('ul')!
      .classList.toggle('hidden');
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    navigate('/');
    document.querySelector('header')!.scrollIntoView();
  };

  useEffect(() => {
    document.querySelector('header')!.scrollIntoView();
  }, []);

  return (
    <div className="font-league-spartan">
      <header className="h-150 bg-heroBookingMob bg-cover bg-no-repeat flex flex-col items-center px-6 pt-16 sm:max-md:bg-heroBookingTab md:px-8 md:bg-heroBookingTab lg:max-xl:bg-heroBookingDesk lg:max-xl:px-14 xl:px-41 xl:items-start xl:bg-heroBookingDesk">
        <div className="w-full flex flex-col items-center md:flex-row md:items-start">
          <img
            src={logo}
            alt="Dine's logo"
            className="w-21 mb-11 md:w-26 xl:mb-38"
          />
        </div>
        <h1 className="text-2xl font-light text-white mb-3 md:text-5xl md:leading-[64px] md:tracking-[-0.6px] xl:text-4xl">
          Reservations
        </h1>
        <p className="text-center text-white text-base mb-5 md:text-xl-light sm:px-18 lg:max-xl:w-3/4 xl:text-left xl:pl-0 xl:w-135">
          We can't wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We'll be happy to
          accommodate you.
        </p>
        <Link
          className="text-lg text-white bg-transparent border border-white px-13 pt-6.5 pb-5 hover:bg-white hover:text-cod-gray hover:border-white md:hidden"
          to=""
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector('main')!
              .scrollIntoView({ behavior: 'smooth' });
          }}
        >
          RESERVE PLACE
        </Link>
      </header>
      <main className="px-6 sm:px-28 md:px-8 xl:h-79 xl:px-0">
        <form
          className="flex flex-col items-stretch p-8 shadow-2xl -mt-35 bg-white mb-21 sm:p-12 md:-mt-58 md:mx-18 md:p-12 lg:max-xl:mx-auto lg:max-xl:w-3/5 xl:w-135 xl:absolute xl:right-[100px] xl:-mt-85 xl:z-20 xl:max-2xl:mx-0"
          onSubmit={
            handleSubmit as unknown as FormEventHandler<HTMLFormElement>
          }
        >
          <input
            required
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value!);
            }}
            placeholder="Name"
            className="peer/name text-xl-light pb-4 pl-4 mb-8 border-b-1 border-shuttle-gray invalid:placeholder-error/50 invalid:border-error"
          />
          <p className="hidden -mt-5 mb-8 text-error text-xs peer-invalid/name:block">
            This field is required
          </p>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value!);
            }}
            placeholder="Email"
            className="peer/email text-xl-light pb-4 pl-4 border-b-1 border-shuttle-gray invalid:placeholder-error/50 invalid:border-error"
          />
          <p className="hidden mt-3 text-error text-xs peer-invalid/email:block">
            This field is required
          </p>
          <div className="flex flex-col-reverse items-left md:flex-row-reverse md:justify-between md:mt-4">
            <div className="flex flex-row justify-between">
              <input
                required
                min="1"
                max="12"
                type="number"
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value!);
                }}
                placeholder="MM"
                className="text-xl-light pb-4 pl-4 w-19 border-b-1 border-shuttle-gray invalid:placeholder-error/50 invalid:border-error md:mr-4"
              />
              <input
                required
                min="1"
                max="31"
                type="number"
                value={day}
                onChange={(e) => {
                  setDay(e.target.value!);
                }}
                placeholder="DD"
                className="text-xl-light pb-4 pl-4 w-19 border-b-1 border-shuttle-gray invalid:placeholder-error/50 invalid:border-error md:mr-4"
              />
              <input
                required
                min={new Date().getFullYear()}
                type="number"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value!);
                }}
                placeholder="YYYY"
                className="text-xl-light pb-4 pl-4 w-22 border-b-1 border-shuttle-gray invalid:placeholder-error/50 invalid:border-error"
              />
            </div>
            <div className="text-xl-light pt-7 pb-3">
              <label>Pick a date</label>
              <p
                className={
                  month.length >= 1 &&
                  day.length >= 1 &&
                  year.length >= 4 &&
                  parseInt(month) > 0 &&
                  parseInt(day) > 0 &&
                  parseInt(year) >= new Date().getFullYear()
                    ? 'hidden'
                    : 'block text-error text-xs'
                }
              >
                This field is incomplete
              </p>
            </div>
          </div>
          <section className="flex flex-col items-left md:flex-row md:justify-between md:items-center md:mt-4">
            <section className="text-xl-light pt-7 pb-3">
              <label>Pick a time</label>
              <p
                className={
                  hour.length >= 1 && minutes.length >= 1
                    ? 'hidden'
                    : 'block text-error text-xs'
                }
              >
                This field is incomplete
              </p>
            </section>
            <section className="flex flex-row justify-between">
              <input
                required
                min="0"
                max="11"
                type="number"
                value={hour}
                onChange={(e) => {
                  setHour(e.target.value!);
                }}
                placeholder="09"
                className="text-xl-light pb-4 pl-4 w-19 border-b-1 border-shuttle-gray invalid:placeholder-error/50 invalid:border-error md:mr-4"
              />
              <input
                required
                min="0"
                max="59"
                type="number"
                value={minutes}
                onChange={(e) => {
                  setMinutes(e.target.value!);
                }}
                placeholder="00"
                className="text-xl-light pb-4 pl-4 w-19 border-b-1 border-shuttle-gray invalid:placeholder-error/50 invalid:border-error md:mr-4"
              />
              <section className="pl-4 pb-4 w-22 border-b-1 border-shuttle-gray invalid:placeholder-error/50 invalid:border-error">
                <section
                  className="cursor-pointer flex flex-row justify-between items-center"
                  onClick={
                    processClick as unknown as MouseEventHandler<HTMLButtonElement>
                  }
                  tabIndex={0}
                >
                  <span className="text-xl-light leading-7 font-normal">
                    {time}
                  </span>
                  <img src={arrow} alt="" className="transition w-4" />
                </section>
                <ul className="absolute bg-white w-26 -ml-4 mt-2 py-4 hidden shadow-2xl">
                  <li
                    className="flex flex-row justify-left items-center ml-4 mb-4"
                    onClick={() => {
                      setTime('AM');
                    }}
                  >
                    <img
                      src={check}
                      alt=""
                      className={
                        time === 'AM' ? 'w-3 mr-4' : 'w-3 mr-4 opacity-0'
                      }
                    />
                    <span>AM</span>
                  </li>
                  <li
                    className="flex flex-row justify-left items-center ml-4"
                    onClick={() => {
                      setTime('PM');
                    }}
                  >
                    <img
                      src={check}
                      alt=""
                      className={
                        time === 'PM' ? 'w-3 mr-4' : 'w-3 mr-4 opacity-0'
                      }
                    />
                    <span>PM</span>
                  </li>
                </ul>
              </section>
            </section>
          </section>
          <section className="flex flex-row justify-between items-center mt-9 border-b-1 border-shuttle-gray text-xl pb-4 px-4 mb-8 md:mt-4">
            <img
              className="cursor-pointer"
              src={minus}
              alt="reduce number of people"
              tabIndex={0}
              onClick={() => {
                people > 0 && setPeople(people - 1);
              }}
            />
            <span>{people} people</span>
            <img
              className="cursor-pointer"
              src={plus}
              alt="increase number of people"
              tabIndex={0}
              onClick={() => {
                setPeople(people + 1);
              }}
            />
          </section>
          <input
            type="submit"
            value="MAKE RESERVATION"
            className="cursor-pointer text-center py-5 text-lg leading-7 text-white bg-cod-gray border border-cod-gray hover:bg-white hover:text-cod-gray hover:border-cod-gray"
          />
        </form>
        <img
          src={bottomRightCurve}
          alt=""
          className="hidden md:h-80 w-8/12 xl:block xl:-mr-8 xl:z-0"
        />
        <img
          src={lines}
          alt=""
          className="hidden xl:block xl:absolute xl:right-1/2 xl:-mt-24 xl:z-10"
        />
      </main>
      <footer className="bg-cod-gray flex flex-col items-center md:items-start py-19 md:px-8 lg:max-xl:px-14 xl:px-41">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-start">
          <img
            src={logo}
            alt="Dine's logo"
            className="w-26 mb-10 md:w-26 md:mr-31 xl:mr-48"
          />
          <section className="text-sm text-white lg:flex lg:flex-row lg:justify-between ">
            <section className="flex flex-col items-center mb-8 md:items-start lg:mr-32 xl:mr-45">
              <span>MARTHWAITE, SEDBERGH</span>
              <span>CUMBRIA</span>
              <span>+00 44 123 4567</span>
            </section>
            <section className="flex flex-col items-center md:items-start">
              <span>OPEN TIMES</span>
              <span>MON - FRI: 09:00 AM - 10:00 PM</span>
              <span>SAT - SUN: 09:00 AM - 11:30 PM</span>
            </section>
          </section>
        </div>
        <div className="md:w-full">
          <p className="text-center text-sm text-white mt-6 mx-8 md:mx-0 md:w-full">
            Challenge by
            <a
              className="text-sky-300 ml-1"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by
            <a
              className="text-sky-300 ml-1"
              href="https://www.frontendmentor.io/profile/Ahmed96Mah"
              target="_blank"
              rel="noreferrer"
            >
              Ahmed Mahmoud Abdalwahab
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Booking;
