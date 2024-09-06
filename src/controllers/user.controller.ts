import { prisma } from "../prisma/prisma.config.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";

class userController {
  static status = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json(new ApiResponse(200, null, "EVERYTHING IS WORKING"));
  });

  static register = asyncHandler(async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
      if ([name, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "all fields are required");
      }
      const existUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (existUser) {
        throw new ApiError(400, "User with this email already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      if (!newUser) {
        throw new ApiError(
          500,
          "Something went Wrong while registering the user"
        );
      }
      return res
        .status(201)
        .json(new ApiResponse(200, newUser, "user registred successfully"));
    } catch (error) {
      throw new ApiError(
        404,
        `SOMETHING WENT WRONG WHILE REGISTER A USER ${error}`
      );
    }
  });

  static login = asyncHandler(async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      if ([email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "Email or Name is Required");
      }
      console.log({ email, password });

      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (!user) {
        throw new ApiError(404, "User does not exist");
      }



    } catch (error) {
      throw new ApiError(
        404,
        `SOMETHING WENT WRONG WHILE LOGIN A USER ${error}`
      );
    }
  });
}

export { userController };
