import { PrismaClient } from "@prisma/client";
import { ErrorHandled } from "../utils/errorHandled";

const prisma = new PrismaClient();

export class TrainingDayHourServices {

  getAll = async () => {
    const trainingDayHour = await prisma.trainingDayHour.findMany({
      include: {
        trainingDay: true,
        users: true,
      },
    
    });
    if (!trainingDayHour) throw ErrorHandled.errorNotFound("TrainingDayHour not found");
    return trainingDayHour;
  }

  getOneById = async (id: string) => {
    const trainingDayHour = await prisma.trainingDayHour.findUnique({
      where: { id },
      include: {
        trainingDay: true,
        users: true,
      },
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

  generateTrainingDayHours = async (idTrainingDay: string) => {
    const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "17:00", "18:00", "19:00", "20:00", "21:00"];

    const trainingDayHour = hours.map(async (hour) => {
      await this.createOne({
        trainingDayId: idTrainingDay,
        hour,
      });
    } );

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