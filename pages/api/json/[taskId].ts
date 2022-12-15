import { NextApiRequest, NextApiResponse } from 'next';
import { json_0, json_1, json_2 } from '../json-data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query.taskId);
  const taskId = parseInt(req.query.taskId);
  if (taskId === 0) {
    res.status(200).json(json_0);
  } else if (taskId === 1) {
    res.status(200).json(json_1);
  } else if (taskId === 2) {
    res.status(200).json(json_2);
  } else {
    res.status(200).json(json_0);
  }
}
