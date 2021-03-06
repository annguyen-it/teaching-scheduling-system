import { ManagingClassDta } from '@teaching-scheduling-system/web/shared/data-access/dta';

export class ManagingClass {
  public readonly academicYear!: number;
  public readonly name!: string;
  public readonly faculty!: string;

  public static parse(obj: ManagingClassDta): ManagingClass {
    return {
      academicYear: obj.id_academic_year,
      name: obj.id_class,
      faculty: obj.id_faculty,
    };
  }
}
