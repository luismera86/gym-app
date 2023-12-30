import { PrismaClient } from "@prisma/client";
import { ErrorHandled } from "../utils/errorHandled";

const prisma = new PrismaClient();
export class TrainingDayService {
  async getAll() {
    const trainingDay = await prisma.trainingDay.findMany({
      include: {
        trainingDayHours: true,
      },
    });

    if (!trainingDay) throw ErrorHandled.errorNotFound("Training day not found");

    return trainingDay;
  }

  async getOneById(id: string) {
    const trainingDay = await prisma.trainingDay.findUnique({
      where: { id },
    });
    if (!trainingDay) throw ErrorHandled.errorNotFound("Training day not found");

    return trainingDay;
  }

  async createOne(data: any) {
    try {
      const trainingDay = await prisma.trainingDay.create({
        data: {
          ...data,
        },
      });

      return trainingDay;
    } catch (error) {
      console.error(error);
      throw ErrorHandled.errorBadRequest("Training day not created");
    }
  }

  async updateOneById(id: string, data: any) {
    const trainingDay = await prisma.trainingDay.update({
      where: { id },
      data,
    });

    if (!trainingDay) throw ErrorHandled.errorNotFound("Training day not found");

    return trainingDay;
  }

  async deleteOneById(id: string) {
    const trainingDay = await prisma.trainingDay.delete({
      where: { id },
    });

    if (!trainingDay) throw ErrorHandled.errorNotFound("Training day not found");
    return trainingDay;
  }

  async addTrainingDayHour(trainingDayId: string, trainingDayHourId: string) {
    const trainingDay = await prisma.trainingDay.update({
      where: { id: trainingDayId },
      data: {
        trainingDayHours: {
          connect: { id: trainingDayHourId },
        },
      },
    });

    if (!trainingDay) throw ErrorHandled.errorNotFound("Training day not found");
    return trainingDay;
  }
}
