import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

export const getGovernance = (api, sid) => api.call(sid, 'pirania-app', 'show_governance', {});
export const getVoucherList = (api, sid) => api.call(sid, 'pirania', 'list_vouchers', {});
export const addMemberVoucher = (api, sid, input) => api.call(sid, 'pirania', 'add_member_voucher', input);
export const addVisitorVoucher = (api, sid, input) => api.call(sid, 'pirania', 'add_visitor_voucher', input);
