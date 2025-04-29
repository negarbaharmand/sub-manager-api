import dayjs from 'dayjs'

import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const {serve} = require('@upstash/workflow/express');

import Subscription from "../models/subscription.model.js";


const REMINDERS = [7, 5, 2, 1];

export const sendReminders = serve(async (context) => {
    const {subscriptionId} = context.requestPayload;

    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.status !== 'active') return;

    const renewalDate = dayjs(subscription.renewalDate);
    if (renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date has passed for subscription ${subscriptionId}.Stopping workflow`);
        return;
    }

    for (const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.subtract(daysBefore, 'day');
        //renewal date = 22 feb, reminder date = 15 feb, 17 feb, 20 feb, 21 feb
        if (reminderDate.isAfter(dayjs())) {
            await sleepUntilReminders(context, `Reminder ${daysBefore} days before`, reminderDate)
        }
        await triggerReminder(context, `Reminder ${daysBefore} days before`);
    }
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    });
}

const sleepUntilReminders = async (context, label, date) => {
    console.log(`Sleeping until ${label} reminder at ${date}`);
    await context.sleepUntil(label, date.toDate());
}

const triggerReminder = async (context, label) => {
    return await context.run(label, () => {
        console.log(`Triggering ${label} reminder`);
        //send email, SMS, push notification
    })
}