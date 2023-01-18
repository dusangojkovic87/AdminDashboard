//START DATE	END DATE	CAMPAIGNS NAME	CODE	PERCENTAGE	PRODUCT TYPE	STATUS	ACTIONS

export interface Coupon {
  id: string;
  startDate: string;
  endDate: string;
  campaignsName: string;
  code: string;
  percentage: number;
  productType: string;
  status: string;
}
