// Import packages
const FirebaseApp = require("./Firebase");

// Push Notify a particular user
const SendPushNotification = async ({
    push_token = null,
    data = {},
    title,
    body,
    channelId = "oncampusDefault",
    imageUrl = null,
}) => {
    try {
        if (push_token === null || push_token.length === 0)
            return { status: 403, data: "Push Token is required", ok: false };

        const response = await FirebaseApp.messaging().send({
            token: push_token,
            notification: {
                title: title,
                body: body,
                // include imageUrl only if its not null
                ...(imageUrl && {
                    imageUrl: imageUrl,
                }),
            },
            android: {
                notification: {
                    channelId: channelId,
                    // include imageUrl only if its not null
                    ...(imageUrl && {
                        imageUrl: imageUrl,
                    }),
                },
            },
            data: {
                ...data,
                // include imageUrl only if its not null
                ...(imageUrl && {
                    bigPictureUrl: imageUrl,
                    largeIconUrl: imageUrl,
                }),
            },
        });

        return { status: 200, data: response, ok: true };
    } catch (error) {
        return { status: 501, data: "Server Error. Please try again Later", ok: false };
    }
};

exports.SendPushNotification = SendPushNotification;
