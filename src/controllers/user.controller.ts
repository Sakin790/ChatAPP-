import { prisma } from "../prisma/prisma.config.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import express,{Request, Response} from "express"

class userController {
  static myAsyncMethod = asyncHandler(async (req: Request, res: Response) => {
    res.send("Async handler working!");
  });
}

export { userController };
