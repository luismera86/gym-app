import { PrismaClient } from "@prisma/client";
import { CustomError } from "../shared/utils/customError";

const prisma = new PrismaClient();

export class RoleService {

  async getAll() {

    const roles = await prisma.role.findMany({
      include: {
        users: true,
      }
    });
    if (!roles) throw new CustomError("No roles found", 404);
    return roles;
  }

  async getOneById(id: string) {
    const role = await prisma.role.findUnique({
      where: { id },
    });
    if (!role) throw new CustomError("Role not found", 404);
    return role;
  }

  async createOne(data: any) {
    const role = await prisma.role.create({
      data,
    });
    if (!role) throw new Error("Role not created");
    return role;
  }

  async updateOneById(id: string, data: any) {
    const role = await prisma.role.update({
      where: { id },
      data,
    });
    if (!role) throw new Error("Role not updated");
    return role;
  }

  async deleteOneById(id: string) {
    const role = await prisma.role.delete({
      where: { id },
    });
    if (!role) throw new Error("Role not deleted");
    return role;
  }

}