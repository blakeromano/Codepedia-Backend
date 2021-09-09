import { Post } from "../models/post"
import { Response, Request } from "express"
export {
  index,
  create,
  show,
  update,
  helpful,
  notHelpful,
}

async function index(req: Request, res: Response) {
  console.log('test')
  try {
    const posts = await Post.find()
    console.log(posts)
    res.json(posts)
  } catch (error) {
    res.send(error)
  }
}

async function show(req: Request, res: Response) {
  try {
    const post = await Post.findById(req.params.id)
    res.json(post)
  } catch (error) {
    res.send(error)
  }
}

async function create(req: Request, res: Response) {
  try {
    const post = await new Post(req.body).save()
    res.json(post)
  } catch (error) {
    res.send(error)
  }
}

async function update(req:Request, res:Response) {
  try {
    req.body.editedNum ++
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(post)
  } catch (error) {
    res.send(error)
  }
}

async function helpful(req:Request, res:Response) {
  
}

async function notHelpful(req: Request, res:Response) {
  
}