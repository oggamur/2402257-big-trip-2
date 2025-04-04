import { getRandomElement } from '../utils/random';

const mockEventPoint = [
  {
    type: 'taxi',
    id: 1,
    name: 'amsterdam',
    startTime: new Date('2025-06-12T13:00'),
    endTime: new Date('2025-06-12T13:10'),
    price: '995',
    isFavorite: true,
    offers: [1, 3, 2],
  },
  {
    type: 'flight',
    id: 2,
    name: 'israel',
    startTime: new Date('2025-03-22T10:00'),
    endTime: new Date('2025-03-23T15:00'),
    price: '3210',
    isFavorite: false,
    offers: [1, 2],
  },
  {
    type: 'train',
    id: 3,
    name: 'geneva',
    startTime: new Date('2025-04-11T18:00'),
    endTime: new Date('2025-04-11T20:10'),
    price: '431',
    isFavorite: false,
    offers: [2, 4],
  },
  {
    type: 'check-in',
    id: 4,
    name: 'moscow',
    startTime: new Date('2025-07-17T11:30'),
    endTime: new Date('2025-07-18T15:50'),
    price: '1067',
    isFavorite: true,
    offers: [],
  },
];

function getRandomEventPoint() {
  return getRandomElement(mockEventPoint);
}

export { getRandomEventPoint, mockEventPoint };
