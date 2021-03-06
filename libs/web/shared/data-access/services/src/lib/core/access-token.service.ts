import { Injectable } from '@angular/core';
import { LocalStorageKeyConstant } from '@teaching-scheduling-system/core/data-access/constants';
import { Nullable } from '@teaching-scheduling-system/core/data-access/models';
import { LocalStorageService } from './storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AccessTokenService {
  /** CONSTRUCTOR */
  constructor(private readonly localStorageService: LocalStorageService) {}

  /** PUBLIC METHODS */
  public get(): Nullable<string> {
    return this.localStorageService.getItem(
      LocalStorageKeyConstant.ACCESS_TOKEN
    );
  }

  public save(token: string): void {
    this.localStorageService.setItem(
      LocalStorageKeyConstant.ACCESS_TOKEN,
      token
    );
  }

  public clear(): void {
    this.localStorageService.removeItem(LocalStorageKeyConstant.ACCESS_TOKEN);
  }
}
