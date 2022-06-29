import { createAction } from '@ngrx/store';

export const reset = createAction('[App Shell Page] Reset');

export const keepLogin = createAction('[App Shell Page] Keep Login');

export const loadRooms = createAction('[App Shell Page] Load rooms');

export const loadSchoolYear = createAction(
  '[[App Shell Page] Load school year'
);

export const loadAcademicYear = createAction(
  '[[App Shell Page] Load academic year'
);