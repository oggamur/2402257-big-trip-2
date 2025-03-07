import FilterButtonsView from './view/filter-view.js';
import SortButtonsView from './view/sort-view.js';
import EventPresenter from './presenter/event-presenter.js';
import { render } from './render.js';

const filtersButtonsContainer = document.querySelector(
  '.trip-controls__filters'
);
const eventsContainer = document.querySelector('.trip-events');
const eventPresenter = new EventPresenter({ listContainer: eventsContainer });

render(new FilterButtonsView(), filtersButtonsContainer);
render(new SortButtonsView(), eventsContainer);
eventPresenter.init();
