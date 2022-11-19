import React from 'react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test(`renders two logos in the page`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const targetImg = screen.getAllByAltText('logo');
  expect(targetImg.length).toEqual(2);
});

test('renders h1 header', () => {
  render(<Home />, { wrapper: BrowserRouter });
  const homePageHeader = screen.getByText('Exquisite dining since 1989', {
    selector: 'h1',
  });
  expect(homePageHeader).toBeInTheDocument();
});

test('renders p element in the header', () => {
  render(<Home />, { wrapper: BrowserRouter });
  const headerParagh = screen.getByText(
    'Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.',
    {
      selector: 'p',
    }
  );
  expect(headerParagh).toBeInTheDocument();
});

test(`renders three anchor elements`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const headerAnchor = screen.getAllByText('BOOK A TABLE', {
    selector: 'a',
  });
  expect(headerAnchor.length).toEqual(3);
});

test(`renders the enjoyable place img`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const targetImg = screen.getAllByAltText('an enjoyable place');
  expect(targetImg[0]).toBeInTheDocument();
});

test(`renders the enjoyable place h2`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const headerTarget = screen.getByText('Enjoyable place for all the family', {
    selector: 'h2',
  });
  expect(headerTarget).toBeInTheDocument();
});

test(`renders the enjoyable place p`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const paraghTarget = screen.getByText(
    'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.',
    {
      selector: 'p',
    }
  );
  expect(paraghTarget).toBeInTheDocument();
});

test(`renders the locally sourced food img`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const targetImg = screen.getAllByAltText('locally sourced food');
  expect(targetImg[0]).toBeInTheDocument();
});

test(`renders the local food h2`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const headerTarget = screen.getByText('The most locally sourced food', {
    selector: 'h2',
  });
  expect(headerTarget).toBeInTheDocument();
});

test(`renders the local food p`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const paraghTarget = screen.getByText(
    `All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.`,
    {
      selector: 'p',
    }
  );
  expect(paraghTarget).toBeInTheDocument();
});

test(`renders highlighs h2`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const headerTarget = screen.getByText('A few highlights from our menu', {
    selector: 'h2',
  });
  expect(headerTarget).toBeInTheDocument();
});

test(`renders highlighs p`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const paraghTarget = screen.getByText(
    `We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season.`,
    {
      selector: 'p',
    }
  );
  expect(paraghTarget).toBeInTheDocument();
});

test(`renders the salmon fillet img`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const targetImg = screen.getAllByAltText('seared salmon fillet');
  expect(targetImg[0]).toBeInTheDocument();
});

test(`renders the salmon fillet h3`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const headerTarget = screen.getByText('Seared Salmon Fillet', {
    selector: 'h2',
  });
  expect(headerTarget).toBeInTheDocument();
});

test(`renders the salmon fillet p`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const paraghTarget = screen.getByText(
    `Our locally sourced salmon served with a refreshing buckwheat summer salad.`,
    {
      selector: 'p',
    }
  );
  expect(paraghTarget).toBeInTheDocument();
});

test(`renders the rosemary fillet img`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const targetImg = screen.getAllByAltText('rosemary fillet mignon');
  expect(targetImg[0]).toBeInTheDocument();
});

test(`renders the rosemary fillet h3`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const headerTarget = screen.getByText('Rosemary Filet Mignon', {
    selector: 'h2',
  });
  expect(headerTarget).toBeInTheDocument();
});

test(`renders the rosemary fillet p`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const paraghTarget = screen.getByText(
    `Our prime beef served to your taste with a delicious choice of seasonal sides.`,
    {
      selector: 'p',
    }
  );
  expect(paraghTarget).toBeInTheDocument();
});

test(`renders the fruit chocolate mousse img`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const targetImg = screen.getAllByAltText('fruit chocolate mousse');
  expect(targetImg[0]).toBeInTheDocument();
});

test(`renders the fruit chocolate mousse h3`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const headerTarget = screen.getByText('Summer Fruit Chocolate Mousse', {
    selector: 'h2',
  });
  expect(headerTarget).toBeInTheDocument();
});

test(`renders the fruit chocolate mousse p`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const paraghTarget = screen.getByText(
    `Creamy mousse combined with summer fruits and dark chocolate shavings.`,
    {
      selector: 'p',
    }
  );
  expect(paraghTarget).toBeInTheDocument();
});

test(`renders family gathering button`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const navButton = screen.getByText('FAMILY GATHERING', {
    selector: 'button',
  });
  expect(navButton).toBeInTheDocument();
});

test(`renders special events button`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const navButton = screen.getByText('SPECIAL EVENTS', {
    selector: 'button',
  });
  expect(navButton).toBeInTheDocument();
});

test(`renders social events button`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const navButton = screen.getByText('SOCIAL EVENTS', {
    selector: 'button',
  });
  expect(navButton).toBeInTheDocument();
});

test(`renders family gathering h2`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const headerTarget = screen.getByText('Family Gathering', {
    selector: 'h2',
  });
  expect(headerTarget).toBeInTheDocument();
});

test(`renders family gathering p`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const paraghTarget = screen.getByText(
    `We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.`,
    {
      selector: 'p',
    }
  );
  expect(paraghTarget).toBeInTheDocument();
});

test(`renders reservation question p`, () => {
  render(<Home />, { wrapper: BrowserRouter });
  const paraghTarget = screen.getByText(`Ready to make a reservation?`, {
    selector: 'p',
  });
  expect(paraghTarget).toBeInTheDocument();
});
