import app from "../index.js";

export const handler = async (event, context) => {
    return new Promise(async (resolve, reject) => {
        // Create a mock Express request and response objects
        const req = {};
        const res = {
            render: (view, data) => {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({
                        view,
                        data,
                    }),
                });
            },
            status: (code) => {
                return {
                    send: (text) => {
                        resolve({
                            statusCode: code,
                            body: text,
                        });
                    },
                };
            },
        };

        try {
            // Simulate Express app behavior with the mock objects
            await app(req, res);
        } catch (error) {
            reject({
                statusCode: 500,
                body: 'Internal Server Error',
            });
            console.error('Error:', error);
        }
    });
};
