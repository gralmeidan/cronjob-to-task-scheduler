# Cronjob-to-Task-Scheduler

`cronjob-to-task-scheduler` is a library that converts a cron schedule to a Windows task schedule.

# How to Use

To use the library, follow these steps:



# Limitations

- A schedule must have a maximum of 37 triggers.

- It does not support day (month) and day (week) together. For example: (0 22 1 * 1-5).

- The rule for modifiers with / has not been implemented.
