import { stringReverse } from '../../server/utils';

const wait = time =>
  new Promise((res, rej) => {
    setTimeout(() => res(), time);
  });

export default async function handler(req, res) {
  const { body } = req;
  await wait(1000);
  res
    .status(200)
    .json({ message: `Thank you ${stringReverse(body.firstName)}` });
}
