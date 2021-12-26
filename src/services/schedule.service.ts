import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScheduleModel } from '@models/schedule/schedule.model';
import { SearchSchedule } from '@models/schedule/search-schedule.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScheduleDta } from 'src/shared/dtas/schedule.dta';
import { BaseDataService } from './core/base-data.service';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService extends BaseDataService {
  constructor(private http: HttpClient) {
    super();
  }

  public getDepartmentSchedule(
    department: string,
    params: SearchSchedule
  ): Observable<ScheduleModel[]> {
    return this.http
      .get<ScheduleDta[]>(
        this.url + `departments/${department}/schedules`,
        { params: { ...params } }
      )
      .pipe(
        map((response) => {
          return response.map((x) => ScheduleModel.parse(x, 'exam'));
        })
      );
  }

  public getExamSchedule(): Observable<ScheduleModel[]> {
    return this.http
      .get<ScheduleDta[]>(this.url + 'teachers/0849/exam-schedules')
      .pipe(
        map((response) => {
          return response.map((x) => ScheduleModel.parse(x, 'exam'));
        })
      );
  }

  public getDepartmentExamSchedule(
    department: string
  ): Observable<ScheduleModel[]> {
    return this.http
      .get<ScheduleDta[]>(this.url + `departments/${department}/exam-schedules`)
      .pipe(
        map((response) => {
          return response.map((x) => ScheduleModel.parse(x, 'exam'));
        })
      );
  }

  public updateNote(body: Record<string, number | string>): Observable<void> {
    return this.http.put<void>(this.url + 'exam-schedules/update', body);
  }
}
