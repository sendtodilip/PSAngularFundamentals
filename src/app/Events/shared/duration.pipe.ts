import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 1: return 'Half Hour';
                break;
            case 2: return 'One Hour';
                break;
            case 3: return 'Half Day';
                break;
            case 4: return 'Full Day';
                break;
            default: return value.toString();

        }
    }
}