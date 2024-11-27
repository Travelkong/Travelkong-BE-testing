import BaseModel from "~/miscs/others/baseModel"
import { CommentModel } from "../comment/comment.model"

export interface PostModel extends BaseModel {
  id: number
  user_id: string
  post_content_id: number
  likes_count: number
  comments?: CommentModel[]
  comments_count: number
  views_count: number
}
