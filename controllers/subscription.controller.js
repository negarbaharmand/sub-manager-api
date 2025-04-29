import Subscription from '../models/subscription.model.js';
import {workflowClient} from "../config/upstash.js";
import {SERVER_URL} from "../config/env.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id, //The user needs to be logged in, add authorize middleware to the route
        });

        const {workflowRunId} = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription.id,
            },
            headers: {
                "content-type": "application/json",
            },
            retries: 0,
        });

        res.status(201).json({
            success: true,
            message: "Subscription created successfully",
            data: {
                subscription,
                workflowRunId,
            },
        });
    } catch (error) {
        next(error);
    }
};


export const getUserSubscriptions = async (req, res, next) => {
    try {
        //Check if the user is the same as the one in the token
        if (req.user.id !== req.user.id) {
            const error = new Error('You are not the owner of this account');
            error.status = 401;
        }
        const subscriptions = await Subscription.find({user: req.params.id});
        res.status(200).json({success: true, data: subscriptions});
    } catch (error) {
        next(error);
    }
}