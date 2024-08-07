import { Request, Response } from 'express';
import { HTTP_CODES } from '../../settings';
import PostService from '../../services/PostService';
import PostQueryRepository from '../../data/repos/posts/PostQueryRepository';

export default async (req: Request, res: Response) => {
  const createdPostId = await PostService.create(req.body);
  if (createdPostId) {
    const postData = await PostQueryRepository.findById(createdPostId);
    res.status(HTTP_CODES.CREATED).json(postData);
    return;
  }
  res.sendStatus(HTTP_CODES.NOT_FOUND);
};
