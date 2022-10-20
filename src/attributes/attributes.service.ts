import { ForbiddenException, Injectable } from "@nestjs/common";
import { ParentKey, setParentKey } from "src/data/parentKey";
import { RelationshipKey, setRelationshipKey } from "src/data/relationshipKey";
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaService2 } from "src/prisma/prisma2.service";
import { CreateAttributeDto, EditAttributeDto } from "./dto";

@Injectable()
export class AttributesService {
  constructor(private prisma: PrismaService, private prisma2: PrismaService2) {}

  async create(dto: CreateAttributeDto) {
    const attribute = this.prisma.attribute.create({
      data: {
        name: dto.name,
        type: dto.type,
        description: dto.description,
        owner: {
          connect: {
            id: dto.tableId,
          },
        },
      },
    });
    return attribute;
  }

  async getAll() {
    const attributes = await this.prisma.attribute.findMany();
    return attributes;
  }

  async getOne(id: number) {
    const attribute = await this.prisma.attribute.findUnique({
      where: {
        id: id,
      },
    });
    return attribute;
  }

  async getByTableId(id: number) {
    const attribute = await this.prisma.attribute.findMany({
      where: {
        tableId: id,
      },
    });
    return attribute;
  }

  async delete(id: number) {
    const attribute = this.prisma.attribute.delete({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return attribute;
  }

  async deleteAll() {
    const attribute = this.prisma.attribute.deleteMany();
    return attribute;
  }

  async deleteOfTable(id: number) {
    const attribute = this.prisma.attribute.deleteMany({
      where: {
        tableId: id,
      },
    });
    return attribute;
  }

  async edit(id: number, dto: EditAttributeDto) {
    const attribute = this.prisma.attribute.update({
      where: {
        id: id,
      },
      data: {
        name: dto.name,
        type: dto.type,
        description: dto.description,
      },
    });
    return attribute;
  }

  async findName(tableName: string) {
    const table = await this.prisma.attribute.findMany({
      where: {
        fTable: tableName,
      },
    });
    return table;
  }
  async init() {
    const tables = await this.prisma.table.findMany();
    const attributes = await this.prisma.attribute.findMany();

    const allAttributes = [];
    attributes.map((attribute) => {
      tables.map((table) => {
        if (table.name === attribute.fTable) {
          attributes.map((key) => {
            if (key.tableId === table.id && key.pKey) {
              allAttributes.push({
                id: attribute.id,
                pColumn: key.name,
              });
            }
          });
        }
      });
      Object.keys(RelationshipKey).forEach(async function (key, index) {
        if (
          RelationshipKey[key].name.includes(attribute.name) &&
          attribute.type === "bigint"
        ) {
          allAttributes.push({
            id: attribute.id,
            pColumn: "PK",
            fTable: RelationshipKey[key].tableName,
          });
        }
      });

      Object.keys(ParentKey).forEach(async function (key) {
        if (
          attribute.name === "parentPK" &&
          ParentKey[key].name.includes(attribute.tableName) &&
          attribute.type === "bigint"
        ) {
          allAttributes.push({
            id: attribute.id,
            pColumn: "PK",
            fTable: ParentKey[key].parent,
          });
        }
      });
    });
    return Promise.all(
      allAttributes.map((all) => {
        if (all.fTable) {
          const att = this.prisma.attribute.update({
            where: {
              id: all.id,
            },
            data: {
              pColumn: all.pColumn,
              fTable: all.fTable,
            },
            select: {
              name: true,
            },
          });
          return att;
        } else {
          const att = this.prisma.attribute.update({
            where: {
              id: all.id,
            },
            data: {
              pColumn: all.pColumn,
            },
            select: {
              name: true,
            },
          });
          return att;
        }
      })
    );
  }

  async importDbAttribute(data: any) {
    const attributes = [];
    console.log(data.length);
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i]["Name"]) {
        const attribute = await this.prisma.attribute.create({
          data: {
            name: data[i]["Name"],
            type: data[i].Type,
            pKey: data[i]["Primary key"],
            fTable: data[i]["Foreign table"],
            indexName: data[i]["Index name"],
            tableName: data[i]["Table name"],
            pColumn: data[i]["Table name"],
            description: data[i]["Description"],
            owner: {
              connect: {
                name: data[i]["Table name"],
              },
            },
          },
        });

        attributes.push(attribute);
      }
    }
    return attributes;
  }

  async exportRelations() {
    return { RelationshipKey: RelationshipKey, ParentKey: ParentKey };
  }

  async importRelations(data: any) {
    setParentKey(data[0]);
    setRelationshipKey(data[1]);
    return { RelationshipKey: RelationshipKey, ParentKey: ParentKey };
  }
}
