import { PrismaClient } from "@prisma/client";
import { ErrorHandled } from "../utils/errorHandled";
import { SubscriptionService } from "./subscription.service";

const prisma = new PrismaClient()

export class UserService {

  private subscriptionServices: SubscriptionService = new SubscriptionService();

  async getAll() {
    const users = await prisma.user.findMany({
      include: {
        role: true,
        subscription: true
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

  async getOneByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
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

  async addSubscription(id: string, idSubscription: string) {
    const subscription = await this.subscriptionServices.getById(idSubscription);
    if (!subscription) throw ErrorHandled.errorNotFound("Subscription not found");

    const user = await prisma.user.update({
      where: { id },
      data: {
        subscription: {
          connect: {
            id: idSubscription
          
        }
        },
        daysSubscription: subscription.days
      }
    });
    if (!user) throw ErrorHandled.errorBadRequest("Subscription not added");

    return user;
  }

}