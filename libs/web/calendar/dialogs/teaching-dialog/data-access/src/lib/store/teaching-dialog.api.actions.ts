import { createAction, props } from '@ngrx/store';
import {
  SimpleFixedScheduleModel,
  StudyScheduleModel,
} from '@teaching-scheduling-system/web/shared/data-access/models';
import { TeachingDialogChange } from '.';

export const requestSuccessful = createAction(
  '[Study Editor Dialog API] Request Successfully',
  props<{ justRequestedSchedule: SimpleFixedScheduleModel }>()
);

export const requestFailure = createAction(
  '[Study Editor Dialog API] Request Failed'
);

export const requestIntendSuccessful = createAction(
  '[Study Editor Dialog API] Request intend Successfully',
  props<{ justRequestedSchedule: SimpleFixedScheduleModel }>()
);

export const requestIntendFailure = createAction(
  '[Study Editor Dialog API] Request intend Failed'
);

export const changeSuccessful = createAction(
  '[Study Editor Dialog API] Change Successfully'
);

export const changeFailure = createAction(
  '[Study Editor Dialog API] Change Failed'
);

export const updateSuccessful = createAction(
  '[Study Editor Dialog API] Update Successfully',
  props<{ change: TeachingDialogChange }>()
);

export const updateFailure = createAction(
  '[Study Editor Dialog API] Update Failed'
);

export const searchSuccessful = createAction(
  '[Study Editor Dialog API] Search Successfully',
  props<{
    searchSchedule: StudyScheduleModel[];
  }>()
);

export const searchFailure = createAction(
  '[Study Editor Dialog API] Search Failed'
);

export const cancelSuccessful = createAction(
  '[Study Editor Dialog API] Cancel Successfully'
);

export const cancelFailure = createAction(
  '[Study Editor Dialog API] Cancel Failed'
);
