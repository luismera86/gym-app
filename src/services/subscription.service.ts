import { PrismaClient, Subscription } from "@prisma/client";
import { ErrorHandled } from "../utils/errorHandled";

const prisma = new PrismaClient();

export class SubscriptionService {
  async getAll() {
    const subscriptions = await prisma.subscription.findMany();

    if (!subscriptions) throw ErrorHandled.errorNotFound("Subscription not found");

    return subscriptions;
  }

  async getById(id: string) {
    const subscription = await prisma.subscription.findUnique({
      where: { id },
    });

    if (!subscription) throw ErrorHandled.errorNotFound("Subscription not found");

    return subscription;
  }

  async create(data: Subscription) {
    const subscription = await prisma.subscription.create({
      data,
    });

    if (!subscription) throw ErrorHandled.errorBadRequest("Subscription not created");

    return subscription;
  }

  async update(id: string, data: Subscription) {
    const subscription = await prisma.subscription.update({
      where: { id },
      data,
    });

    if (!subscription) throw ErrorHandled.errorBadRequest("Subscription not updated");

    return subscription;
  }

  async delete(id: string) {
    const subscription = await prisma.subscription.delete({
      where: { id },
    });

    if (!subscription) throw ErrorHandled.errorBadRequest("Subscription not deleted");

    return subscription;
  }
}
