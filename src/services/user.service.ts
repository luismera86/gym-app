import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class UserService {
  
  getAll() {

    return prisma.user.findMany()

  }

  getById(id: string) {

    return prisma.user.findUnique({
      where: {
        id: id
      }
    })

  }

  create(data: any) {

    return prisma.user.create({
      data,
      include: {
        trainingDays: true
      },
    
    })
  }

  update(id: string, data: any) {

    return prisma.user.update({
      where: {
        id: id
      },
      data
    })

  }

  delete(id: string) {

    return prisma.user.delete({
      where: {
        id: id
      }
    })

  }

  addTrainingDay(userId: string, trainingDayId: string) {
    // Agregamos un trainingDay a un usuario
    return prisma.user.update({
      where: {
        id: userId
      },
      data: {
        trainingDays: {
          connect: {
            id: trainingDayId
          }
        }
      }
    })
  }

  removeTrainingDay(userId: string, trainingDayId: string) {
    // Eliminamos un trainingDay a un usuario
    return prisma.user.update({
      where: {
        id: userId
      },
      data: {
        trainingDays: {
          disconnect: {
            id: trainingDayId
          }
        }
      }
    })
  }

  addSubscription(userId: string, subscriptionId: string) {
    // Agregamos una suscripcion a un usuario
    return prisma.user.update({
      where: {
        id: userId
      },
      data: {
        subscription: {
          connect: {
            id: subscriptionId
          }
        }
      }
    })
  }
}