import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '@models/core/teacher.model';
import { ChangePassword } from '@models/user/change-password.model';
import { SendFeedback } from '@models/user/send-feedback.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeacherDta } from 'src/shared/dtas/teacher.dta';
import { BaseDataService } from './core/base-data.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseDataService {
  constructor(private http: HttpClient) {
    super();
  }

  public me(): Observable<Teacher | undefined> {
    return this.http
      .get<TeacherDta>(this.url + 'users')
      .pipe(map((response) => Teacher.parse(response)));
  }

  public changePassword(body: ChangePassword): Observable<void> {
    return this.http.post<void>(this.url + 'account/change-password', body);
  }

  public sendFeedback(body: SendFeedback): Observable<void> {
    return this.http.post<void>(this.url + 'feedbacks/send-feedback', body);
  }
}
