import { stringReverse } from '../../server/utils';

export default async function handler(req, res) {
  res.status(200).json({ message: `Received` });
}
