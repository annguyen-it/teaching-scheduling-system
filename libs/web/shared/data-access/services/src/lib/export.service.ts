import { DatePipe } from '@angular/common';
import { Inject, Injectable, Injector } from '@angular/core';
import { TuiDayRange } from '@taiga-ui/cdk';
import { saveAs } from 'file-saver';
import {
  ChangeSchedule,
  SimpleTeacher,
  Teacher,
} from '@teaching-scheduling-system/web/shared/data-access/models';
import {
  DateHelper,
  ChangeStatusHelper,
} from '@teaching-scheduling-system/core/utils/helpers';
import {
  AlignmentType,
  Document,
  Packer,
  PageOrientation,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
  VerticalAlign,
  SectionType,
  ColumnBreak,
  BorderStyle,
  ITableBordersOptions,
  IStylesOptions,
} from 'docx';
import { FileType } from '@teaching-scheduling-system/web/shared/data-access/enums';
import { TokenService } from './core/token.service';
import { RoleConstant } from '@teaching-scheduling-system/core/data-access/constants';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  /** PRIVATE PROPERTIES */
  private readonly datePipe: DatePipe;

  /** GETTERS */
  private get documentStyle(): IStylesOptions {
    return {
      default: {
        document: {
          run: {
            size: 24,
          },
          paragraph: {
            spacing: {
              after: 160,
              line: 260,
            },
          },
        },
      },
    };
  }

  private get borderNone(): ITableBordersOptions {
    return {
      insideHorizontal: {
        style: BorderStyle.NONE,
      },
      insideVertical: {
        style: BorderStyle.NONE,
      },
      top: {
        style: BorderStyle.NONE,
      },
      right: {
        style: BorderStyle.NONE,
      },
      bottom: {
        style: BorderStyle.NONE,
      },
      left: {
        style: BorderStyle.NONE,
      },
    };
  }

  /** CONSTRUCTOR */
  constructor(
    private readonly tokenService: TokenService,
    @Inject(Injector) injector: Injector
  ) {
    this.datePipe = injector.get(
      this.tokenService.getToken<DatePipe>('datePipe')
    );
  }

  /** PUBLIC METHODS */
  public exportBlob(settings: {
    document: Document;
    name: string;
    mimeType: FileType;
  }): void {
    void Packer.toBlob(settings.document).then((blob) => {
      const docBlob = blob.slice(0, blob.size, settings.mimeType);
      saveAs(docBlob, settings.name);
    });
  }

  public exportChangeScheduleRequestForTeacher(
    schedules: ChangeSchedule[],
    teacherName: string,
    department: string,
    reason: string
  ): Document {
    const alignment = AlignmentType.CENTER;
    const today = new Date();
    const page = {
      size: {
        orientation: PageOrientation.LANDSCAPE,
      },
      margin: {
        top: '1.25cm',
        bottom: '0.5cm',
      },
    };

    return new Document({
      styles: this.documentStyle,
      sections: [
        {
          properties: {
            page,
          },
          children: [
            new Paragraph({
              alignment,
              spacing: {
                after: 0,
              },
              children: [
                new TextRun({
                  text: 'C???ng h??a x?? h???i ch??? ngh??a Vi???t Nam',
                  bold: true,
                  allCaps: true,
                }),
                new TextRun({
                  break: 1,
                  text: '?????c l???p ??? T??? do ??? H???nh ph??c',
                  bold: true,
                }),
                new TextRun({
                  break: 1,
                  text: '-----------------------------------',
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              alignment,
              spacing: {
                before: 320,
                after: 320,
              },
              children: [
                new TextRun({
                  text: 'Gi???y xin thay ?????i th???i kh??a bi???u ho???c d???y b??',
                  bold: true,
                  allCaps: true,
                }),
              ],
            }),
            new Paragraph({
              indent: {
                firstLine: '0.5in',
              },
              spacing: {
                line: 375,
              },
              children: [
                new TextRun({
                  text: 'K??nh g???i: ',
                  italics: true,
                }),
                new TextRun({
                  text: 'Ban Qu???n l?? Gi???ng ???????ng',
                }),
                new TextRun({
                  break: 1,
                  text: `H??? v?? t??n gi???ng vi??n: ${teacherName}`,
                }),
                new TextRun({
                  break: 1,
                  text: `B??? m??n: ${department}`,
                }),
                new TextRun({
                  break: 1,
                  text: `L?? do thay ?????i: ${reason}`,
                }),
              ],
            }),
            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      rowSpan: 2,
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          text: 'STT',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      rowSpan: 2,
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          text: 'L???p h???c ph???n',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      rowSpan: 2,
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          text: 'S?? s???',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      columnSpan: 3,
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing: {
                            before: 120,
                            after: 120,
                          },
                          text: 'L???ch c??',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      columnSpan: 3,
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          text: 'L???ch m???i',
                          alignment,
                        }),
                      ],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      width: {
                        size: 12.5,
                        type: WidthType.PERCENTAGE,
                      },
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing: {
                            before: 120,
                            after: 120,
                          },
                          text: 'Th???i gian',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      width: {
                        size: 4,
                        type: WidthType.PERCENTAGE,
                      },
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          text: 'Ca',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      width: {
                        size: 12.5,
                        type: WidthType.PERCENTAGE,
                      },
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          text: 'Ph??ng',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      width: {
                        size: 12.5,
                        type: WidthType.PERCENTAGE,
                      },
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          text: 'Th???i gian',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      width: {
                        size: 4,
                        type: WidthType.PERCENTAGE,
                      },
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          text: 'Ca',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      width: {
                        size: 15,
                        type: WidthType.PERCENTAGE,
                      },
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          text: 'Ph??ng',
                          alignment,
                        }),
                      ],
                    }),
                  ],
                }),
                ...schedules.map(
                  (schedule, index) =>
                    new TableRow({
                      children: [
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          children: [
                            new Paragraph({
                              spacing: {
                                after: 0,
                              },
                              text: `${index + 1}`,
                              alignment,
                            }),
                          ],
                        }),
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          children: [
                            new Paragraph({
                              spacing: {
                                before: 160,
                              },
                              indent: {
                                firstLine: '0.1in',
                              },
                              text: schedule.moduleClassName,
                            }),
                          ],
                        }),
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          children: [
                            new Paragraph({
                              alignment,
                              spacing: {
                                before: 160,
                              },
                              text: `${
                                schedule.moduleClassNumberReality || ''
                              }`,
                            }),
                          ],
                        }),
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          children: [
                            new Paragraph({
                              spacing: {
                                after: 0,
                              },
                              text:
                                this.datePipe.transform(
                                  schedule.oldSchedule.date,
                                  'dd-MM-Y'
                                ) ?? schedule.oldSchedule.date,
                              alignment,
                            }),
                          ],
                        }),
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          children: [
                            new Paragraph({
                              spacing: {
                                after: 0,
                              },
                              text: schedule.oldSchedule.shift,
                              alignment,
                            }),
                          ],
                        }),
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          children: [
                            new Paragraph({
                              spacing: {
                                after: 0,
                              },
                              text: schedule.oldSchedule.room,
                              alignment,
                            }),
                          ],
                        }),
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          children: [
                            new Paragraph({
                              spacing: {
                                after: 0,
                              },
                              text:
                                this.datePipe.transform(
                                  schedule.newSchedule.date,
                                  'dd-MM-Y'
                                ) ??
                                schedule.newSchedule.date ??
                                schedule.intendTime ??
                                '',
                              alignment,
                            }),
                          ],
                        }),
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          children: [
                            new Paragraph({
                              spacing: {
                                after: 0,
                              },
                              text: schedule.newSchedule.shift ?? '',
                              alignment,
                            }),
                          ],
                        }),
                        new TableCell({
                          verticalAlign: VerticalAlign.CENTER,
                          children: [
                            new Paragraph({
                              spacing: {
                                after: 0,
                              },
                              text: schedule.newSchedule.room ?? '',
                              alignment,
                            }),
                          ],
                        }),
                      ],
                    })
                ),
              ],
            }),
            new Paragraph({
              spacing: {
                before: 280,
              },
              indent: {
                firstLine: '0.5in',
              },
              children: [
                new TextRun({
                  text: 'Tr??n tr???ng c???m ??n!',
                  italics: true,
                  bold: true,
                }),
              ],
            }),
          ],
        },
        {
          properties: {
            page,
            type: SectionType.CONTINUOUS,
          },
          children: [
            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              borders: this.borderNone,
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      width: {
                        size: 33.33,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [new Paragraph({})],
                    }),
                    new TableCell({
                      width: {
                        size: 33.33,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [new Paragraph({})],
                    }),
                    new TableCell({
                      width: {
                        size: 33.33,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          alignment,
                          children: [
                            new TextRun({
                              text: `H?? N???i, ng??y ${DateHelper.beautifyDay(
                                today.getDate()
                              )} th??ng ${DateHelper.beautifyDay(
                                today.getMonth() + 1
                              )} n??m ${today.getFullYear()}`,
                              italics: true,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          alignment,
                          children: [
                            new TextRun({
                              text: '?? ki???n c???a b??? m??n',
                            }),
                          ],
                        }),
                      ],
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          alignment,
                          children: [
                            new TextRun({
                              text: '?? ki???n c???a ??i???u ?????',
                            }),
                          ],
                        }),
                      ],
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          alignment,
                          children: [
                            new TextRun({
                              text: 'Gi???ng vi??n',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph({})] }),
                    new TableCell({ children: [new Paragraph({})] }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          alignment,
                          spacing: {
                            before: 280,
                          },
                          children: [
                            new TextRun({
                              break: 5,
                              text: teacherName,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        },
      ],
    });
  }

  public exportChangeScheduleRequestForRoomManager(
    schedule: ChangeSchedule,
    teacher: SimpleTeacher
  ): Document {
    const alignment = AlignmentType.CENTER;
    const today = new Date();
    const spacing = {
      after: 0,
    };

    return new Document({
      styles: this.documentStyle,
      sections: [
        {
          children: [
            new Paragraph({
              alignment,
              spacing,
              children: [
                new TextRun({
                  text: 'C???ng h??a x?? h???i ch??? ngh??a Vi???t Nam',
                  bold: true,
                  allCaps: true,
                }),
                new TextRun({
                  break: 1,
                  text: '?????c l???p ??? T??? do ??? H???nh ph??c',
                  bold: true,
                }),
                new TextRun({
                  break: 1,
                  text: '-----------------------------------',
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              alignment,
              spacing: {
                before: 320,
                after: 320,
              },
              children: [
                new TextRun({
                  text: 'Gi???y ????ng k?? ph??ng h???c',
                  bold: true,
                  allCaps: true,
                }),
              ],
            }),
            new Paragraph({
              indent: {
                firstLine: '0.5in',
              },
              spacing: {
                line: 375,
              },
              children: [
                new TextRun({
                  text: 'K??nh g???i: ',
                  italics: true,
                }),
                new TextRun({
                  text: '??i???u ????? - Ban Qu???n l?? Gi???ng ???????ng',
                }),
                new TextRun({
                  break: 2,
                  text: `H??? v?? t??n gi???ng vi??n: ${schedule.teacher.name}`,
                }),
                new TextRun({
                  break: 1,
                  text: `S??? ??i???n tho???i: ${teacher.phone || ''}`,
                }),
                new TextRun({
                  break: 1,
                  text: `B??? m??n: ${teacher.department.name}`,
                }),
                new TextRun({
                  break: 1,
                  text: `Khoa: ${teacher.faculty.name}`,
                }),
              ],
            }),
            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'STT',
                              bold: true,
                            }),
                          ],
                          spacing,
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing,
                          children: [
                            new TextRun({
                              text: 'Ng??y s??? d???ng',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Ca',
                              bold: true,
                            }),
                          ],
                          spacing: {
                            before: 120,
                            after: 120,
                          },
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'S?? s???',
                              bold: true,
                            }),
                          ],
                          spacing,
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'L?? do s??? d???ng',
                              bold: true,
                            }),
                          ],
                          spacing,
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Ph??ng h???c',
                              bold: true,
                            }),
                          ],
                          spacing,
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Ph??ng n?????c',
                              bold: true,
                            }),
                          ],
                          spacing,
                          alignment,
                        }),
                      ],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: '(1)',
                              bold: true,
                            }),
                          ],
                          spacing,
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [new Paragraph({ spacing, alignment })],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: '(3)',
                              bold: true,
                            }),
                          ],
                          spacing,
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: '(4)',
                              bold: true,
                            }),
                          ],
                          spacing,
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: '(5)',
                              bold: true,
                            }),
                          ],
                          spacing,
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: '(6)',
                              bold: true,
                            }),
                          ],
                          spacing,
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: '(7)',
                              bold: true,
                            }),
                          ],
                          spacing,
                          alignment,
                        }),
                      ],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({ spacing, text: '1', alignment }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          alignment,
                          spacing: {
                            before: 160,
                          },
                          indent: {
                            firstLine: '0.1in',
                          },
                          text:
                            this.datePipe.transform(
                              schedule.newSchedule.date,
                              'dd/MM/Y'
                            ) ??
                            schedule.newSchedule.date ??
                            '',
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing,
                          text: schedule.newSchedule.shift ?? '',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing,
                          text: '50',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          indent: {
                            firstLine: '0.1in',
                          },
                          spacing,
                          text: schedule.reason,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing,
                          text: schedule.newSchedule.room ?? '',
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          spacing,
                          text: 'Ph??ng n?????c',
                          alignment,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              spacing: {
                before: 160,
                after: 0,
              },
              children: [
                new TextRun({
                  break: 2,
                  text: `H?? N???i, ng??y ${DateHelper.beautifyDay(
                    today.getDate()
                  )} th??ng ${DateHelper.beautifyDay(
                    today.getMonth() + 1
                  )} n??m ${today.getFullYear()}`,
                  italics: true,
                }),
              ],
            }),
          ],
        },
        {
          properties: {
            column: {
              count: 2,
              equalWidth: true,
            },
            type: SectionType.CONTINUOUS,
          },
          children: [
            new Paragraph({
              alignment,
              spacing: {
                before: 280,
              },
              children: [
                new TextRun({
                  text: 'Ng?????i ????ng k?? ph??ng',
                }),
                new TextRun({
                  break: 5,
                  text: schedule.teacher.name,
                }),
                new ColumnBreak(),
                new TextRun({
                  text: 'X??c nh???n c???a ??i???u ?????',
                }),
                new TextRun({
                  break: 5,
                  text: 'Khu???t Minh Ph??c',
                }),
              ],
            }),
          ],
        },
        {
          properties: {
            type: SectionType.CONTINUOUS,
          },
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  break: 2,
                  text: 'L??u ??',
                  bold: true,
                  underline: {},
                  italics: true,
                }),
                new TextRun({
                  break: 1,
                  text: 'GV g???i gi???y theo c???t (7) ?????n "Ph??ng n?????c" ??t nh???t tr?????c 01 ng??y',
                  italics: true,
                }),
              ],
            }),
          ],
        },
      ],
    });
  }

  public exportChangeScheduleStatistic(
    schedules: ChangeSchedule[],
    teacher: Teacher,
    range: TuiDayRange,
    rangeOptions: { sameMonth: boolean; inOneYear: boolean }
  ): Document {
    const rangeText = this.calculateRangeText(range, rangeOptions);
    const today = new Date();
    const alignment = AlignmentType.CENTER;
    const verticalAlign = VerticalAlign.CENTER;
    const page = {
      margin: {
        top: '0.7in',
        right: '0.6in',
        bottom: '0.7in',
        left: '0.6in',
      },
    };
    const width = {
      size: 18,
      type: WidthType.PERCENTAGE,
    };

    return new Document({
      styles: this.documentStyle,
      sections: [
        {
          properties: {
            page,
          },
          children: [
            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              borders: this.borderNone,
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      verticalAlign,
                      width: {
                        size: 45,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          alignment,
                          children: [
                            new TextRun({
                              text: `Khoa ${teacher.faculty.name}`,
                            }),
                            new TextRun({
                              break: 1,
                              text: `B??? m??n ${teacher.department.name}`,
                              bold: true,
                            }),
                            new TextRun({
                              break: 1,
                              text: '_______________________',
                              bold: true,
                            }),
                          ],
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign,
                      width: {
                        size: 5,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [],
                    }),
                    new TableCell({
                      verticalAlign,
                      width: {
                        size: 50,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          alignment,
                          children: [
                            new TextRun({
                              text: 'C???ng h??a x?? h???i ch??? ngh??a Vi???t Nam',
                              allCaps: true,
                            }),
                            new TextRun({
                              break: 1,
                              text: '?????c l???p ??? T??? do ??? H???nh ph??c',
                            }),
                            new TextRun({
                              break: 1,
                              text: '_______________________',
                              bold: true,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.END,
              spacing: {
                before: 320,
                after: 320,
              },
              children: [
                new TextRun({
                  text: `H?? N???i, ng??y ${DateHelper.beautifyDay(
                    today.getDate()
                  )} th??ng ${DateHelper.beautifyDay(
                    today.getMonth() + 1
                  )} n??m ${today.getFullYear()}`,
                  italics: true,
                }),
              ],
            }),
            new Paragraph({
              alignment,
              spacing: {
                before: 320,
                after: 320,
              },
              children: [
                new TextRun({
                  text: 'T??? tr??nh',
                  allCaps: true,
                  size: 34,
                }),
                new TextRun({
                  break: 1,
                  italics: true,
                  text: `(V/v thay ?????i l???ch d???y ${rangeText})`,
                  size: 26,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                line: 250,
              },
              children: [
                new TextRun({
                  text: 'K??nh g???i:',
                  size: 26,
                  bold: true,
                  underline: {},
                }),
                new TextRun({
                  text: ' Ph??ng Thanh tra Ph??p ch???',
                  size: 26,
                  bold: true,
                }),
                new TextRun({
                  break: 2,
                  text: `B??? m??n ${teacher.department.name} xin g???i t???i ph??ng Thanh tra Ph??p ch??? thay ?????i l???ch gi???ng d???y trong b??? m??n ${rangeText}:`,
                }),
                new TextRun({ break: 1 }),
              ],
            }),
            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      margins: {
                        top: 100,
                        bottom: 100,
                      },
                      verticalAlign,
                      width: {
                        size: 6,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          children: [
                            new TextRun({
                              text: 'STT',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign,
                      width,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          children: [
                            new TextRun({
                              text: 'Ng??y, ca, ph??ng',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign,
                      width,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          children: [
                            new TextRun({
                              text: 'L???p - M??n',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign,
                      width: {
                        size: 17,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          children: [
                            new TextRun({
                              text: 'Gi??o vi??n',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign,
                      width,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          children: [
                            new TextRun({
                              text: 'L?? do',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign,
                      width: {
                        size: 22,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          children: [
                            new TextRun({
                              text: 'Ng??y, Ph??ng d???y b??',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                  ],
                }),
                ...schedules
                  .filter((schedule) =>
                    ChangeStatusHelper.isApproved(schedule.status)
                  )
                  .map(
                    (schedule, row) =>
                      new TableRow({
                        children: [
                          new TableCell({
                            verticalAlign,
                            children: [
                              new Paragraph({
                                spacing: {
                                  after: 0,
                                },
                                text: `${row + 1}`,
                                alignment,
                              }),
                            ],
                          }),
                          new TableCell({
                            verticalAlign,
                            children: [
                              new Paragraph({
                                spacing: {
                                  after: 0,
                                },
                                text: `${
                                  this.datePipe.transform(
                                    schedule.oldSchedule.date,
                                    'dd/MM/Y'
                                  ) ?? schedule.oldSchedule.date
                                }, ca ${schedule.oldSchedule.shift}, ${
                                  schedule.oldSchedule.room
                                }`,
                                alignment,
                              }),
                            ],
                          }),
                          new TableCell({
                            verticalAlign,
                            children: [
                              new Paragraph({
                                spacing: {
                                  after: 0,
                                },
                                text: schedule.moduleClassName,
                                alignment,
                              }),
                            ],
                          }),
                          new TableCell({
                            verticalAlign,
                            children: [
                              new Paragraph({
                                spacing: {
                                  after: 0,
                                },
                                text: schedule.teacher.name,
                                alignment,
                              }),
                            ],
                          }),
                          new TableCell({
                            verticalAlign,
                            children: [
                              new Paragraph({
                                spacing: {
                                  after: 0,
                                },
                                text: schedule.reason,
                                alignment,
                              }),
                            ],
                          }),
                          new TableCell({
                            verticalAlign,
                            children: [
                              new Paragraph({
                                alignment,
                                spacing: {
                                  after: 0,
                                },
                                children: schedule.newSchedule.date
                                  ? [
                                      new TextRun({
                                        text: `${
                                          this.datePipe.transform(
                                            schedule.newSchedule.date,
                                            'dd/MM/Y'
                                          ) ?? schedule.newSchedule.date
                                        }, ca ${
                                          schedule.newSchedule.shift ?? ''
                                        },`,
                                      }),
                                      new TextRun({
                                        break: 1,
                                        text: `${
                                          schedule.newSchedule.room ?? ''
                                        }`,
                                      }),
                                    ]
                                  : [
                                      new TextRun({
                                        text: schedule.intendTime ?? '',
                                      }),
                                    ],
                              }),
                            ],
                          }),
                        ],
                      })
                  ),
              ],
            }),
            new Paragraph({
              spacing: {
                before: 280,
              },
              children: [
                new TextRun({
                  text: 'K??nh mong ph??ng Thanh tra Ph??p ch??? c???p nh???t gi??p!',
                }),
                new TextRun({
                  break: 1,
                  text: 'Xin tr??n tr???ng c???m ??n!',
                }),
              ],
            }),
          ],
        },
        {
          properties: {
            column: {
              count: 2,
              equalWidth: true,
            },
            page,
            type: SectionType.CONTINUOUS,
          },
          children: [
            new Paragraph({
              alignment,
              spacing: {
                before: 280,
              },
              children: [
                new ColumnBreak(),
                new TextRun({
                  text:
                    teacher.idRole === RoleConstant.DEPARTMENT_HEAD
                      ? 'Tr?????ng b??? m??n'
                      : teacher.idRole === RoleConstant.DEPARTMENT_DEPUTY_HEAD
                      ? 'P. Tr?????ng b??? m??n'
                      : 'Ng?????i l??m ????n',
                }),
                new TextRun({
                  break: 5,
                  text: teacher.name,
                }),
              ],
            }),
          ],
        },
      ],
    });
  }

  public exportPersonalChangeScheduleStatistic(
    schedules: ChangeSchedule[],
    teacher: Teacher,
    range: TuiDayRange,
    rangeOptions: { sameMonth: boolean; inOneYear: boolean }
  ): Document {
    const rangeText = rangeOptions.sameMonth
      ? `th??ng ${DateHelper.beautifyDay(range.from.month + 1)}/${
          range.from.year
        }`
      : rangeOptions.inOneYear
      ? `n??m ${range.from.year}`
      : `t??? ${DateHelper.beautifyDay(range.from.day)}/${DateHelper.beautifyDay(
          range.from.month + 1
        )}/${range.from.year} ?????n ${DateHelper.beautifyDay(
          range.to.day
        )}/${DateHelper.beautifyDay(range.to.month + 1)}/${range.to.year}`;
    const today = new Date();
    const alignment = AlignmentType.CENTER;
    const verticalAlign = VerticalAlign.CENTER;
    const page = {
      margin: {
        top: '0.7in',
        right: '0.6in',
        bottom: '0.7in',
        left: '0.6in',
      },
    };
    const width = {
      size: 18,
      type: WidthType.PERCENTAGE,
    };

    return new Document({
      styles: this.documentStyle,
      sections: [
        {
          properties: {
            page,
          },
          children: [
            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              borders: this.borderNone,
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      verticalAlign,
                      width: {
                        size: 45,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          alignment,
                          children: [
                            new TextRun({
                              text: `Khoa ${teacher.faculty.name}`,
                            }),
                            new TextRun({
                              break: 1,
                              text: `B??? m??n ${teacher.department.name}`,
                              bold: true,
                            }),
                            new TextRun({
                              break: 1,
                              text: '_______________________',
                              bold: true,
                            }),
                          ],
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign,
                      width: {
                        size: 5,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [],
                    }),
                    new TableCell({
                      verticalAlign,
                      width: {
                        size: 50,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          alignment,
                          children: [
                            new TextRun({
                              text: 'C???ng h??a x?? h???i ch??? ngh??a Vi???t Nam',
                              allCaps: true,
                            }),
                            new TextRun({
                              break: 1,
                              text: '?????c l???p ??? T??? do ??? H???nh ph??c',
                            }),
                            new TextRun({
                              break: 1,
                              text: '_______________________',
                              bold: true,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.END,
              spacing: {
                before: 320,
                after: 320,
              },
              children: [
                new TextRun({
                  text: `H?? N???i, ng??y ${DateHelper.beautifyDay(
                    today.getDate()
                  )} th??ng ${DateHelper.beautifyDay(
                    today.getMonth() + 1
                  )} n??m ${today.getFullYear()}`,
                  italics: true,
                }),
              ],
            }),
            new Paragraph({
              alignment,
              spacing: {
                before: 320,
                after: 320,
              },
              children: [
                new TextRun({
                  text: 'Th???ng k?? thay ?????i gi??? gi???ng',
                  allCaps: true,
                  size: 34,
                }),
                new TextRun({
                  break: 1,
                  italics: true,
                  text: `(${rangeText})`,
                  size: 26,
                }),
              ],
            }),
            new Paragraph({
              spacing: {
                line: 250,
              },
              children: [
                new TextRun({
                  text: `Gi???ng vi??n: ${teacher.name}`,
                  size: 26,
                }),
                new TextRun({ break: 1 }),
              ],
            }),
            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      margins: {
                        top: 100,
                        bottom: 100,
                      },
                      verticalAlign,
                      width: {
                        size: 6,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          children: [
                            new TextRun({
                              text: 'STT',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign,
                      width,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          children: [
                            new TextRun({
                              text: 'Ng??y, ca, ph??ng',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign,
                      width,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          children: [
                            new TextRun({
                              text: 'L???p - M??n',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign,
                      width,
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          children: [
                            new TextRun({
                              text: 'L?? do',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                    new TableCell({
                      verticalAlign,
                      width: {
                        size: 22,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          spacing: {
                            after: 0,
                          },
                          children: [
                            new TextRun({
                              text: 'Ng??y, Ph??ng d???y b??',
                              bold: true,
                            }),
                          ],
                          alignment,
                        }),
                      ],
                    }),
                  ],
                }),
                ...schedules
                  .filter((schedule) =>
                    ChangeStatusHelper.isApproved(schedule.status)
                  )
                  .map(
                    (schedule, row) =>
                      new TableRow({
                        children: [
                          new TableCell({
                            verticalAlign,
                            children: [
                              new Paragraph({
                                spacing: {
                                  after: 0,
                                },
                                text: `${row + 1}`,
                                alignment,
                              }),
                            ],
                          }),
                          new TableCell({
                            verticalAlign,
                            children: [
                              new Paragraph({
                                spacing: {
                                  after: 0,
                                },
                                text: `${
                                  this.datePipe.transform(
                                    schedule.oldSchedule.date,
                                    'dd/MM/Y'
                                  ) ?? schedule.oldSchedule.date
                                }, ca ${schedule.oldSchedule.shift}, ${
                                  schedule.oldSchedule.room
                                }`,
                                alignment,
                              }),
                            ],
                          }),
                          new TableCell({
                            verticalAlign,
                            children: [
                              new Paragraph({
                                spacing: {
                                  after: 0,
                                },
                                text: schedule.moduleClassName,
                                alignment,
                              }),
                            ],
                          }),
                          new TableCell({
                            verticalAlign,
                            children: [
                              new Paragraph({
                                spacing: {
                                  after: 0,
                                },
                                text: schedule.reason,
                                alignment,
                              }),
                            ],
                          }),
                          new TableCell({
                            verticalAlign,
                            children: [
                              new Paragraph({
                                alignment,
                                spacing: {
                                  after: 0,
                                },
                                children: schedule.newSchedule.date
                                  ? [
                                      new TextRun({
                                        text: `${
                                          this.datePipe.transform(
                                            schedule.newSchedule.date,
                                            'dd/MM/Y'
                                          ) ?? schedule.newSchedule.date
                                        }, ca ${
                                          schedule.newSchedule.shift ?? ''
                                        },`,
                                      }),
                                      new TextRun({
                                        break: 1,
                                        text: `${
                                          schedule.newSchedule.room ?? ''
                                        }`,
                                      }),
                                    ]
                                  : [
                                      new TextRun({
                                        text: schedule.intendTime ?? '',
                                      }),
                                    ],
                              }),
                            ],
                          }),
                        ],
                      })
                  ),
              ],
            }),
          ],
        },
      ],
    });
  }

  private calculateRangeText(
    range: TuiDayRange,
    rangeOptions: {
      sameMonth: boolean;
      inOneYear: boolean;
    }
  ): string {
    return rangeOptions.sameMonth
      ? `th??ng ${DateHelper.beautifyDay(range.from.month + 1)}/${
          range.from.year
        }`
      : rangeOptions.inOneYear
      ? `n??m ${range.from.year}`
      : `t??? ${DateHelper.beautifyDay(range.from.day)}/${DateHelper.beautifyDay(
          range.from.month + 1
        )}/${range.from.year} ?????n ${DateHelper.beautifyDay(
          range.to.day
        )}/${DateHelper.beautifyDay(range.to.month + 1)}/${range.to.year}`;
  }
}
