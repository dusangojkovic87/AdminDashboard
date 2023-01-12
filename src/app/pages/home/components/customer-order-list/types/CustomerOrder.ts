import { InvoiceItem } from './InvoiceItem';

export interface CustomerOrder {
  id: number;
  time: string;
  shippAddress: string;
  phone: number;
  status: string;
  invoices: InvoiceItem[] | null;
  customerId: number;
  paymentMethod: string;
  discount: number;
  shippingCost: number;
  total: number;
}
