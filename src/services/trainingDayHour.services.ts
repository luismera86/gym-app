import { PrismaClient } from "@prisma/client";
import { ErrorHandled } from "../utils/errorHandled";

const prisma = new PrismaClient();

export class TrainingDayHourServices {

  getAll = async () => {
    const trainingDayHour = await prisma.trainingDayHour.findMany();
    if (!trainingDayHour) throw ErrorHandled.errorNotFound("TrainingDayHour not found");
    return trainingDayHour;
  }

  getOneById = async (id: string) => {
    const trainingDayHour = await prisma.trainingDayHour.findUnique({
      where: { id },
    });
    if (!trainingDayHour) throw ErrorHandled.errorNotFound("TrainingDayHour not found");

    return trainingDayHour;
  }

  createOne = async (data: any) => {
    try {
      const trainingDayHour = await prisma.trainingDayHour.create({
        data
      });

      return trainingDayHour;
    } catch (error) {
      console.error(error);
      throw ErrorHandled.errorBadRequest("TrainingDayHour not created");
    }
  }

  generateTrainingDayHours = async (idTrainingDay: string, hour: string) => {
    const trainingDayHour = await prisma.trainingDayHour.create({
      data: {
        trainingDay: {
          connect: {
            id: idTrainingDay
          }
        },
        hour
      }
    });

    if (!trainingDayHour) throw ErrorHandled.errorNotFound("TrainingDayHour not found");

    return trainingDayHour;
  }

  updateOneById = async (id: string, data: any) => {
    const trainingDayHour = await prisma.trainingDayHour.update({
      where: { id },
      data,
    });
    if (!trainingDayHour) throw ErrorHandled.errorNotFound("TrainingDayHour not found");

    return trainingDayHour;
  }

  deleteOneById = async (id: string) => {
    const trainingDayHour = await prisma.trainingDayHour.delete({
      where: { id },
    });
    if (!trainingDayHour) throw ErrorHandled.errorNotFound("TrainingDayHour not found");

    return trainingDayHour;
  }

}