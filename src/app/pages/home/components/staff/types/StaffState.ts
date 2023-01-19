import { StaffMember } from './StaffMember';

export interface StaffState {
  staff: StaffMember[] | null;
  errors: string[] | null;
}
