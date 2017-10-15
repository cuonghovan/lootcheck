import { wheatherSagas } from './wheather';

export default function* rootSaga() {
  yield [
    ...wheatherSagas
  ];
}
