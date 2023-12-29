import { PrismaClient } from "@prisma/client";
import { ErrorHandled } from "../utils/errorHandled";

const prisma = new PrismaClient();

export class RoleService {

  async getAll() {

    const roles = await prisma.role.findMany({
      include: {
        users: true,
      }
    });
    if (!roles) throw ErrorHandled.errorNotFound("Roles not found");
    return roles;
  }

  async getOneById(id: string) {
    const role = await prisma.role.findUnique({
      where: { id },
    });
    if (!role) throw ErrorHandled.errorNotFound("Role not found");
    return role;
  }

  async createOne(data: any) {
    const role = await prisma.role.create({
      data,
    });
    if (!role) throw ErrorHandled.errorBadRequest("Role not created");
    return role;
  }

  async updateOneById(id: string, data: any) {
    const role = await prisma.role.update({
      where: { id },
      data,
    });
    if (!role) throw ErrorHandled.errorBadRequest("Role not updated");
    return role;
  }

  async deleteOneById(id: string) {
    const role = await prisma.role.delete({
      where: { id },
    });
    if (!role) throw ErrorHandled.errorBadRequest("Role not deleted");
    return role;
  }

}