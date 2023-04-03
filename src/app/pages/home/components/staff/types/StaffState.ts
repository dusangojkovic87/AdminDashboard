import { StaffMember } from './StaffMember';

export interface StaffState {
  staff: StaffMember[];
  errors: string[] | null;
  filteredStaff: StaffMember[];
  isAddStaffModalOpen: boolean;
}
