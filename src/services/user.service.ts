import { PrismaClient } from "@prisma/client";
import { ErrorHandled } from "../utils/errorHandled";

const prisma = new PrismaClient()

export class UserService {

  async getAll() {
    const users = await prisma.user.findMany({
      include: {
        role: true,
        trainingDays: true,
      }
    });

    if (!users) throw ErrorHandled.errorNotFound("Users not found");

    return users;
  }

  async getOneById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) throw ErrorHandled.errorNotFound("User not found");

    return user;
  }

  async createOne(data: any) {
    try {
      const user = await prisma.user.create({
        data: {
          ...data,
          role: {
            connect: {
              id: data.role
            }
          },
          
        }
      });

      return user;
    } catch (error) {
      console.error(error);
      throw ErrorHandled.errorBadRequest("User not created");
    }
    ;


  }

  async updateOneById(id: string, data: any) {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    if (!user) throw ErrorHandled.errorBadRequest("User not updated");

    return user;
  }

  async deleteOneById(id: string) {
    const user = await prisma.user.delete({
      where: { id },
    });
    if (!user) throw ErrorHandled.errorBadRequest("User not deleted");

    return user;
  }

}