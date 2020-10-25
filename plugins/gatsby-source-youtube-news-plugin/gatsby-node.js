const axios = require('axios');
const get = require('lodash/get');

const getApi = () => {
    const rateLimit = 500;
    let lastCalled = null;
    const rateLimiter = call => {
        const now = Date.now();
        if (lastCalled) {
            lastCalled += rateLimit;
            const wait = lastCalled - now;
            if (wait > 0) {
                return new Promise(resolve => setTimeout(() => resolve(call), wait))
            }
        }
        lastCalled = now;
        return call;
    }
    const api = axios.create({
        baseURL: "https://www.googleapis.com/youtube/v3/"
    })

    api.interceptors.request.use(rateLimiter);

    return api;
}

exports.sourceNodes = ({actions, createNodeId, createContentDigest}) => {
    const nodeData = {
        title: 'Test Node',
        description: 'Testing the node',
    }

    const newNode = {
        ...nodeData,
        id: createNodeId('TestNode-testid'),
        internal: {
            type: 'TestNode',
            contentDigest: createContentDigest(nodeData),
        },
    }

    actions.createNode(newNode);
}