var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var BatteryStatus = /** @class */ (function (_super) {
    __extends(BatteryStatus, _super);
    function BatteryStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatteryStatus.prototype.onChange = function () { return cordova(this, "onChange", { "eventObservable": true, "event": "batterystatus" }, arguments); };
    BatteryStatus.prototype.onLow = function () { return cordova(this, "onLow", { "eventObservable": true, "event": "batterylow" }, arguments); };
    BatteryStatus.prototype.onCritical = function () { return cordova(this, "onCritical", { "eventObservable": true, "event": "batterycritical" }, arguments); };
    BatteryStatus.pluginName = "BatteryStatus";
    BatteryStatus.plugin = "cordova-plugin-battery-status";
    BatteryStatus.pluginRef = "navigator.battery";
    BatteryStatus.repo = "https://github.com/apache/cordova-plugin-battery-status";
    BatteryStatus.platforms = ["iOS", "Android", "Windows", "Browser"];
    BatteryStatus = __decorate([
        Injectable()
    ], BatteryStatus);
    return BatteryStatus;
}(IonicNativePlugin));
export { BatteryStatus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhdHRlcnktc3RhdHVzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBZ0RDLGlDQUFpQjs7OztJQVNsRCxnQ0FBUTtJQVlSLDZCQUFLO0lBWUwsa0NBQVU7Ozs7OztJQWpDQyxhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBbEQxQjtFQWtEbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXR0ZXJ5U3RhdHVzUmVzcG9uc2Uge1xuICAvKipcbiAgICogVGhlIGJhdHRlcnkgY2hhcmdlIHBlcmNlbnRhZ2VcbiAgICovXG4gIGxldmVsOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXZpY2UgaXMgcGx1Z2dlZCBpblxuICAgKi9cbiAgaXNQbHVnZ2VkOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEJhdHRlcnkgU3RhdHVzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5c3RhdHVzLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQmF0dGVyeVN0YXR1cyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5LXN0YXR1cykuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCYXR0ZXJ5U3RhdHVzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXR0ZXJ5LXN0YXR1cy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmF0dGVyeVN0YXR1czogQmF0dGVyeVN0YXR1cykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIHdhdGNoIGNoYW5nZSBpbiBiYXR0ZXJ5IHN0YXR1c1xuICogY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5iYXR0ZXJ5U3RhdHVzLm9uQ2hhbmdlKCkuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gKiAgICBjb25zb2xlLmxvZyhzdGF0dXMubGV2ZWwsIHN0YXR1cy5pc1BsdWdnZWQpO1xuICogfSk7XG4gKlxuICogLy8gc3RvcCB3YXRjaFxuICogc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQmF0dGVyeVN0YXR1c1Jlc3BvbnNlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmF0dGVyeVN0YXR1cycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhdHRlcnktc3RhdHVzJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmJhdHRlcnknLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5LXN0YXR1cycsXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCcsICdXaW5kb3dzJywgJ0Jyb3dzZXInXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5U3RhdHVzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogV2F0Y2ggdGhlIGNoYW5nZSBpbiBiYXR0ZXJ5IGxldmVsXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHB1c2hlcyBhIHN0YXR1cyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5c3RhdHVzJ1xuICB9KVxuICBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCB3aGVuIHRoZSBiYXR0ZXJ5IGxldmVsIGdvZXMgbG93XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHB1c2hlcyBhIHN0YXR1cyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5bG93J1xuICB9KVxuICBvbkxvdygpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCB3aGVuIHRoZSBiYXR0ZXJ5IGxldmVsIGdvZXMgdG8gY3JpdGljYWxcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgcHVzaGVzIGEgc3RhdHVzIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2JhdHRlcnljcml0aWNhbCdcbiAgfSlcbiAgb25Dcml0aWNhbCgpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19