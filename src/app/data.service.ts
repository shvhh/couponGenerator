import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
    private rechargeCoupon = new BehaviorSubject<any>(null);
    private loginScreenStatus = new BehaviorSubject<boolean>(true);
    loaderStatus = new BehaviorSubject<boolean>(true);
    getLoaderStatus = this.loaderStatus.asObservable();
    getRechargeCoupon = this.rechargeCoupon.asObservable();
    getLoginScreenStatus = this.loginScreenStatus.asObservable();
    constructor() { }

    setReachargeCoupon(coupon): void {
        this.rechargeCoupon.next(coupon);
    }
    setLoginScreenStatus(isLoginPage) {
        this.loginScreenStatus.next(isLoginPage);
    }

    setLoaderStatus(isLoader) {
        this.loaderStatus.next(isLoader);
    }
}
