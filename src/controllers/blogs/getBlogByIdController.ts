import { Request, Response } from 'express';
import { HTTP_CODES } from '../../settings';
import BlogQueryRepository from '../../data/repos/blogs/BlogQueryRepository';

export default async (req: Request, res: Response) => {
  const result = await BlogQueryRepository.findById(req.params.id);
  if (result) {
    res.status(HTTP_CODES.OK).json(result);
    return;
  }
  res.sendStatus(HTTP_CODES.NOT_FOUND);
};
