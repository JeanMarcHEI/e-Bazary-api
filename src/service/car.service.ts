import { Car, Images } from "@prisma/client";
import { prismaClient } from "../config/prisma";

export const carService = {
  create: (car: Car): Promise<Car> => {
    return prismaClient.car.create({
      data: car,
    });
  },
  getAll: (): Promise<Car[]> =>
    prismaClient.car.findMany({
      include: {
        brand: true,
      },
    }),
  getById: (id: string): Promise<Car | null> =>
    prismaClient.car.findUnique({
      where: {
        id: parseInt(id),
      },
    }),
  update: (id: string, car: Car): Promise<Car> =>
    prismaClient.car.update({
      where: {
        id: parseInt(id),
      },
      data: car,
    }),
  delete: (id: string): Promise<Car> =>
    prismaClient.car.delete({
      where: {
        id: parseInt(id),
      },
    }),
};
