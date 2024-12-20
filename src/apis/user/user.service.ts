import { Logger } from "~/miscs/logger"
import type { UserResponse } from "./user.response"
import type { UserModel } from "./user.model"
import UserRepository from "./user.repository"

interface IUserService {
  findUser(userId: string): Promise<UserResponse | undefined>
}

export default class UserService implements IUserService {
  readonly #logger: Logger
  readonly #userRepository: UserRepository

  constructor() {
    this.#logger = new Logger()
    this.#userRepository = new UserRepository()
  }

  public findUser = async (userId: string): Promise<UserResponse | undefined> => {
    try {
      const currentUser: UserModel | undefined = await this.#userRepository.findUser(userId)
      if (currentUser) {
        return {
          message: "Success",
          statusCode: 200,
          response: currentUser,
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.#logger.error(error)
        throw error
      }
    }
  }
}
