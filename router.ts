import { Request, Response, NextFunction } from "express"
import { Review } from "./model/Review"

const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  //  const review = new Review({ userId: 'asas', content: 'sdsff' });
  //  console.log(review)
  //  await review.save();
  const reviews = await Review.find({});
  res.status(200).send(reviews);
})

// define the about route
router.get('/review', (req: Request, res: Response, next: NextFunction) => {
  res.send('Reviews');
})

// define the about route
router.post('/review', async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body.userId)
  console.log(req.body.content)
  const review = new Review({ userId: req.body.userId, content: req.body.content });
  console.log(review)
  await review.save();

  res.status(201).send('Review added');
})

export default router