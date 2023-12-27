import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class RoleService {

  async getAll() {

    const roles = await prisma.role.findMany({
      include: {
        users: true,
      }
    });
    if (!roles) throw new Error("No roles found");
    return roles;
  }

  async getOneById(id: string) {
    const role = await prisma.role.findUnique({
      where: { id },
    });
    if (!role) throw new Error("No role found");
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