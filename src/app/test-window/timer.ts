import { Observable, Subscriber } from "rxjs";

export class Timer {
    intervalId: number | undefined;
    duration = 60;

    constructor(duration: number) {
        this.duration = duration;
    }

    public startTimer(): Observable<number> {
        return new Observable(subscriber => {
            this.intervalId = window.setInterval(() => this.tick(subscriber), 1000);
        });
    }
    
    tick(subscriber: Subscriber<number>) {
        if (this.duration <= 0) {
            this.stopTimer();
            subscriber.complete();
        } else {
            this.duration = this.duration - 1;
            subscriber.next(this.duration);
        }
    }
    
    stopTimer() {
        console.log("clearing interval");
        window.clearInterval(this.intervalId);
        this.intervalId = undefined;
    }
}