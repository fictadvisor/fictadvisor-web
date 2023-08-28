import { SharedEventBody } from './shared';

export interface PatchEventBody extends Partial<SharedEventBody> {
  week: string;
}
