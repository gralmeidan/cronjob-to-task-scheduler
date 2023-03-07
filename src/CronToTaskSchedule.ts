import { DaysOfMonth } from "./Handlers/DaysOfMonth";
import { DaysOfWeek } from "./Handlers/DaysOfWeek";
import { Hours } from "./Handlers/Hours";
import { Minutes } from "./Handlers/Minutes";
import { Months } from "./Handlers/Months";
import { SelectScheduleType } from "./Handlers/SelectScheduleType";

export class CronToTaskSchedule
{
    static convert(cronSyntax: string, taskName: string, taskCommand: string){

        let command = `schtasks /create /tn "UiPathSchedules\\${taskName}" /tr "cmd /c ${taskCommand}"`;
        
        let schedule = SelectScheduleType.select({
            minutes: Minutes.convert(cronSyntax),
            hours: Hours.convert(cronSyntax),
            months: Months.convert(cronSyntax),
            daysOfWeeks: DaysOfWeek.convert(cronSyntax),
            daysOfMonths: DaysOfMonth.convert(cronSyntax)
        });
        
        if(!Array.isArray(schedule)) return command + ' ' + schedule

        let commands: string[] = [];

        schedule.forEach((value)=>{
            commands.push(`${command} ${value}`)
        })

        return commands;
    }
}